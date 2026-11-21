import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const items = [
    { label: "Home", to: "/" },
    { label: "Class", to: "/class" },
    { label: "Students", to: "/students" },
    { label: "Finance", to: "/finance" },
    { label: "Staff", to: "/staff" },
    { label: "Registration", to: "/registration" },
  ];

  const s = {
    sidebar: {
      width: "215px",
      backgroundColor: "#8b0000",
      padding: "24px 14px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      minHeight: "100vh",
      flexShrink: 0,
      boxSizing: "border-box",
    },
    title: {
      color: "#ffffff",
      fontSize: "20px",
      fontWeight: "700",
      textAlign: "center",
      margin: "0 0 12px 0",
    },
    link: ({ isActive }) => ({
      display: "block",
      padding: "11px 14px",
      borderRadius: "6px",
      textDecoration: "none",
      backgroundColor: isActive ? "#1e293b" : "#111827",
      color: "#ffffff",
      fontSize: "13.5px",
      fontWeight: "600",
    }),
  };

  return (
    <aside style={s.sidebar}>
      <h2 style={s.title}>Dashboard</h2>
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          style={s.link}
        >
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;