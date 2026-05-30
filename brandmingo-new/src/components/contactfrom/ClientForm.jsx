import React, { useState, useRef, useEffect } from "react";
import "./ClientForm.css";

/* ── Logo URLs ── */
const LOGOS = [
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909136/13_fqkqi8.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909136/15_jtngub.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909136/9_srd63d.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909136/10_rdyqbw.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909136/12_jxfycf.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/7_wltr7h.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/6_xzsqqo.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/3_wehha6.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/5_ulpkjg.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/2_hp07da.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909135/4_oiqfn4.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909138/1_ebpjkv.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775909137/11_kqv3rp.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910010/19_li2qkj.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910009/14_xe4e63.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910009/17_wwutuv.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910009/8_bf6si8.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910009/18_mckzrw.png",
  "https://res.cloudinary.com/dpdn7kzll/image/upload/v1775910007/16_qzhyjb.png",
];

/* ── Validation rules ── */
const validate = (name, value) => {
  switch (name) {
    case "fullName":
      if (!value.trim()) return "Full name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      if (!/^[a-zA-Z\s'-]+$/.test(value.trim()))
        return "Name can only contain letters.";
      return "";
    case "service":
      if (!value.trim()) return "Please enter the service you need.";
      if (value.trim().length < 3)
        return "Please describe the service in more detail.";
      return "";
    case "phone":
      if (!value.trim()) return "Phone number is required.";
      if (!/^\d{10}$/.test(value.replace(/\s/g, "")))
        return "Enter a valid 10-digit phone number.";
      return "";
    case "email":
      if (!value.trim()) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Enter a valid email address.";
      return "";
    case "project":
      if (!value.trim()) return "Please describe your project.";
      if (value.trim().length < 20)
        return "Please provide at least 20 characters.";
      return "";
    default:
      return "";
  }
};

/* ── Sun SVG ── */
const SunIcon = () => (
  <span className="cf-sun" aria-hidden="true">
    <svg
      viewBox="0 0 60 60"
      width="52"
      height="52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="12" fill="url(#sunGrad)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <rect
          key={i}
          x="28.5"
          y="4"
          width="3"
          height="9"
          rx="1.5"
          fill="url(#sunGrad)"
          transform={`rotate(${deg} 30 30)`}
          opacity={0.9 - i * 0.04}
        />
      ))}
      <defs>
        <radialGradient id="sunGrad" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFD93D" />
          <stop offset="60%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#FF6B1E" />
        </radialGradient>
      </defs>
    </svg>
  </span>
);

/* ── CheckIcon ── */
const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
    <circle cx="10" cy="10" r="10" fill="#22c55e" />
    <polyline
      points="5,10 8.5,13.5 15,7"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── FloatingInput ── */
const FloatingInput = ({
  type = "text",
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  prefix,
}) => {
  const hasVal = value.length > 0;
  return (
    <div
      className={`cf-field ${error && touched ? "cf-field--error" : ""} ${hasVal ? "cf-field--filled" : ""}`}
    >
      {prefix && <span className="cf-field-prefix">{prefix}</span>}
      <input
        type={type}
        id={`cf-${name}`}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={
          name === "email" ? "email" : name === "phone" ? "tel" : "off"
        }
        className={prefix ? "cf-input cf-input--prefix" : "cf-input"}
        placeholder=" "
        maxLength={name === "phone" ? 10 : undefined}
        aria-describedby={error && touched ? `cf-err-${name}` : undefined}
        aria-invalid={!!(error && touched)}
      />
      <label htmlFor={`cf-${name}`} className="cf-label">
        {label}
      </label>
      <span className="cf-border" />
      {error && touched && (
        <span className="cf-error" id={`cf-err-${name}`} role="alert">
          {error}
        </span>
      )}
      {!error && touched && hasVal && (
        <span className="cf-check">
          <CheckIcon />
        </span>
      )}
    </div>
  );
};

