import { NavLink, Outlet } from "react-router";

const linkStyle = ({ isActive }) => ({
  fontWeight: isActive ? "bold" : "normal",
  marginInline: 12,
});

export default function Layout() {
  return (
    <>
      <nav style={{ padding: 12, borderBottom: "1px solid #ccc" }}>
        <NavLink to="/" end style={linkStyle}>בית</NavLink>
        <NavLink to="/recipes" style={linkStyle}>מתכונים</NavLink>
      </nav>
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </>
  );
}
