import React, { useState } from "react";

function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ahmed Ali Omar", className: "Class 1A", gender: "Male", phone: "0612345678", status: "Active" },
    { id: 2, name: "Ayan Hassan Abdi", className: "Class 2B", gender: "Female", phone: "0623456789", status: "Active" },
    { id: 3, name: "Mohamed Yusuf Nur", className: "Class 1A", gender: "Male", phone: "0634567890", status: "Inactive" },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    className: "",
    gender: "Male",
    phone: "",
    status: "Active",
  });

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!newStudent.name.trim() || !newStudent.className.trim()) {
      alert("Please enter Student Name and Class");
      return;
    }

    setStudents((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newStudent.name.trim(),
        className: newStudent.className.trim(),
        gender: newStudent.gender,
        phone: newStudent.phone.trim() || "N/A",
        status: newStudent.status,
      },
    ]);

    setNewStudent({ name: "", className: "", gender: "Male", phone: "", status: "Active" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter(
    (st) =>
      st.name.toLowerCase().includes(search.toLowerCase()) ||
      st.className.toLowerCase().includes(search.toLowerCase()) ||
      st.phone.includes(search) ||
      st.status.toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = students.filter((st) => st.status === "Active").length;
  const inactiveCount = students.filter((st) => st.status === "Inactive").length;

  const s = {
    page: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f2f4f7",
      minHeight: "100vh",
      padding: "28px 36px",
      color: "#1e293b",
      boxSizing: "border-box",
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      flexWrap: "wrap",
      gap: "12px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#0f172a",
      margin: "0 0 4px 0",
    },
    subtitle: {
      fontSize: "13px",
      color: "#64748b",
      margin: 0,
    },
    btnBlue: {
      backgroundColor: "#2563eb",
      color: "#ffffff",
      border: "none",
      padding: "9px 16px",
      borderRadius: "6px",
      fontSize: "13px",
      fontWeight: "600",
      cursor: "pointer",
    },
    btnGreen: {
      backgroundColor: "#16a34a",
      color: "#ffffff",
      border: "none",
      padding: "9px 18px",
      borderRadius: "6px",
      fontSize: "13px",
      fontWeight: "600",
      cursor: "pointer",
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "18px",
      marginBottom: "20px",
    },
    statCard: (borderColor) => ({
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "18px 20px",
      borderLeft: `4px solid ${borderColor}`,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    }),
    statLabel: {
      fontSize: "12.5px",
      color: "#64748b",
      fontWeight: "600",
      margin: "0 0 8px 0",
    },
    statValue: (color) => ({
      fontSize: "22px",
      fontWeight: "700",
      color,
      margin: 0,
    }),
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      marginBottom: "20px",
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
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
    searchBox: {
      maxWidth: "350px",
      marginBottom: "18px",
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
      padding: "12px",
      borderBottom: "1px solid #f1f5f9",
      color: "#334155",
    },
    badgeActive: {
      backgroundColor: "#dcfce7",
      color: "#15803d",
      padding: "3px 10px",
      borderRadius: "12px",
      fontSize: "11.5px",
      fontWeight: "600",
    },
    badgeInactive: {
      backgroundColor: "#fee2e2",
      color: "#dc2626",
      padding: "3px 10px",
      borderRadius: "12px",
      fontSize: "11.5px",
      fontWeight: "600",
    },
  };

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.headerRow}>
        <div>
          <h1 style={s.title}>Students Management</h1>
          <p style={s.subtitle}>Manage and view all registered students</p>
        </div>
        <button type="button" style={s.btnBlue} onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "+ Add Student"}
        </button>
      </div>

      {/* Add Student Form (Marka la riixo + Add Student) */}
      {showForm && (
        <div style={s.card}>
          <h3 style={{ margin: "0 0 14px 0", fontSize: "15px" }}>Quick Add Student</h3>
          <form onSubmit={handleAddStudent}>
            <div style={s.formGrid}>
              <input
                style={s.input}
                placeholder="Full Name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              />
              <input
                style={s.input}
                placeholder="Class (e.g. Class 1A)"
                value={newStudent.className}
                onChange={(e) => setNewStudent({ ...newStudent, className: e.target.value })}
              />
              <select
                style={s.input}
                value={newStudent.gender}
                onChange={(e) => setNewStudent({ ...newStudent, gender: e.target.value })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                style={s.input}
                placeholder="Phone Number"
                value={newStudent.phone}
                onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
              />
              <select
                style={s.input}
                value={newStudent.status}
                onChange={(e) => setNewStudent({ ...newStudent, status: e.target.value })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button type="submit" style={s.btnGreen}>
              Save Student
            </button>
          </form>
        </div>
      )}

      {/* Top 3 Stat Cards */}
      <div style={s.grid3}>
        <div style={s.statCard("#2563eb")}>
          <p style={s.statLabel}>Total Students</p>
          <p style={s.statValue("#0f172a")}>{students.length}</p>
        </div>
        <div style={s.statCard("#16a34a")}>
          <p style={s.statLabel}>Active Students</p>
          <p style={s.statValue("#16a34a")}>{activeCount}</p>
        </div>
        <div style={s.statCard("#dc2626")}>
          <p style={s.statLabel}>Inactive Students</p>
          <p style={s.statValue("#dc2626")}>{inactiveCount}</p>
        </div>
      </div>

      {/* Search Bar */}
      <div style={s.searchBox}>
        <input
          style={s.input}
          placeholder="Search by name, class, phone or status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Students Table */}
      <div style={s.card}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>ID</th>
              <th style={s.th}>Name</th>
              <th style={s.th}>Class</th>
              <th style={s.th}>Gender</th>
              <th style={s.th}>Phone</th>
              <th style={s.th}>Status</th>
              <th style={s.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((st) => (
              <tr key={st.id}>
                <td style={s.td}>{st.id}</td>
                <td style={{ ...s.td, fontWeight: "600" }}>{st.name}</td>
                <td style={s.td}>{st.className}</td>
                <td style={s.td}>{st.gender}</td>
                <td style={s.td}>{st.phone}</td>
                <td style={s.td}>
                  <span style={st.status === "Active" ? s.badgeActive : s.badgeInactive}>
                    {st.status}
                  </span>
                </td>
                <td style={s.td}>
                  <span
                    onClick={() => handleDelete(st.id)}
                    style={{ color: "#dc2626", cursor: "pointer", fontWeight: "600" }}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;