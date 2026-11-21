import React, { useState } from "react";

function Class() {
  const [className, setClassName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [studentsCount, setStudentsCount] = useState("");
  const [classes, setClasses] = useState([
    { id: 1, name: "Class 1A", teacher: "Ahmed Ali", students: 35, status: "Active" },
    { id: 2, name: "Class 2B", teacher: "Fatima Hassan", students: 28, status: "Active" },
  ]);

  const handleAddClass = (e) => {
    e.preventDefault();
    if (!className.trim() || !teacherName.trim()) return;
    setClasses((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: className.trim(),
        teacher: teacherName.trim(),
        students: Number(studentsCount) || 0,
        status: "Active",
      },
    ]);
    setClassName("");
    setTeacherName("");
    setStudentsCount("");
  };

  const totalStudents = classes.reduce((acc, item) => acc + item.students, 0);

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
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(200px, 1fr))",
      gap: "18px",
      marginBottom: "22px",
    },
    statCard: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "18px 20px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    },
    statLabel: {
      fontSize: "14px",
      fontWeight: "700",
      color: "#0f172a",
      margin: "0 0 16px 0",
    },
    statNum: (color) => ({
      fontSize: "24px",
      fontWeight: "700",
      color,
      textAlign: "center",
      margin: 0,
    }),
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      marginBottom: "20px",
    },
    sectionTitle: {
      fontSize: "15px",
      fontWeight: "700",
      color: "#0f172a",
      margin: "0 0 14px 0",
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(160px, 1fr))",
      gap: "12px",
      marginBottom: "14px",
    },
    input: {
      width: "100%",
      padding: "9px 12px",
      borderRadius: "6px",
      border: "1px solid #cbd5e1",
      fontSize: "13px",
      boxSizing: "border-box",
      outline: "none",
    },
    btn: {
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      border: "none",
      padding: "8px 16px",
      borderRadius: "6px",
      fontSize: "13px",
      fontWeight: "600",
      cursor: "pointer",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "13px",
    },
    th: {
      textAlign: "left",
      padding: "10px 12px",
      backgroundColor: "#f1f5f9",
      color: "#334155",
      fontWeight: "700",
      borderBottom: "1px solid #e2e8f0",
    },
    td: {
      padding: "11px 12px",
      borderBottom: "1px solid #f1f5f9",
      color: "#334155",
    },
    badge: {
      backgroundColor: "#dcfce7",
      color: "#15803d",
      padding: "3px 10px",
      borderRadius: "12px",
      fontSize: "11.5px",
      fontWeight: "600",
    },
  };

  return (
    <div style={s.page}>
      <h1 style={s.title}>Class Management</h1>
      <p style={s.subtitle}>Manage school classes easily</p>

      <div style={s.grid3}>
        <div style={s.statCard}>
          <p style={s.statLabel}>Total Classes</p>
          <p style={s.statNum("#2563eb")}>{classes.length}</p>
        </div>
        <div style={s.statCard}>
          <p style={s.statLabel}>Total Students</p>
          <p style={s.statNum("#16a34a")}>{totalStudents}</p>
        </div>
        <div style={s.statCard}>
          <p style={s.statLabel}>Teachers</p>
          <p style={s.statNum("#eab308")}>{classes.length}</p>
        </div>
      </div>

      <div style={s.card}>
        <h2 style={s.sectionTitle}>Add New Class</h2>
        <form onSubmit={handleAddClass}>
          <div style={s.formGrid}>
            <input
              type="text"
              placeholder="Class Name"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              style={s.input}
            />
            <input
              type="text"
              placeholder="Teacher Name"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              style={s.input}
            />
            <input
              type="number"
              placeholder="Students Count"
              value={studentsCount}
              onChange={(e) => setStudentsCount(e.target.value)}
              style={s.input}
            />
          </div>
          <button type="submit" style={s.btn}>
            Add Class
          </button>
        </form>
      </div>

      <div style={s.card}>
        <h2 style={s.sectionTitle}>Class List</h2>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Class</th>
              <th style={s.th}>Teacher</th>
              <th style={s.th}>Students</th>
              <th style={s.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((c) => (
              <tr key={c.id}>
                <td style={s.td}>{c.name}</td>
                <td style={s.td}>{c.teacher}</td>
                <td style={s.td}>{c.students}</td>
                <td style={s.td}>
                  <span style={s.badge}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Class;