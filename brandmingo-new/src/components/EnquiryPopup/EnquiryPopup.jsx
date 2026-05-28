import React, { useEffect, useState, useRef, useCallback } from "react";
import "./EnquiryPopup.css";

/* ─────────────────────────────────────────
   Country data — flag emoji + dial + digits
───────────────────────────────────────── */
const COUNTRIES = [
  { code: "IN", flag: "🇮🇳", dial: "+91", digits: 10, name: "India" },
  { code: "US", flag: "🇺🇸", dial: "+1", digits: 10, name: "USA" },
  { code: "GB", flag: "🇬🇧", dial: "+44", digits: 10, name: "UK" },
  { code: "AE", flag: "🇦🇪", dial: "+971", digits: 9, name: "UAE" },
  { code: "AU", flag: "🇦🇺", dial: "+61", digits: 9, name: "Australia" },
  { code: "CA", flag: "🇨🇦", dial: "+1", digits: 10, name: "Canada" },
  { code: "SG", flag: "🇸🇬", dial: "+65", digits: 8, name: "Singapore" },
  { code: "DE", flag: "🇩🇪", dial: "+49", digits: 11, name: "Germany" },
  { code: "FR", flag: "🇫🇷", dial: "+33", digits: 9, name: "France" },
  { code: "PK", flag: "🇵🇰", dial: "+92", digits: 10, name: "Pakistan" },
  { code: "BD", flag: "🇧🇩", dial: "+880", digits: 10, name: "Bangladesh" },
  { code: "LK", flag: "🇱🇰", dial: "+94", digits: 9, name: "Sri Lanka" },
  { code: "NZ", flag: "🇳🇿", dial: "+64", digits: 9, name: "New Zealand" },
  { code: "ZA", flag: "🇿🇦", dial: "+27", digits: 9, name: "South Africa" },
  { code: "NG", flag: "🇳🇬", dial: "+234", digits: 10, name: "Nigeria" },
];

