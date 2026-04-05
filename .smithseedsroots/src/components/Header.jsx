import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
        <strong>Smith Seeds</strong>
        <div className="flex gap-6">
          <Link to="/" data-active={location.pathname === "/"}>Home</Link>
          <Link to="/gallery" data-active={location.pathname === "/gallery"}>Gallery</Link>
        </div>
      </nav>
    </header>
  );
}