import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

/* ── SVG Icons ── */
const EyeIcon = ({ show }) =>
  show ? (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ) : (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

const MailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    // ALREADY LOGGED IN
    if (token) {
      navigate("/admin/dashboard");
    }
  }, []);

  // ── API CONNECT ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.trim(),
            password: password.trim(),
          }),
        },
      );

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Login failed. Check your credentials.");
        setLoading(false);
        return;
      }

      // TOKEN & ADMIN INFO SAVE
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminInfo", JSON.stringify(data.admin));

      // DASHBOARD REDIRECT
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Server error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="lg-page">
      <div className="lg-orb lg-orb-1" aria-hidden="true" />
      <div className="lg-orb lg-orb-2" aria-hidden="true" />

      <div className="lg-wrapper">
        {/* ── Logo ── */}
        <div className="lg-logo">
          <div className="lg-logo-icon" aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="lg-logo-name">
            Brand<span>mingo</span>
          </div>
        </div>

        {/* ── Card ── */}
        <div className="lg-card">
          <div className="lg-card-topline" aria-hidden="true" />
          <div className="lg-card-glow" aria-hidden="true" />

          {/* Header */}
          <div className="lg-header">
            <h1 className="lg-title">Welcome Back</h1>
            <p className="lg-sub">Sign in to access your admin dashboard</p>
          </div>

          {/* Error */}
          {error && (
            <div className="lg-error" role="alert">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {error}
            </div>
          )}

          {/* Form */}
          <form className="lg-form" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div className="lg-field">
              <label className="lg-label" htmlFor="lg-email">
                Email Address
              </label>
              <div className="lg-input-wrap">
                <span className="lg-icon" aria-hidden="true">
                  <MailIcon />
                </span>
                <input
                  id="lg-email"
                  type="email"
                  className="lg-input"
                  placeholder="admin@brandmingo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  aria-label="Email address"
                />
              </div>
            </div>

            {/* Password */}
            <div className="lg-field">
              <div className="lg-label-row">
                <label className="lg-label" htmlFor="lg-pass">
                  Password
                </label>
                <a href="/forgot-password" className="lg-forgot">
                  Forgot Password?
                </a>
              </div>
              <div className="lg-input-wrap">
                <span className="lg-icon" aria-hidden="true">
                  <LockIcon />
                </span>
                <input
                  id="lg-pass"
                  type={showPass ? "text" : "password"}
                  className="lg-input lg-input--pass"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  aria-label="Password"
                />
                <button
                  type="button"
                  className="lg-eye"
                  onClick={() => setShowPass(!showPass)}
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  <EyeIcon show={showPass} />
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`lg-btn${loading ? " lg-btn--loading" : ""}`}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <>
                  <span className="lg-spinner" aria-hidden="true" />
                  Authenticating…
                </>
              ) : (
                <>
                  Secure Login
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12,5 19,12 12,19" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="lg-footer">
            © 2026 Brandmingo · Authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
}
