import { useState } from "react";
import { PAGES, PAGE_LABELS } from "../data/data";
import logo from "../components/logo/logo.png"

///git
export default function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
    document.body.style.overflow = open ? "" : "hidden";
  };

  const go = (p) => {
    setPage(p);
    setOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav className="dv-nav">
        <button className="dv-logo" onClick={() => go("Home")}>
          Devntric
        </button>

        <ul className="dv-nav-links">
          {PAGES.map((p) => (
            <li key={p}>
              <a
                className={page === p ? "active" : ""}
                onClick={() => go(p)}
              >
                {PAGE_LABELS[p]}
              </a>
            </li>
          ))}
        </ul>

        <div className="dv-nav-avatar"><img src={logo} className="nav-logos" alt="" srcset="" /></div>

        <button
          className={`dv-hamburger${open ? " open" : ""}`}
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`dv-mobile-nav${open ? " open" : ""}`}>
        {PAGES.map((p) => (
          <a key={p} onClick={() => go(p)}>
            {PAGE_LABELS[p]}
          </a>
        ))}
      </div>
    </>
  );
}
