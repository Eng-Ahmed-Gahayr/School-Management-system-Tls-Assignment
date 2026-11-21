import React, { useState } from "react";

function Finance() {
  const [studentName, setStudentName] = useState("");
  const [className, setClassName] = useState("");
  const [status, setStatus] = useState("Paid");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([
    { id: 1, name: "Ahmed Ali", className: "Class One", status: "Paid", amount: 120 },
    { id: 2, name: "Ayan Hassan", className: "Class Two", status: "Unpaid", amount: 100 },
    { id: 3, name: "Mohamed Yusuf", className: "Class Three", status: "Paid", amount: 150 },
    { id: 4, name: "Hodan Omar", className: "Class One", status: "Unpaid", amount: 120 },
  ]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!studentName.trim() || !className.trim() || !amount) return;
    setList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: studentName.trim(),
        className: className.trim(),
        status,
        amount: Number(amount),
      },
    ]);
    setStudentName("");
    setClassName("");
    setStatus("Paid");
    setAmount("");
  };

  const paidCount = list.filter((i) => i.status === "Paid").length;
  const unpaidCount = list.filter((i) => i.status === "Unpaid").length;
  const paidTotal = list.filter((i) => i.status === "Paid").reduce((a, b) => a + b.amount, 0);

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
      margin: "0 0 22px 0",
    },
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
      gridTemplateColumns: "repeat(4, minmax(150px, 1fr))",
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
      backgroundColor: "#ffffff",
    },
    btnGreen: {
      backgroundColor: "#15803d",
      color: "#ffffff",
      border: "none",
      padding: "8px 16px",
      borderRadius: "6px",
      fontSize: "13px",
      fontWeight: "600",
      cursor: "pointer",
    },
    grid4: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(160px, 1fr))",
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
      fontWeight: "700",
      color: "#0f172a",
      margin: "0 0 16px 0",
    },
    statNum: (color) => ({
      fontSize: "22px",
      fontWeight: "700",
      color,
      margin: 0,
    }),
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
  };

  return (
    <div style={s.page}>
      <h1 style={s.title}>Finance Section</h1>

      <div style={s.card}>
        <h2 style={s.sectionTitle}>Add Student Fee</h2>
        <form onSubmit={handleAdd}>
          <div style={s.formGrid}>
            <input type="text" placeholder="Student Name" value={studentName} onChange={(e) => setStudentName(e.target.value)} style={s.input} />
            <input type="text" placeholder="Class Name" value={className} onChange={(e) => setClassName(e.target.value)} style={s.input} />
            <select value={status} onChange={(e) => setStatus(e.target.value)} style={s.input}>
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} style={s.input} />
          </div>
          <button type="submit" style={s.btnGreen}>Add</button>
        </form>
      </div>

      <div style={s.grid4}>
        <div style={s.statCard("#16a34a")}>
          <p style={s.statLabel}>Paid Students</p>
          <p style={s.statNum("#16a34a")}>{paidCount}</p>
        </div>
        <div style={s.statCard("#dc2626")}>
          <p style={s.statLabel}>Unpaid Students</p>
          <p style={s.statNum("#dc2626")}>{unpaidCount}</p>
        </div>
        <div style={s.statCard("#2563eb")}>
          <p style={s.statLabel}>Total Students</p>
          <p style={s.statNum("#2563eb")}>{list.length}</p>
        </div>
        <div style={s.statCard("#f59e0b")}>
          <p style={s.statLabel}>Student Paid</p>
          <p style={s.statNum("#f59e0b")}>${paidTotal}</p>
        </div>
      </div>

      <div style={s.card}>
        <h2 style={s.sectionTitle}>Finance List</h2>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>ID</th>
              <th style={s.th}>Name</th>
              <th style={s.th}>Class</th>
              <th style={s.th}>Status</th>
              <th style={s.th}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {list.map((row) => (
              <tr key={row.id}>
                <td style={s.td}>{row.id}</td>
                <td style={s.td}>{row.name}</td>
                <td style={s.td}>{row.className}</td>
                <td style={{ ...s.td, fontWeight: "700", color: row.status === "Paid" ? "#16a34a" : "#dc2626" }}>
                  {row.status}
                </td>
                <td style={s.td}>${row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Finance;