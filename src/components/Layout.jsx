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
        <NavLink to="/login/controlled" style={linkStyle}>טופס מבוקר</NavLink>
        <NavLink to="/login/uncontrolled" style={linkStyle}>טופס לא מבוקר</NavLink>
        <NavLink to="/login/rhf" style={linkStyle}>טופס RHF</NavLink>
      </nav>
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </>
  );
}
