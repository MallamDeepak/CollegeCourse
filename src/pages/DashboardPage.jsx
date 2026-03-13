import { useState } from "react";
import { Navigate } from "react-router-dom";
import { developerCourses } from "../data/courses";
import { getCurrentUser } from "../lib/auth";
import CourseRoadmapModal from "../components/CourseRoadmapModal";

function DashboardPage() {
  const currentUser = getCurrentUser();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    try { return JSON.parse(localStorage.getItem("collegecourse_enrolled") || "[]"); } catch { return []; }
  });

  const refreshEnrolled = () => {
    try { setEnrolledCourses(JSON.parse(localStorage.getItem("collegecourse_enrolled") || "[]")); } catch {}
  };

  const progressStats = [
    { label: "Tracks", value: "3" },
    { label: "Modules", value: "20+" },
    { label: "Projects", value: "8" }
  ];

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="space-y-7">
      {selectedCourse && (
        <CourseRoadmapModal
          course={selectedCourse}
          moduleIndex={selectedIndex}
          onClose={() => { setSelectedCourse(null); setSelectedIndex(null); refreshEnrolled(); }}
        />
      )}
      <section className="rounded-3xl border border-cyan-100 bg-white/95 p-7 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-aqua">Authenticated</p>
            <h1 className="font-heading text-3xl font-extrabold">Welcome, {currentUser.name}</h1>
            <p className="mt-1 text-ink/70">You are now viewing your personalized developer learning path.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {progressStats.map((item) => (
            <article key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-aqua">{item.label}</p>
              <p className="mt-1 font-heading text-2xl font-extrabold text-ink">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-extrabold">Developer Courses</h2>
        <p className="mt-1 text-sm text-ink/70">Recommended order based on practical software development workflow.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {developerCourses.map((course, index) => {
            const isEnrolled = enrolledCourses.includes(course.title);
            return (
              <article
                key={course.title}
                onClick={() => { setSelectedCourse(course); setSelectedIndex(index); }}
                className={`cursor-pointer rounded-2xl border bg-white/95 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${isEnrolled ? "border-emerald-300 ring-1 ring-emerald-200" : "border-slate-200 hover:border-aqua/40"}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-wider text-ember">Module {index + 1}</p>
                  {isEnrolled && (
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">✓ Enrolled</span>
                  )}
                </div>
                <img src={course.image} alt={course.title} className="mt-3 h-32 w-full rounded-2xl object-cover" />
                <h3 className="font-heading text-xl font-bold text-ink">{course.title}</h3>
                <p className="mt-2 text-sm text-ink/75">{course.description}</p>
                <p className={`mt-3 text-xs font-semibold ${isEnrolled ? "text-emerald-600" : "text-aqua"}`}>
                  {isEnrolled ? "View progress →" : "View roadmap →"}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
