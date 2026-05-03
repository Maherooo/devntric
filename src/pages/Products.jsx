import { PRODUCTS } from "../data/data";

export default function Products() {
  return (
    <div className="dv-page">
      <div className="dv-inner">

        {/* ── LEFT ─────────────────────────────────────────────────────── */}
        <div className="dv-left anim-left">
          <div className="dv-badge">
            <i className="fas fa-code" /> BUILT TO SOLVE. DESIGNED TO SCALE.
          </div>
          <h1 className="dv-hero-title">
            Powerful Products.<br />
            <span className="g-orange">Real</span>{" "}
            <span className="g-blue">Impact.</span>
          </h1>
          <p className="dv-hero-desc">
            Our products are built to simplify operations, improve efficiency,
            and help businesses grow smarter every day.
          </p>
          <button className="dv-btn">
            Browse All Products{" "}
            <span className="arr">
              <i className="fas fa-arrow-right" />
            </span>
          </button>
        </div>

        {/* ── RIGHT ────────────────────────────────────────────────────── */}
        <div className="dv-right anim-right">
          <div className="grid-2-prod">
            {PRODUCTS.map(({ icon, bg, ic, borderColor, title, desc, features }) => (
              <div
                key={title}
                className={`prod-card ${bg}`}
                style={{ borderColor }}
              >
                <div
                  className={`icon-circle ${ic}`}
                  style={{ width: 70, height: 70, fontSize: "1.5rem", marginBottom: 16 }}
                >
                  <i className={icon} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul className="feat-list" style={{ marginBottom: 22, flex: 1 }}>
                  {features.map(({ color, text }) => (
                    <li key={text}>
                      <i className="fas fa-check-circle" style={{ color }} /> {text}
                    </li>
                  ))}
                </ul>
                <span className="prod-link">
                  Explore Product <i className="fas fa-arrow-right" />
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