/* ── Main Component ── */
const ClientForm = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [fields, setFields] = useState({
    fullName: "",
    service: "",
    phone: "",
    email: "",
    project: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  /* Intersection observer for entrance animation */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Phone: digits only
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setFields((p) => ({ ...p, [name]: digits }));
      setErrors((p) => ({ ...p, [name]: validate(name, digits) }));
      return;
    }
    setFields((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: validate(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validate(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Touch all fields
    const allTouched = Object.keys(fields).reduce(
      (a, k) => ({ ...a, [k]: true }),
      {},
    );
    setTouched(allTouched);
    const allErrors = Object.keys(fields).reduce(
      (a, k) => ({ ...a, [k]: validate(k, fields[k]) }),
      {},
    );
    setErrors(allErrors);
    if (Object.values(allErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFields({
        fullName: "",
        service: "",
        phone: "",
        email: "",
        project: "",
      });
      setTouched({});
      setErrors({});
    }, 2000);
  };

  const isFormValid = Object.keys(fields).every(
    (k) => fields[k].trim() && !validate(k, fields[k]),
  );

  return (
    <section
      className={`cf-section${visible ? " cf-section--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="cf-heading"
    >
      {/* Background decoration */}
      <div className="cf-bg-deco" aria-hidden="true">
        <div className="cf-bg-orb cf-bg-orb--1" />
        <div className="cf-bg-orb cf-bg-orb--2" />
        <div className="cf-bg-grid" />
      </div>

      <div className="cf-container">
        {/* ── Heading ── */}
        <header className="cf-header">
          <p className="cf-eyebrow">GET IN TOUCH</p>
          <h2 className="cf-title" id="cf-heading">
            <span className="cf-title-line1">
              Let's Create <SunIcon />
            </span>
            <span className="cf-title-line2">Greatness Together!</span>
          </h2>
          <p className="cf-subtitle">
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>
        </header>

        {/* ── Main card ── */}
        <div className="cf-card">
          {/* Decorative top accent */}
          <div className="cf-card-accent" aria-hidden="true" />

          <div className="cf-grid">
            {/* ══ LEFT — Form ══ */}
            <div className="cf-form-wrap">
              <div className="cf-form-header">
                <div className="cf-form-badge">
                  <span className="cf-badge-dot" />
                  Available for new projects
                </div>
                <h3 className="cf-form-title">Discuss Your Project With Us</h3>
              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Project inquiry form"
              >
                <div className="cf-row">
                  <FloatingInput
                    name="fullName"
                    label="Full Name *"
                    value={fields.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.fullName}
                    touched={touched.fullName}
                  />
                  <FloatingInput
                    name="service"
                    label="Service Needed *"
                    value={fields.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.service}
                    touched={touched.service}
                  />
                </div>

                <div className="cf-row">
                  <FloatingInput
                    name="phone"
                    label="Phone Number *"
                    type="tel"
                    value={fields.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    touched={touched.phone}
                  />
                  <FloatingInput
                    name="email"
                    label="Email Address *"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                  />
                </div>

                {/* Textarea */}
                <div
                  className={`cf-field cf-field--textarea ${errors.project && touched.project ? "cf-field--error" : ""} ${fields.project ? "cf-field--filled" : ""}`}
                >
                  <textarea
                    id="cf-project"
                    name="project"
                    value={fields.project}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=" "
                    rows={4}
                    className="cf-input cf-textarea"
                    aria-describedby={
                      errors.project && touched.project
                        ? "cf-err-project"
                        : undefined
                    }
                    aria-invalid={!!(errors.project && touched.project)}
                  />
                  <label htmlFor="cf-project" className="cf-label">
                    About Your Project *
                  </label>
                  <span className="cf-border" />
                  {errors.project && touched.project && (
                    <span className="cf-error" id="cf-err-project" role="alert">
                      {errors.project}
                    </span>
                  )}
                  {!errors.project && touched.project && fields.project && (
                    <span className="cf-check">
                      <CheckIcon />
                    </span>
                  )}
                  <span className="cf-char-count">
                    {fields.project.length}/500
                  </span>
                </div>

                <p className="cf-privacy">
                  By submitting this form, I confirm that I have read &amp;
                  accept the{" "}
                  <a href="/privacy-policy" className="cf-privacy-link">
                    Privacy Policy
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  className={`cf-submit${isSubmitting ? " cf-submit--loading" : ""}${isFormValid ? " cf-submit--ready" : ""}`}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="cf-submit-inner">
                      <span className="cf-spinner" aria-hidden="true" />
                      Sending...
                    </span>
                  ) : (
                    <span className="cf-submit-inner">
                      Send A Message
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        width="18"
                        height="18"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10h12M11 5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="cf-success" role="status" aria-live="polite">
                    <CheckIcon />
                    <span>
                      Your message was sent successfully! We'll contact you
                      within 24 hours.
                    </span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="cf-error-msg" role="alert">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* ══ RIGHT — Trust logos ══ */}
            <div className="cf-trust-wrap">
              <div className="cf-trust-header">
                <div className="cf-trust-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      stroke="#FF6B1E"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      fill="rgba(255,107,30,0.12)"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="cf-trust-title">
                    Driven by Trust, Backed by Results
                  </h3>
                  <p className="cf-trust-sub">
                    Trusted by 100+ brands across India
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="cf-stats">
                {[
                  { val: "150+", label: "Projects Done" },
                  { val: "98%", label: "Satisfaction" },
                  { val: "5+", label: "Yrs Experience" },
                ].map((s, i) => (
                  <div className="cf-stat" key={i}>
                    <strong>{s.val}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Logo grid */}
              <div className="cf-logos" aria-label="Our trusted clients">
                {LOGOS.map((url, i) => (
                  <div
                    className="cf-logo-box"
                    key={i}
                    style={{ animationDelay: `${(i % 4) * 0.05}s` }}
                  >
                    <img
                      src={url}
                      alt={`Client logo ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      width="80"
                      height="50"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom trust badge */}
              <div className="cf-trust-badge">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    stroke="#22c55e"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="rgba(34,197,94,0.1)"
                  />
                </svg>
                <span>100% Confidential. No spam, ever.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientForm;
