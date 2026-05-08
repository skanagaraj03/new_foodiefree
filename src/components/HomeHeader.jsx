import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Free food" },
  { to: "/about", label: "Low cost food" },
  { to: "/contact", label: "Add food" },
];

function HomeHeader() {
  return (
    <header className="home-header">
      <img src="/logo.png" alt="Foodiefree logo" className="logo-mark" />
      <nav className="home-nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `home-nav-link ${isActive ? "active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Link to="/auth" className="login-btn">
        Login/Signup
      </Link>
    </header>
  );
}

export default HomeHeader;
