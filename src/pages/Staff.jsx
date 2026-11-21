import React, { useState } from "react";

function Staff() {
  const [staffList, setStaffList] = useState([
    { id: 1, name: "Ahmed Mohamed", role: "Teacher", email: "ahmed@gmail.com", phone: "0612345678", status: "Active" },
    { id: 2, name: "Fatima Ali", role: "Accountant", email: "fatima@gmail.com", phone: "0623456789", status: "Active" },
    { id: 3, name: "Mohamed Hassan", role: "Administrator", email: "mohamed@gmail.com", phone: "0634567890", status: "Inactive" },
  ]);

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", role: "", email: "", phone: "", status: "Active" });

  const handleSave = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.role.trim()) return;
    if (editId !== null) {
      setStaffList((prev) => prev.map((m) => (m.id === editId ? { ...m, ...form } : m)));
      setEditId(null);
    } else {
      setStaffList((prev) => [...prev, { id: Date.now(), ...form }]);
    }
    setForm({ name: "", role: "", email: "", phone: "", status: "Active" });
    setShowForm(false);
  };

  const handleEdit = (member) => {
    setEditId(member.id);
    setForm({ name: member.name, role: member.role, email: member.email, phone: member.phone, status: member.status });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setStaffList((prev) => prev.filter((m) => m.id !== id));
  };

  const filtered = staffList.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.phone.includes(search) ||
      m.status.toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = staffList.filter((m) => m.status === "Active").length;
  const inactiveCount = staffList.filter((m) => m.status === "Inactive").length;

  const s = {
    page: {
      padding: "28px 36px",
      backgroundColor: "#f2f4f7",
      minHeight: "100vh",
      boxSizing: "border-box",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#1e293b",
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
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
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(180px, 1fr))",
      gap: "18px",
      marginBottom: "20px",
    },
    statCard: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "18px 20px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "9px 12px",
      borderRadius: "6px",
      border: "1px solid #cbd5e1",
      fontSize: "13px",
      boxSizing: "border-box",
      outline: "none",
      backgroundColor: "#ffffff",
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
      <div style={s.headerRow}>
        <div>
          <h1 style={s.title}>Staff Management</h1>
          <p style={s.subtitle}>Manage school staff members</p>
        </div>
        <button
          type="button"
          style={s.btnBlue}
          onClick={() => {
            setEditId(null);
            setForm({ name: "", role: "", email: "", phone: "", status: "Active" });
            setShowForm(!showForm);
          }}
        >
          + Add Staff
        </button>
      </div>

      {showForm && (
        <div style={s.card}>
          <form onSubmit={handleSave}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px", marginBottom: "12px" }}>
              <input style={s.input} placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input style={s.input} placeholder="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
              <input style={s.input} placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input style={s.input} placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <select style={s.input} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <button type="submit" style={s.btnBlue}>Save</button>
          </form>
        </div>
      )}

      <div style={s.grid3}>
        <div style={s.statCard}>
          <p style={{ fontSize: "12px", color: "#64748b", margin: "0 0 8px 0" }}>Total Staff</p>
          <p style={{ fontSize: "20px", fontWeight: "700", margin: 0 }}>{staffList.length}</p>
        </div>
        <div style={s.statCard}>
          <p style={{ fontSize: "12px", color: "#64748b", margin: "0 0 8px 0" }}>Active Staff</p>
          <p style={{ fontSize: "20px", fontWeight: "700", color: "#16a34a", margin: 0 }}>{activeCount}</p>
        </div>
        <div style={s.statCard}>
          <p style={{ fontSize: "12px", color: "#64748b", margin: "0 0 8px 0" }}>Inactive Staff</p>
          <p style={{ fontSize: "20px", fontWeight: "700", color: "#dc2626", margin: 0 }}>{inactiveCount}</p>
        </div>
      </div>

      <div style={{ maxWidth: "340px", marginBottom: "18px" }}>
        <input
          style={s.input}
          placeholder="Search by name, role, email, phone or status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div style={s.card}>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Name</th>
              <th style={s.th}>Role</th>
              <th style={s.th}>Email</th>
              <th style={s.th}>Phone</th>
              <th style={s.th}>Status</th>
              <th style={s.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m) => (
              <tr key={m.id}>
                <td style={{ ...s.td, fontWeight: "600" }}>{m.name}</td>
                <td style={s.td}>{m.role}</td>
                <td style={s.td}>{m.email}</td>
                <td style={s.td}>{m.phone}</td>
                <td style={s.td}>
                  <span style={m.status === "Active" ? s.badgeActive : s.badgeInactive}>{m.status}</span>
                </td>
                <td style={s.td}>
                  <span onClick={() => handleEdit(m)} style={{ color: "#2563eb", cursor: "pointer", marginRight: "12px", fontWeight: "600" }}>Edit</span>
                  <span onClick={() => handleDelete(m.id)} style={{ color: "#dc2626", cursor: "pointer", fontWeight: "600" }}>Delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Staff;