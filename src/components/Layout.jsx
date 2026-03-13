import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../lib/auth";

const guestNavItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Courses", to: "/#courses" },
  { label: "Features", to: "/#features" },
  { label: "Contact", to: "/#contact" },
  { label: "Login", to: "/login" }
];

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeHash, setActiveHash] = useState("");
  const [routeLoading, setRouteLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const previousPathRef = useRef(location.pathname);
  const loadingTimeoutRef = useRef(null);
  const currentUser = getCurrentUser();
  const navItems = currentUser ? [] : guestNavItems;
  const isHashLink = (to) => to.includes("#");
  const sectionHashes = ["#about", "#courses", "#features", "#contact"];
  const hideChrome = location.pathname === "/login" || location.pathname === "/register";
  const hideFooter = hideChrome || location.pathname === "/dashboard";

  const isItemActive = (to) => {
    if (to === "/") {
      return location.pathname === "/" && !location.hash && !activeHash;
    }

    if (isHashLink(to)) {
      return (
        location.pathname === "/" &&
        (location.hash === to.slice(1) || (!location.hash && activeHash === to.slice(1)))
      );
    }

    return location.pathname === to;
  };

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.slice(1);
    const element = document.getElementById(id);
    if (element) {
      window.setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveHash("");
    }
  }, [location.pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!location.hash) {
      setActiveHash("");
    }
  }, [location.hash]);

  useEffect(() => {
    if (location.pathname === "/" && !location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sections = sectionHashes
      .map((hash) => document.getElementById(hash.slice(1)))
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 220 && !location.hash) {
          setActiveHash("");
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const onScroll = () => {
      if (window.scrollY < 220 && !location.hash) {
        setActiveHash("");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (previousPathRef.current === location.pathname) {
      return;
    }

    previousPathRef.current = location.pathname;

    // Always reset to top when navigating to a different page.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    setRouteLoading(true);

    window.clearTimeout(loadingTimeoutRef.current);
    loadingTimeoutRef.current = window.setTimeout(() => {
      setRouteLoading(false);
    }, 380);

    return () => window.clearTimeout(loadingTimeoutRef.current);
  }, [location.pathname]);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {routeLoading && (
        <div className="fixed inset-0 z-[60] bg-white/45 backdrop-blur-[1px]">
          <div className="h-1 w-full overflow-hidden bg-transparent">
            <div className="h-full w-1/3 animate-[loader_0.9s_ease-in-out_infinite] rounded-r-full bg-aqua" />
          </div>
        </div>
      )}
      {!hideChrome && (
        <header className="sticky top-0 z-20 border-b border-cyan-100/70 bg-white/85 backdrop-blur-xl">
          <div className="mx-auto flex w-[min(1140px,92%)] items-center justify-between py-3 md:py-4">
            <Link to="/" className="group flex items-center gap-2 font-heading text-xl font-extrabold tracking-tight text-ink md:text-2xl">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-aqua to-emerald-400 text-sm text-white shadow">
                C
              </span>
              <span className="transition group-hover:text-aqua">CollegeCourse</span>
            </Link>
            <div className="flex items-center gap-2 md:gap-3">
              <nav className="hidden flex-wrap items-center gap-1.5 text-xs font-bold uppercase tracking-wider md:flex md:text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`rounded-full px-3 py-2 transition ${
                      isItemActive(item.to)
                        ? "bg-ember text-white"
                        : "text-ink/70 hover:bg-cyan-50 hover:text-aqua"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {currentUser && (
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-full px-3 py-2 text-ink/70 transition hover:bg-cyan-50 hover:text-aqua"
                  >
                    Logout
                  </button>
                )}
              </nav>

              {currentUser && (
                <div className="hidden items-center gap-2 rounded-full border border-cyan-100 bg-white px-2.5 py-1.5 md:flex">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-aqua text-xs font-bold text-white">
                    {currentUser.name?.charAt(0)?.toUpperCase() || "U"}
                  </span>
                  <p className="max-w-[140px] truncate text-xs font-semibold text-ink/80 md:max-w-[200px]">
                    {currentUser.name}
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-100 bg-white text-ink md:hidden"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? "x" : "="}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="mx-auto w-[min(1140px,92%)] border-t border-cyan-100/80 py-3 md:hidden">
              <nav className="flex flex-col gap-1 text-xs font-bold uppercase tracking-wider">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-lg px-3 py-2.5 transition ${
                      isItemActive(item.to)
                        ? "bg-ember text-white"
                        : "text-ink/70 hover:bg-cyan-50 hover:text-aqua"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {currentUser && (
                  <>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-cyan-100 bg-white px-3 py-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-aqua text-xs font-bold text-white">
                        {currentUser.name?.charAt(0)?.toUpperCase() || "U"}
                      </span>
                      <p className="truncate text-xs font-semibold text-ink/80">{currentUser.name}</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="rounded-lg px-3 py-2.5 text-left text-ink/70 transition hover:bg-cyan-50 hover:text-aqua"
                    >
                      Logout
                    </button>
                  </>
                )}
              </nav>
            </div>
          )}
        </header>
      )}

      <main
        className={`mx-auto w-[min(1140px,92%)] ${
          hideChrome ? "flex min-h-screen items-center justify-center py-4 md:py-6" : "py-7 md:py-12"
        }`}
      >
        {children}
      </main>

      {!hideFooter && (
        <footer className="relative border-t border-cyan-100/70 bg-white/90 py-8">
          <div className="mx-auto grid w-[min(1140px,92%)] gap-6 lg:grid-cols-[1fr_1fr_1.2fr]">
            <div>
              <h3 className="font-heading text-lg font-extrabold text-ink">CollegeCourse</h3>
              <p className="mt-2 text-sm text-ink/70">
                Modern developer learning portal built for practical growth, portfolio projects, and career readiness.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-ink/80">Explore</h4>
              <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-ink/70">
                <Link to="/#about" className="hover:text-aqua">About</Link>
                <Link to="/#courses" className="hover:text-aqua">Courses</Link>
                <Link to="/#features" className="hover:text-aqua">Features</Link>
                <Link to="/#faq" className="hover:text-aqua">FAQ</Link>
                <Link to="/#contact" className="hover:text-aqua">Contact</Link>
                <Link to="/dashboard" className="hover:text-aqua">Dashboard</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-ink/80">Location</h4>
              <div className="mt-2 overflow-hidden rounded-2xl border border-cyan-100 bg-slate-50">
                <iframe
                  title="CollegeCourse location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.585%2C12.965%2C77.605%2C12.985&layer=mapnik&marker=12.9756%2C77.5946"
                  className="h-52 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-2 text-sm text-ink/70">
                Bengaluru City Center, Karnataka, India
              </p>
            </div>
          </div>
          <p className="mx-auto mt-6 w-[min(1140px,92%)] border-t border-cyan-100 pt-4 text-xs text-ink/60">
            © 2026 CollegeCourse. Learn, build, and launch your developer career.
          </p>
        </footer>
      )}
    </div>
  );
}

export default Layout;
