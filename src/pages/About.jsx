import { TEAM, STATS } from "../data/data";

export default function About({ setPage }) {
  return (
    <div className="dv-page">
      <div className="dv-inner">

        {/* ── LEFT ─────────────────────────────────────────────────────── */}
        <div className="dv-left anim-left">
          <div className="dv-badge">
            <i className="fas fa-code" /> OUR STORY &amp; MISSION
          </div>
          <h1 className="dv-hero-title">
            Who We<br />Are &amp;<br />
            <span className="g-orange">What We</span>{" "}
            <span className="g-blue">Do.</span>
          </h1>
          <p className="dv-hero-desc">
            Devntric is a tech-driven company focused on empowering developers,
            entrepreneurs, and learners through high-quality digital products,
            expert services, and structured learning experiences.
          </p>
          <button
            className="dv-btn"
            style={{ marginBottom: 24 }}
            onClick={() => setPage("Contact")}
          >
            Get in Touch{" "}
            <span className="arr">
              <i className="fas fa-arrow-right" />
            </span>
          </button>

          {/* Stats */}
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {STATS.map(({ num, label }) => (
              <div key={label} className="stat-box" style={{ flex: 1 }}>
                <div className="stat-num">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ────────────────────────────────────────────────────── */}
        <div className="dv-right anim-right" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {TEAM.map(({ init, name, role, grad }) => (
            <div key={name} className="team-card">
              <div className="team-avatar" style={{ background: grad }}>
                {init}
              </div>
              <div>
                <div className="team-name">{name}</div>
                <div className="team-role">{role}</div>
              </div>
            </div>
          ))}
          <p style={{ color: "var(--text-muted)", fontSize: ".9rem", lineHeight: 1.75 }}>
            Our mission is to bridge the gap between learning and doing — giving
            every developer and creator the tools they need to build something
            that matters.
          </p>
        </div>

      </div>
    </div>
  );
}
