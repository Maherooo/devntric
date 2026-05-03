import { COURSES } from "../data/data";

export default function Courses() {
  return (
    <div className="dv-page top">
      <div className="dv-inner col">

        {/* ── HEADER ROW ───────────────────────────────────────────────── */}
        <div
          className="anim-left"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: 16,
            width: "100%",
            marginBottom: 36,
          }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <div className="dv-badge">
              <i className="fas fa-code" /> LEARN TODAY. LEAD TOMORROW.
            </div>
            <h1 className="dv-hero-title" style={{ fontSize: "3rem" }}>
              Explore Our<br />
              <span className="g-orange">Courses.</span>
            </h1>
          </div>
          <div
            style={{
              flex: 1,
              minWidth: 260,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 400 }}>
              High-quality courses designed to help you gain in-demand skills
              and advance your career.
            </p>
            <button className="dv-btn" style={{ marginTop: 12 }}>
              Browse All Courses{" "}
              <span className="arr">
                <i className="fas fa-arrow-right" />
              </span>
            </button>
          </div>
        </div>

        {/* ── COURSES GRID ─────────────────────────────────────────────── */}
        <div className="grid-4-crs anim-right" style={{ width: "100%" }}>
          {COURSES.map(({ icon, bg, ic, color, title, desc, lessons, level }) => (
            <div key={title} className={`course-card ${bg}`}>
              <div
                className={`icon-circle ${ic}`}
                style={{
                  width: 48,
                  height: 48,
                  fontSize: "1rem",
                  marginBottom: 12,
                  fontFamily: "var(--heading)",
                  fontWeight: 800,
                }}
              >
                {icon ? <i className={icon} /> : "AI"}
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="course-footer">
                <span>{lessons} Lessons</span>
                <span className="course-level">{level}</span>
                <div className="arr-btn" style={{ background: color }}>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
