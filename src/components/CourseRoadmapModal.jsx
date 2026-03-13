import { useEffect, useState } from "react";

const phaseColors = [
  { border: "border-cyan-400", bg: "bg-cyan-50", dot: "bg-cyan-400", tag: "bg-cyan-100 text-cyan-700" },
  { border: "border-amber-400", bg: "bg-amber-50", dot: "bg-amber-400", tag: "bg-amber-100 text-amber-700" },
  { border: "border-violet-400", bg: "bg-violet-50", dot: "bg-violet-400", tag: "bg-violet-100 text-violet-700" },
  { border: "border-emerald-400", bg: "bg-emerald-50", dot: "bg-emerald-400", tag: "bg-emerald-100 text-emerald-700" },
];

function CourseRoadmapModal({ course, moduleIndex, onClose }) {
  const [enrolled, setEnrolled] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("collegecourse_enrolled") || "[]");
      return saved.includes(course?.title);
    } catch { return false; }
  });

  const handleEnroll = () => {
    try {
      const saved = JSON.parse(localStorage.getItem("collegecourse_enrolled") || "[]");
      if (!saved.includes(course.title)) {
        saved.push(course.title);
        localStorage.setItem("collegecourse_enrolled", JSON.stringify(saved));
      }
    } catch {}
    setEnrolled(true);
  };
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2 py-2 backdrop-blur-sm md:px-4 md:py-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative flex max-h-[95vh] w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl md:max-h-[90vh] md:rounded-3xl">
        {/* Header */}
        <div className="relative overflow-hidden rounded-t-2xl border-b border-slate-100 md:rounded-t-3xl">
          {/* Banner background */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 pt-4 pb-14 md:px-6 md:pt-5 md:pb-16">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Module {moduleIndex + 1}
              </p>
              <button
              onClick={onClose}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <h2 className="mt-2 font-heading text-xl font-extrabold leading-tight text-white md:text-2xl">
            {course.title}
          </h2>
          </div>

          {/* Logo card overlapping banner */}
          <div className="-mt-9 flex flex-col items-start gap-3 px-4 pb-4 sm:flex-row sm:items-end sm:gap-5 md:px-6 md:-mt-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-xl ring-4 ring-white md:h-20 md:w-20">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-contain p-1"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 pb-1">
              <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                {course.level}
              </span>
              <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                ⏱ {course.duration}
              </span>
              <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                {course.roadmap.length * course.roadmap[0].topics.length}+ Topics
              </span>
              {enrolled && (
                <span className="rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                  ✓ Enrolled
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="space-y-6 overflow-y-auto px-4 py-4 md:px-6 md:py-5">
          {/* Description */}
          <p className="text-sm text-ink/75">{course.description}</p>

          {/* Roadmap timeline */}
          <div>
            <h3 className="mb-4 font-heading text-base font-bold text-ink">Full Learning Roadmap</h3>
            <div className="relative space-y-4 pl-4 md:pl-6">
              {/* Vertical line */}
              <div className="absolute bottom-2 left-1 top-2 w-0.5 rounded-full bg-slate-200 md:left-2" />

              {course.roadmap.map((phase, i) => {
                const color = phaseColors[i % phaseColors.length];
                return (
                  <div key={phase.phase} className="relative">
                    {/* Dot */}
                    <div className={`absolute -left-[14px] top-3 h-3 w-3 rounded-full border-2 border-white ${color.dot} shadow md:-left-[18px]`} />

                    <div className={`rounded-2xl border ${color.border} ${color.bg} p-4`}>
                      <div className="mb-3 flex items-center gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${color.tag}`}>
                          {phase.phase}
                        </span>
                        <span className="font-heading text-sm font-bold text-ink">
                          {phase.title}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {phase.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-sm text-ink/80">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills you'll gain */}
          <div>
            <h3 className="mb-3 font-heading text-base font-bold text-ink">Skills You'll Gain</h3>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-aqua/30 bg-cyan-50 px-3 py-1 text-xs font-semibold text-aqua"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* What you get card */}
          <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-amber-50 border border-cyan-100 p-4">
            <h3 className="mb-3 font-heading text-sm font-bold text-ink">What's included</h3>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { icon: "📹", text: "Video lessons" },
                { icon: "📝", text: "Hands-on projects" },
                { icon: "✅", text: "Quizzes & exercises" },
                { icon: "🏆", text: "Completion certificate" },
                { icon: "💬", text: "Community access" },
                { icon: "♾️", text: "Lifetime access" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-sm text-ink/80">
                  <span>{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 px-4 py-4 md:px-6">
          {enrolled ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 py-2.5 text-sm font-bold text-emerald-700">
                <span>✓</span> You're enrolled in this module!
              </div>
              <button
                onClick={onClose}
                className="rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleEnroll}
                className="flex-1 rounded-xl bg-aqua py-2.5 text-sm font-bold text-white transition hover:opacity-90 shadow-md shadow-cyan-200"
              >
                Enroll in this Module →
              </button>
              <button
                onClick={onClose}
                className="rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Maybe later
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseRoadmapModal;
