import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../lib/auth";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "developer@collegecourse.com",
    password: "dev12345"
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const result = loginUser(formData.email.trim(), formData.password.trim());

    if (!result.ok) {
      setMessage(`${result.message} New here? Create an account.`);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-3 py-3 md:px-6 md:py-6">
      <div className="mb-3 flex justify-end pr-1 md:mb-4">
        <Link to="/" className="text-sm font-bold text-aqua hover:text-cyan-700">
          Back to Home
        </Link>
      </div>

      <section className="grid overflow-hidden rounded-3xl border border-cyan-100 bg-white/95 shadow-float md:grid-cols-[1.1fr_1fr]">
        <div className="order-2 hidden border-t border-cyan-100/70 bg-cyan-50/60 p-4 md:order-1 md:block md:border-t-0 md:border-b-0 md:border-r md:p-8">
        <p className="mb-2 inline-block rounded-full bg-aqua/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-aqua">
          Welcome Back
        </p>
        <h1 className="font-heading text-2xl font-extrabold md:text-3xl">Login to Continue</h1>
        <p className="mt-2 text-sm text-ink/70">Access your dashboard, modules, and progress tracker.</p>
        <div className="mt-4 space-y-2 text-sm text-ink/70 md:mt-6">
          <p className="rounded-xl border border-cyan-100 bg-white px-3 py-2">Developer course path and modules</p>
          <p className="hidden rounded-xl border border-cyan-100 bg-white px-3 py-2 sm:block">Resume-friendly project milestones</p>
          <p className="hidden rounded-xl border border-cyan-100 bg-white px-3 py-2 md:block">Learning continuity from any page</p>
        </div>
        <p className="mt-4 text-xs font-semibold text-ink/60 md:mt-6">
          Demo user: developer@collegecourse.com / dev12345
        </p>
      </div>

        <div className="order-1 p-4 md:order-2 md:p-8">
          <Link to="/" className="mb-5 flex items-center justify-center gap-2 font-heading text-xl font-extrabold tracking-tight text-ink md:text-2xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-aqua to-emerald-400 text-sm text-white shadow">
              C
            </span>
            <span>CollegeCourse</span>
          </Link>

          <form className="space-y-3.5 md:space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm font-semibold text-ink/80">
            Email
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={onChange}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none ring-cyan-200 focus:ring"
              placeholder="Enter your email"
            />
          </label>

          <label className="block text-sm font-semibold text-ink/80">
            Password
            <div className="mt-1 flex overflow-hidden rounded-xl border border-slate-200 bg-white ring-cyan-200 focus-within:ring">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={onChange}
                className="w-full px-3 py-2.5 outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="border-l border-slate-200 px-3 text-xs font-bold uppercase tracking-wider text-aqua"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          <button className="w-full rounded-xl bg-aqua px-4 py-2.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 md:py-3" type="submit">
            Login
          </button>
          </form>

          <p className="mt-3 min-h-6 text-sm font-semibold text-red-600">{message}</p>
          <p className="text-center text-xs font-bold uppercase tracking-wider text-ember">New to CollegeCourse?</p>
          <Link
            to="/register"
            className="mt-1 inline-flex w-full items-center justify-center gap-2 text-sm font-bold text-ember transition hover:translate-x-0.5"
          >
            Create your account
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
