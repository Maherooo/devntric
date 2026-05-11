import { useState, useEffect } from "react";

import Nav      from "./components/Nav";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Courses  from "./pages/Courses";
import Contact  from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("Home");

  // Scroll to top on every page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case "About":    return <About    setPage={setPage} />;
      case "Home":     return <Home     setPage={setPage} />;
      case "Services": return <Services setPage={setPage} />;
      case "Products": return <Products />;
      case "Courses":  return <Courses  />;
      case "Contact":  return <Contact  />;
      default:         return <Home     setPage={setPage} />;
    }
  };

  return (
    <div id="root">
      <Nav page={page} setPage={setPage} />
      {renderPage()}
    </div>
  );
}
