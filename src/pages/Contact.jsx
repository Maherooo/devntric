import { useState } from "react";
import { SOCIAL_LINKS, SUBJECTS } from "../data/data";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSend = () => {
    const { name, email, subject, message } = form;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    setSending(true);
    const body = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:devntric@gmail.com?subject=Devntric: ${encodeURIComponent(subject)} - ${encodeURIComponent(name)}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSuccess(true);
      setForm(INITIAL_FORM);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="dv-page">
      <div className="dv-inner">

        {/* ── LEFT ─────────────────────────────────────────────────────── */}
        <div className="dv-left anim-left">
          <div className="dv-badge">
            <i className="fas fa-code" /> LET'S CONNECT AND CREATE TOGETHER.
          </div>
          <h1 className="dv-hero-title">
            Let's Build<br />
            <span className="g-orange">Something<br />Amazing</span>{" "}
            <span className="g-blue">Together.</span>
          </h1>
          <p className="dv-hero-desc">
            Have a question, project idea, or just want to say hello? We'd love
            to hear from you. Fill out the form and we'll get back to you soon.
          </p>

          {/* Social links */}
          <div className="grid-2-soc" style={{ marginTop: 8 }}>
            {SOCIAL_LINKS.map(({ href, cls, ic, icon, label }) => (
              <a key={label} href={href} className={`soc-card ${cls}` } target="_blank">
                <div
                  className={`icon-circle ${ic}`}
                  style={{ width: 34, height: 34, fontSize: ".85rem", flexShrink: 0 }}
                >
                  <i className={icon} />
                </div>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT ────────────────────────────────────────────────────── */}
        <div className="dv-right anim-right">
          <div className="form-box">
            <h3>
              <i className="fas fa-paper-plane" style={{ color: "var(--purple-light)", marginRight: 8 }} />
              Send Us a Message
            </h3>

            {/* Name + Email row */}
            <div className="grid-form">
              <div>
                <label className="form-label">Your Name *</label>
                <input
                  className="form-ctrl"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </div>
              <div>
                <label className="form-label">Your Email *</label>
                <input
                  className="form-ctrl"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange("email")}
                />
              </div>
            </div>

            {/* Subject */}
            <div style={{ marginBottom: 12 }}>
              <label className="form-label">Subject *</label>
              <select
                className="form-ctrl"
                value={form.subject}
                onChange={handleChange("subject")}
              >
                <option value="">-- Select a subject --</option>
                {SUBJECTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div style={{ marginBottom: 12 }}>
              <label className="form-label">Your Message *</label>
              <textarea
                className="form-ctrl"
                placeholder="Tell us what you need..."
                value={form.message}
                onChange={handleChange("message")}
              />
            </div>

            <button className="btn-send" onClick={handleSend} disabled={sending}>
              {sending ? (
                <><i className="fas fa-spinner fa-spin" /> Sending...</>
              ) : (
                <><i className="fas fa-paper-plane" /> Send Message</>
              )}
            </button>

            {success && (
              <div className="success-msg">
                <i className="fas fa-check-circle" style={{ marginRight: 8 }} />
                Message sent! We'll get back to you soon.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
