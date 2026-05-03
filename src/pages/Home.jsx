import { HOME_CARDS } from "../data/data";

export default function Home({ setPage }) {
  return (
    <div className="dv-page">
      <div className="dv-inner">

        {/* ── LEFT ─────────────────────────────────────────────────────── */}
        <div className="dv-left anim-left">
          <div className="dv-badge">
            <i className="fas fa-code" /> CODE TODAY. BUILD TOMORROW.
          </div>
          <h1 className="dv-hero-title">
            Empowering<br />Minds.<br />
            <span className="g-orange">Building</span>{" "}
            <span className="g-blue">Futures.</span>
          </h1>
          <p className="dv-hero-desc">
            Devntric is your all-in-one platform to learn, grow, and succeed in
            the world of technology. Explore our courses, services, and products
            designed for everyone from beginners to professionals.
          </p>
          <button className="dv-btn" onClick={() => setPage("Courses")}>
            Explore Our Courses{" "}
            <span className="arr">
              <i className="fas fa-arrow-right" />
            </span>
          </button>
        </div>

        {/* ── RIGHT ────────────────────────────────────────────────────── */}
        <div className="dv-right anim-right">
          <div className="grid-2">
            {HOME_CARDS.map(({ page, icon, bg, ic, title, desc }) => (
              <div
                key={page}
                className={`card-base ${bg}`}
                style={{ display: "flex", flexDirection: "column", padding: "1.25rem" }}
                onClick={() => setPage(page)}
              >
                <div
                  className={`icon-circle ${ic}`}
                  style={{ width: 50, height: 50, fontSize: "1.1rem", marginBottom: 12 }}
                >
                  <i className={icon} />
                </div>
                <h3 style={{ fontFamily: "var(--heading)", fontSize: "1.2rem", fontWeight: 800, marginBottom: 10 }}>
                  {title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: ".87rem", lineHeight: 1.6, flex: 1 }}>
                  {desc}
                </p>
                <span className="explore-link" style={{ marginTop: 12 }}>
                  Explore <i className="fas fa-arrow-right" />
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
