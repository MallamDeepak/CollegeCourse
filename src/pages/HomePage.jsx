import { Link } from "react-router-dom";
import heroIllustration from "../assets/online-courses-logo-fixed.svg";
import { developerCourses } from "../data/courses";

function HomePage() {
  const highlights = [
    "Beginner to job-ready path",
    "Hands-on mini projects",
    "Career-focused course sequence"
  ];

  const features = [
    {
      title: "Guided Roadmaps",
      text: "Follow a week-by-week track for frontend, backend, and full stack development."
    },
    {
      title: "Project-Based Learning",
      text: "Build real deliverables like landing pages, APIs, and dashboard apps as you learn."
    },
    {
      title: "Progress Visibility",
      text: "Track completed modules and quickly continue from where you stopped."
    },
    {
      title: "Interview Prep",
      text: "Practice coding concepts, common interview topics, and portfolio presentation."
    }
  ];

  const testimonials = [
    {
      name: "Arjun M.",
      role: "Student Developer",
      text: "The learning flow is clean and practical. I moved from confusion to building complete apps."
    },
    {
      name: "Nisha K.",
      role: "Final Year Student",
      text: "I used the roadmap to prepare my portfolio and internship interviews in one place."
    },
    {
      name: "Rahul P.",
      role: "Career Switch Learner",
      text: "I liked how the platform breaks down topics into clear modules instead of random videos."
    }
  ];

  const faqs = [
    {
      q: "Who is CollegeCourse for?",
      a: "It is designed for beginners, college students, and career switchers who want structured developer training."
    },
    {
      q: "Do I need prior coding knowledge?",
      a: "No. The path starts with fundamentals and gradually progresses to advanced topics."
    },
    {
      q: "How do I start learning?",
      a: "Create an account, sign in, and open your dashboard to begin the developer course path."
    }
  ];

  return (
    <div className="space-y-10 md:space-y-12">
      <section className="animate-rise py-4 md:py-6 lg:min-h-[calc(100vh-130px)] lg:py-10">
        <div className="grid items-center gap-10 lg:min-h-[calc(100vh-210px)] lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-ember/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-ember">
              Career Launch Platform
            </p>
            <h1 className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-ink md:text-5xl">
              Learn development through a modern, structured learning experience.
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink/75 md:text-lg">
              CollegeCourse helps you move from coding basics to real project execution with a clear path,
              guided modules, and consistent progress tracking.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/register"
                className="rounded-xl bg-ember px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Create Account
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {highlights.map((item) => (
                <p
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink/70"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={heroIllustration}
              alt="Online courses brand visual"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 rounded-2xl border border-cyan-100/80 bg-white/90 p-7 md:p-8 lg:mt-4">
        <h2 className="font-heading text-2xl font-extrabold">About CollegeCourse</h2>
        <p className="mt-3 max-w-3xl text-ink/75">
          This platform includes a complete learning flow: modern home experience, register/login pages,
          protected learner dashboard, and a developer-focused curriculum after authentication.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-aqua">01</p>
            <h3 className="mt-1 font-heading text-lg font-bold">Register</h3>
            <p className="mt-2 text-sm text-ink/70">Create your account in seconds and get instant access.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-aqua">02</p>
            <h3 className="mt-1 font-heading text-lg font-bold">Login</h3>
            <p className="mt-2 text-sm text-ink/70">Sign in and access your personalized course dashboard.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-aqua">03</p>
            <h3 className="mt-1 font-heading text-lg font-bold">Build</h3>
            <p className="mt-2 text-sm text-ink/70">Follow the learning path and ship practical projects.</p>
          </article>
        </div>
      </section>

      <section id="courses" className="scroll-mt-24 rounded-2xl border border-cyan-100/80 bg-white/90 p-7 md:p-8">
        <h2 className="font-heading text-2xl font-extrabold">What You Will Learn</h2>
        <p className="mt-2 text-ink/70">A practical sequence inspired by modern developer bootcamp structure.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {developerCourses.slice(0, 4).map((course) => (
            <article key={course.title} className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 transition hover:-translate-y-1 hover:shadow-md">
              <img src={course.image} alt={course.title} className="mb-4 h-28 w-full rounded-2xl object-cover" />
              <h3 className="font-heading text-lg font-bold">{course.title}</h3>
              <p className="mt-3 text-sm text-ink/70">{course.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="scroll-mt-24 rounded-2xl border border-cyan-100/80 bg-white/90 p-7 md:p-8">
        <h2 className="font-heading text-2xl font-extrabold">Platform Features</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-heading text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonials" className="rounded-2xl border border-cyan-100/80 bg-white/90 p-7 md:p-8">
        <h2 className="font-heading text-2xl font-extrabold">Learner Feedback</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm text-ink/75">"{item.text}"</p>
              <p className="mt-4 font-heading text-base font-bold">{item.name}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-aqua">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="rounded-2xl border border-cyan-100/80 bg-white/90 p-7 md:p-8">
        <h2 className="font-heading text-2xl font-extrabold">Frequently Asked Questions</h2>
        <div className="mt-5 space-y-3">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="font-heading text-lg font-bold">{item.q}</h3>
              <p className="mt-2 text-sm text-ink/70">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 rounded-2xl border border-cyan-100/80 bg-white/90 p-7 md:p-8">
        <h2 className="font-heading text-2xl font-extrabold">Contact</h2>
        <p className="mt-2 text-ink/70">Need help with account access, learning path, or feedback? Reach us anytime.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-aqua">Email</p>
            <p className="mt-1 font-semibold text-ink">support@collegecourse.app</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-aqua">Phone</p>
            <p className="mt-1 font-semibold text-ink">+1 800 100 2026</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-aqua">Office Hours</p>
            <p className="mt-1 font-semibold text-ink">Mon - Sat, 9:00 AM - 6:00 PM</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