/* ─────────────────────────────────────────
   Validation
───────────────────────────────────────── */
const makeValidators = (digits) => ({
  fullName: (v) => {
    if (!v.trim()) return "Full name is required.";
    if (v.trim().length < 2) return "At least 2 characters required.";
    if (!/^[a-zA-Z\s'.\-]+$/.test(v.trim())) return "Letters only please.";
    return "";
  },
  email: (v) => {
    const val = v.trim();
    if (!val) return "Email is required.";
    if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(val))
      return "Enter a valid email (e.g. you@gmail.com).";
    const [, domain] = val.split("@");
    if (!domain || !domain.includes(".")) return "Invalid email domain.";
    if (domain.startsWith(".") || domain.endsWith("."))
      return "Invalid email domain.";
    return "";
  },
  phone: (v) => {
    const d = v.replace(/\D/g, "");
    if (!d) return "Phone number is required.";
    if (d.length !== digits) return `Enter exactly ${digits} digits.`;
    return "";
  },
  company: (v) => (!v.trim() ? "Company name is required." : ""),
  service: (v) => (!v ? "Please select a service." : ""),
  overview: (v) => {
    if (!v.trim()) return "Project overview is required.";
    if (v.trim().length < 20) return "Minimum 20 characters required.";
    return "";
  },
});

const REQUIRED = [
  "fullName",
  "email",
  "phone",
  "company",
  "service",
  "overview",
];
const MAX_OVERVIEW = 600;

/* ─────────────────────────────────────────
   FieldGroup wrapper
───────────────────────────────────────── */
const FieldGroup = ({ label, required, error, touched, children }) => (
  <div className="ep-group">
    <label>
      {label}
      {required && <span className="ep-req"> *</span>}
    </label>
    {children}
    {touched && error && (
      <span className="ep-error-msg" role="alert">
        <i className="fa-solid fa-circle-exclamation" />
        {error}
      </span>
    )}
  </div>
);

/* ─────────────────────────────────────────
   Country Picker — simple dropdown, no search
───────────────────────────────────────── */
const CountryPicker = ({ selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <div className="ep-cpicker" ref={ref}>
      <button
        type="button"
        className="ep-cpicker-btn"
        onClick={() => setOpen(!open)}
        aria-label="Select country code"
        aria-expanded={open}
      >
        <span className="ep-flag">{selected.flag}</span>
        <span className="ep-dial">{selected.dial}</span>
        <i className={`fa-solid fa-chevron-${open ? "up" : "down"} ep-caret`} />
      </button>

      {open && (
        <ul className="ep-cpicker-list" role="listbox">
          {COUNTRIES.map((c) => (
            <li
              key={c.code}
              role="option"
              aria-selected={c.code === selected.code}
              className={c.code === selected.code ? "ep-cpicker-active" : ""}
              onClick={() => {
                onChange(c);
                setOpen(false);
              }}
            >
              <span className="ep-flag">{c.flag}</span>
              <span className="ep-cname">{c.name}</span>
              <span className="ep-cdial">{c.dial}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
const EnquiryPopup = ({ isOpen, onClose }) => {
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const firstRef = useRef(null);

  const blank = {
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    source: "",
    overview: "",
  };
  const blankChecks = {
    hasWebsite: false,
    needsContent: false,
    needsBranding: false,
    needsSupport: false,
  };

  const [values, setValues] = useState(blank);
  const [checks, setChecks] = useState(blankChecks);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  /* scroll lock + reset */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSubmitted(false);
      setLoading(false);
      setValues(blank);
      setChecks(blankChecks);
      setErrors({});
      setTouched({});
      setCountry(COUNTRIES[0]);
      setTimeout(() => firstRef.current?.focus(), 120);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* ESC */
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  const VALIDATORS = makeValidators(country.digits);

  const validate = (name, value) =>
    VALIDATORS[name] ? VALIDATORS[name](value) : "";

  const validateAll = () => {
    const ne = {},
      nt = {};
    REQUIRED.forEach((f) => {
      nt[f] = true;
      ne[f] = validate(f, values[f]);
    });
    setTouched((t) => ({ ...t, ...nt }));
    setErrors((e) => ({ ...e, ...ne }));
    return Object.values(ne).every((e) => !e);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name])
      setErrors((er) => ({ ...er, [name]: validate(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validate(name, value) }));
  };

  /* Phone: digits only, capped at country.digits */
  const handlePhone = (e) => {
    const d = e.target.value.replace(/\D/g, "").slice(0, country.digits);
    setValues((v) => ({ ...v, phone: d }));
    if (touched.phone)
      setErrors((er) => ({ ...er, phone: validate("phone", d) }));
  };

  const handlePhoneBlur = () => {
    setTouched((t) => ({ ...t, phone: true }));
    setErrors((er) => ({ ...er, phone: validate("phone", values.phone) }));
  };

  const handleCountry = (c) => {
    setCountry(c);
    setValues((v) => ({ ...v, phone: "" }));
    setErrors((er) => ({ ...er, phone: "" }));
    setTouched((t) => ({ ...t, phone: false }));
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setChecks((c) => ({ ...c, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const cls = (name) =>
    !touched[name] ? "" : errors[name] ? "ep-invalid" : "ep-valid";

  const filled = {
    info: !!(values.fullName && values.email && values.phone && values.company),
    project: !!(values.service && values.overview),
  };
  const step = !filled.info ? 1 : !filled.project ? 2 : 3;
  const overLen = values.overview.length;

  if (!isOpen) return null;

  return (
    <div
      className="ep-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project enquiry"
    >
      <div className="ep-modal" onClick={(e) => e.stopPropagation()}>
        {/* ══ SIDEBAR ══ */}
        <aside className="ep-sidebar">
          <div className="ep-sb-top">
            <div className="ep-brand-icon" aria-hidden="true">
              <i className="fa-solid fa-comment-dots" />
            </div>
            <h2 className="ep-heading">
              Let's Start a <span>Conversation</span>
            </h2>
            <p className="ep-subtext">
              Share your project details and our team will get back to you
              within <strong>24 hours.</strong>
            </p>
            <div className="ep-divider" />
            <ul className="ep-features">
              {[
                {
                  icon: "fa-shield-halved",
                  title: "Trusted by Top Brands",
                  desc: "Delivering excellence across industries worldwide.",
                },
                {
                  icon: "fa-rocket",
                  title: "Result-Driven Approach",
                  desc: "We focus on measurable outcomes that matter.",
                },
                {
                  icon: "fa-headset",
                  title: "Quick & Reliable Support",
                  desc: "Our team is always here to help you succeed.",
                },
              ].map((f) => (
                <li className="ep-feat-item" key={f.title}>
                  <div className="ep-feat-icon" aria-hidden="true">
                    <i className={`fa-solid ${f.icon}`} />
                  </div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="ep-help-card">
            <div className="ep-help-icon" aria-hidden="true">
              <i className="fa-solid fa-phone" />
            </div>
            <div>
              <small>Need immediate help?</small>
              <strong>+91 98765 43210</strong>
            </div>
          </div>
        </aside>

        {/* ══ FORM PANEL ══ */}
        <div className="ep-form-panel">
          <button
            className="ep-close-btn"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            &times;
          </button>

          {submitted ? (
            <div className="ep-success">
              <div className="ep-success-icon">
                <i className="fa-solid fa-check" />
              </div>
              <h3>Enquiry Sent!</h3>
              <p>
                Thank you! Our team will review your details and contact you
                within <strong>24 hours</strong>.
              </p>
              <button type="button" className="ep-submit-btn" onClick={onClose}>
                Close &nbsp;
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
          ) : (
            <>
              {/* Progress */}
              <div className="ep-progress" aria-label="Progress">
                {[
                  { n: 1, l: "Your Info" },
                  { n: 2, l: "Project" },
                  { n: 3, l: "Extras" },
                ].map(({ n, l }, i, arr) => (
                  <React.Fragment key={n}>
                    <div className="ep-pstep">
                      <div
                        className={`ep-pdot ${step > n ? "done" : step === n ? "active" : ""}`}
                      >
                        {step > n ? (
                          <i
                            className="fa-solid fa-check"
                            style={{ fontSize: 9 }}
                          />
                        ) : (
                          n
                        )}
                      </div>
                      <span
                        className={`ep-plabel ${step === n ? "active" : ""}`}
                      >
                        {l}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className={`ep-pline ${step > n ? "done" : ""}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <form onSubmit={handleSubmit} noValidate>
                {/* Section 1 */}
                <div className="ep-sec">
                  <div className="ep-sec-title">
                    <i className="fa-solid fa-user" aria-hidden="true" /> Your
                    Information
                  </div>
                  <div className="ep-row">
                    <FieldGroup
                      label="Full Name"
                      required
                      error={errors.fullName}
                      touched={touched.fullName}
                    >
                      <input
                        ref={firstRef}
                        type="text"
                        name="fullName"
                        placeholder="e.g. Rahul Sharma"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cls("fullName")}
                        autoComplete="name"
                        maxLength={80}
                      />
                    </FieldGroup>
                    <FieldGroup
                      label="Email Address"
                      required
                      error={errors.email}
                      touched={touched.email}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cls("email")}
                        autoComplete="email"
                        maxLength={120}
                        inputMode="email"
                      />
                    </FieldGroup>
                  </div>
                  <div className="ep-row">
                    <FieldGroup
                      label="Phone Number"
                      required
                      error={errors.phone}
                      touched={touched.phone}
                    >
                      <div
                        className={`ep-phone ${touched.phone ? (errors.phone ? "ep-invalid" : "ep-valid") : ""}`}
                      >
                        <CountryPicker
                          selected={country}
                          onChange={handleCountry}
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder={`${country.digits} digits`}
                          value={values.phone}
                          onChange={handlePhone}
                          onBlur={handlePhoneBlur}
                          autoComplete="tel"
                          inputMode="numeric"
                          maxLength={country.digits}
                        />
                      </div>
                    </FieldGroup>
                    <FieldGroup
                      label="Company / Organization"
                      required
                      error={errors.company}
                      touched={touched.company}
                    >
                      <input
                        type="text"
                        name="company"
                        placeholder="Your company name"
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={cls("company")}
                        autoComplete="organization"
                        maxLength={100}
                      />
                    </FieldGroup>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="ep-sec">
                  <div className="ep-sec-title">
                    <i className="fa-solid fa-briefcase" aria-hidden="true" />{" "}
                    Project Details
                  </div>
                  <div className="ep-row">
                    <FieldGroup
                      label="Service Interested In"
                      required
                      error={errors.service}
                      touched={touched.service}
                    >
                      <div className="ep-sel">
                        <select
                          name="service"
                          value={values.service}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={cls("service")}
                        >
                          <option value="">Select a service</option>
                          <option value="web">Web Development</option>
                          <option value="shopify">Shopify Website</option>
                          <option value="wordpress">WordPress Website</option>
                          <option value="react">React Development</option>
                          <option value="uiux">UI/UX Design</option>
                          <option value="ecommerce">E-Commerce</option>
                          <option value="seo">SEO & Marketing</option>
                          <option value="social">
                            Social Media Management
                          </option>
                          <option value="ads">Ads & Campaigns</option>
                          <option value="brand">Brand Identity</option>
                          <option value="crm">Custom CRM</option>
                        </select>
                      </div>
                    </FieldGroup>
                    <FieldGroup label="Project Budget">
                      <div className="ep-sel">
                        <select
                          name="budget"
                          value={values.budget}
                          onChange={handleChange}
                        >
                          <option value="">Select budget range</option>
                          <option value="1">₹15,000 – ₹35,000</option>
                          <option value="2">₹35,000 – ₹75,000</option>
                          <option value="3">₹75,000 – ₹1,50,000</option>
                          <option value="4">₹1,50,000+</option>
                        </select>
                      </div>
                    </FieldGroup>
                  </div>
                  <div className="ep-row">
                    <FieldGroup label="Project Timeline">
                      <div className="ep-sel">
                        <select
                          name="timeline"
                          value={values.timeline}
                          onChange={handleChange}
                        >
                          <option value="">Select timeline</option>
                          <option value="1">Less than 1 month</option>
                          <option value="2">1 – 3 months</option>
                          <option value="3">3 – 6 months</option>
                          <option value="4">6+ months</option>
                        </select>
                      </div>
                    </FieldGroup>
                    <FieldGroup label="Where did you find us?">
                      <div className="ep-sel">
                        <select
                          name="source"
                          value={values.source}
                          onChange={handleChange}
                        >
                          <option value="">Select an option</option>
                          <option value="google">Google Search</option>
                          <option value="social">Social Media</option>
                          <option value="referral">Referral / Friend</option>
                          <option value="ad">Online Ad</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </FieldGroup>
                  </div>
                  <div className="ep-row ep-row-full">
                    <FieldGroup
                      label="Project Overview"
                      required
                      error={errors.overview}
                      touched={touched.overview}
                    >
                      <textarea
                        name="overview"
                        placeholder="Tell us about your project, goals, target audience, and any specific requirements..."
                        value={values.overview}
                        onChange={(e) => {
                          if (e.target.value.length <= MAX_OVERVIEW)
                            handleChange(e);
                        }}
                        onBlur={handleBlur}
                        className={cls("overview")}
                        maxLength={MAX_OVERVIEW}
                      />
                      <div className="ep-ta-meta">
                        <span className="ep-hint">
                          More detail = better understanding.
                        </span>
                        <span
                          className={`ep-chars ${overLen > MAX_OVERVIEW * 0.9 ? "ep-chars-warn" : ""}`}
                        >
                          {overLen}/{MAX_OVERVIEW}
                        </span>
                      </div>
                    </FieldGroup>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="ep-sec">
                  <div className="ep-sec-title">
                    <i
                      className="fa-solid fa-file-invoice"
                      aria-hidden="true"
                    />{" "}
                    Additional Info
                    <span className="ep-opt">(optional)</span>
                  </div>
                  <div className="ep-checks">
                    {[
                      {
                        name: "hasWebsite",
                        label: "I have a website ready",
                        icon: "fa-globe",
                      },
                      {
                        name: "needsContent",
                        label: "I need content writing",
                        icon: "fa-pen-nib",
                      },
                      {
                        name: "needsBranding",
                        label: "I need branding / design",
                        icon: "fa-palette",
                      },
                      {
                        name: "needsSupport",
                        label: "I need ongoing support",
                        icon: "fa-headset",
                      },
                    ].map(({ name, label, icon }) => (
                      <label className="ep-check" key={name}>
                        <input
                          type="checkbox"
                          name={name}
                          checked={checks[name]}
                          onChange={handleCheck}
                        />
                        <i className={`fa-solid ${icon}`} aria-hidden="true" />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <footer className="ep-footer">
                  <p className="ep-terms">
                    <i className="fa-solid fa-lock" aria-hidden="true" />
                    By submitting, you agree to our{" "}
                    <a href="/privacy-policy">Privacy Policy</a> and{" "}
                    <a href="/terms">Terms of Service</a>.
                  </p>
                  <button
                    type="submit"
                    className="ep-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Enquiry <i className="fa-solid fa-arrow-right" />
                      </>
                    )}
                  </button>
                </footer>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
