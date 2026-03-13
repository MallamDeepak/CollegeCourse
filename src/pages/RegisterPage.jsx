import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../lib/auth";

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const result = registerUser({
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password.trim()
    });

    setMessage(result.message);
    setSuccess(result.ok);

    if (result.ok) {
      window.setTimeout(() => {
        navigate("/login");
      }, 900);
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 md:px-6">
      <div className="mb-4 flex justify-end pr-1">
        <Link to="/" className="text-sm font-bold text-aqua hover:text-cyan-700">
          Back to Home
        </Link>
      </div>

      <section className="grid overflow-hidden rounded-3xl border border-cyan-100 bg-white/95 shadow-float md:grid-cols-[1.1fr_1fr]">
        <div className="border-b border-amber-100/70 bg-amber-50/60 p-7 md:border-b-0 md:border-r md:p-8">
        <p className="mb-2 inline-block rounded-full bg-ember/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ember">
          Join CollegeCourse
        </p>
        <h1 className="font-heading text-3xl font-extrabold">Create Your Account</h1>
        <p className="mt-2 text-sm text-ink/70">Start your developer course journey in less than a minute.</p>
        <div className="mt-6 space-y-2 text-sm text-ink/70">
          <p className="rounded-xl border border-amber-100 bg-white px-3 py-2">One-click access to dashboard after login</p>
          <p className="rounded-xl border border-amber-100 bg-white px-3 py-2">Clear roadmap from basics to deployment</p>
          <p className="rounded-xl border border-amber-100 bg-white px-3 py-2">Beginner-friendly learning structure</p>
        </div>
      </div>

        <div className="p-7 md:p-8">
          <Link to="/" className="mb-5 flex items-center justify-center gap-2 font-heading text-2xl font-extrabold tracking-tight text-ink">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-aqua to-emerald-400 text-sm text-white shadow">
              C
            </span>
            <span>CollegeCourse</span>
          </Link>

          <form className="space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm font-semibold text-ink/80">
            Full Name
            <input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={onChange}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none ring-amber-200 focus:ring"
              placeholder="Enter your full name"
            />
          </label>

          <label className="block text-sm font-semibold text-ink/80">
            Email
            <input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={onChange}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 outline-none ring-amber-200 focus:ring"
              placeholder="Enter your email"
            />
          </label>

          <label className="block text-sm font-semibold text-ink/80">
            Password
            <div className="mt-1 flex overflow-hidden rounded-xl border border-slate-200 bg-white ring-amber-200 focus-within:ring">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                minLength={6}
                required
                value={formData.password}
                onChange={onChange}
                className="w-full px-3 py-2.5 outline-none"
                placeholder="Minimum 6 characters"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="border-l border-slate-200 px-3 text-xs font-bold uppercase tracking-wider text-ember"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          <button className="w-full rounded-xl bg-ember px-4 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600" type="submit">
            Create Account
          </button>
          </form>

          <p className={`mt-3 min-h-6 text-sm font-semibold ${success ? "text-emerald-600" : "text-red-600"}`}>
            {message}
          </p>
          <p className="text-center text-xs font-bold uppercase tracking-wider text-aqua">Already have an account?</p>
          <Link to="/login" className="mt-2 inline-flex w-full items-center justify-center gap-2 text-sm font-bold text-aqua transition hover:translate-x-0.5">
            Back to login
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;
