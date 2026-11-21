import React from "react";

function Home() {
  const s = {
    page: {
      padding: "28px 36px",
      backgroundColor: "#f2f4f7",
      minHeight: "100vh",
      boxSizing: "border-box",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#1e293b",
    },
    title: {
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "700",
      color: "#0f172a",
      margin: "0 0 10px 0",
    },
    subtitle: {
      fontSize: "13px",
      color: "#64748b",
      margin: "0 0 22px 0",
    },
    grid4: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(160px, 1fr))",
      gap: "18px",
      marginBottom: "22px",
    },
    statCard: (borderColor) => ({
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "18px 20px",
      borderLeft: `4px solid ${borderColor}`,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    }),
    statLabel: {
      fontSize: "14px",
      fontWeight: "700",
      color: "#0f172a",
      margin: "0 0 18px 0",
    },
    statNum: (color) => ({
      fontSize: "24px",
      fontWeight: "700",
      color,
      textAlign: "center",
      margin: 0,
    }),
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
      gap: "18px",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    },
    cardTitle: {
      fontSize: "15px",
      fontWeight: "700",
      color: "#0f172a",
      margin: "0 0 8px 0",
    },
    cardSub: {
      fontSize: "12.5px",
      color: "#64748b",
      margin: "0 0 14px 0",
    },
    track: {
      width: "100%",
      height: "8px",
      backgroundColor: "#e2e8f0",
      borderRadius: "6px",
      overflow: "hidden",
      marginBottom: "8px",
    },
    fill: {
      width: "85%",
      height: "100%",
      backgroundColor: "#16a34a",
    },
    presentText: {
      fontSize: "13px",
      fontWeight: "700",
      color: "#16a34a",
      margin: 0,
    },
    list: {
      margin: 0,
      paddingLeft: "18px",
      fontSize: "13px",
      color: "#334155",
      lineHeight: "1.9",
    },
  };

  return (
    <div style={s.page}>
      <h1 style={s.title}>School Dashboard</h1>
      <p style={s.subtitle}>Welcome to the School Management System</p>

      <div style={s.grid4}>
        <div style={s.statCard("#2563eb")}>
          <p style={s.statLabel}>Students</p>
          <p style={s.statNum("#2563eb")}>3</p>
        </div>
        <div style={s.statCard("#16a34a")}>
          <p style={s.statLabel}>Teachers</p>
          <p style={s.statNum("#16a34a")}>2</p>
        </div>
        <div style={s.statCard("#eab308")}>
          <p style={s.statLabel}>Classes</p>
          <p style={s.statNum("#eab308")}>2</p>
        </div>
        <div style={s.statCard("#ef4444")}>
          <p style={s.statLabel}>Departments</p>
          <p style={s.statNum("#ef4444")}>12</p>
        </div>
      </div>

      <div style={s.grid3}>
        <div style={s.card}>
          <h2 style={s.cardTitle}>Attendance</h2>
          <p style={s.cardSub}>Today's student attendance overview.</p>
          <div style={s.track}>
            <div style={s.fill} />
          </div>
          <p style={s.presentText}>85% Present</p>
        </div>

        <div style={s.card}>
          <h2 style={s.cardTitle}>Upcoming Events</h2>
          <ul style={s.list}>
            <li>Final Exams - June 12</li>
            <li>Sports Competition - June 20</li>
            <li>Graduation Ceremony - July 1</li>
          </ul>
        </div>

        <div style={s.card}>
          <h2 style={s.cardTitle}>Notifications</h2>
          <ul style={s.list}>
            <li>New student registered</li>
            <li>School meeting tomorrow</li>
            <li>Results uploaded successfully</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;