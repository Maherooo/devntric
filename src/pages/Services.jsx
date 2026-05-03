import { SERVICES } from "../data/data";

export default function Services({ setPage }) {
  return (
    <div className="dv-page">
      <div className="dv-inner">

        {/* ── LEFT ─────────────────────────────────────────────────────── */}
        <div className="dv-left anim-left">
          <div className="dv-badge">
            <i className="fas fa-code" /> IDEAS. EXECUTION. EXCELLENCE.
          </div>
          <h1 className="dv-hero-title">
            Services That<br />
            <span className="g-orange">Drive</span>{" "}
            <span className="g-blue">Growth.</span>
          </h1>
          <p className="dv-hero-desc">
            From powerful digital solutions to creative strategies and reliable
            support, we help businesses grow, scale, and succeed in the digital
            world.
          </p>
          <button className="dv-btn" onClick={() => setPage("Contact")}>
            Let's Work Together{" "}
            <span className="arr">
              <i className="fas fa-arrow-right" />
            </span>
          </button>
        </div>

        {/* ── RIGHT ────────────────────────────────────────────────────── */}
        <div className="dv-right anim-right">
          <div className="grid-2-svc">
            {SERVICES.map(({ num, icon, bg, ic, color, title, desc, wide }) => (
              <div key={num} className={`svc-card ${bg}${wide ? " svc-wide" : ""}`}>
                <span
                  className="svc-num-abs"
                  style={{ color, right: wide ? 20 : 46 }}
                >
                  {num}
                </span>
                <div
                  className={`icon-circle ${ic}`}
                  style={{ width: 46, height: 46, fontSize: ".95rem", flexShrink: 0 }}
                >
                  <i className={icon} />
                </div>
                <div>
                  <h3 style={wide ? { marginTop: 0 } : {}}>{title}</h3>
                  <p>{desc}</p>
                  <span className="learn-link">
                    Learn More <i className="fas fa-arrow-right" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
