import { NavLink } from "react-router-dom";

export default function LinkNav({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "underline" : "")}
    >
      {children}
    </NavLink>
  );
}
