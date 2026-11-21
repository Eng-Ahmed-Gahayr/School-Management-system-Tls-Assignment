import React, { useState } from "react";

function Registration() {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    nationality: "Somali",
    address: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student Registered Successfully!");
    setForm({
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      dob: "",
      phone: "",
      email: "",
      nationality: "Somali",
      address: "",
    });
  };

  const s = {
    page: {
      padding: "28px 36px",
      backgroundColor: "#f2f4f7",
      minHeight: "100vh",
      boxSizing: "border-box",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#1e293b",
    },
    card: {
      maxWidth: "900px",
      margin: "0 auto",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      padding: "28px 32px",
      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
    },
    title: {
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "700",
      color: "#1e3a8a",
      margin: "0 0 6px 0",
    },
    subtitle: {
      textAlign: "center",
      fontSize: "12.5px",
      color: "#64748b",
      margin: "0 0 24px 0",
    },
    sectionTitle: {
      fontSize: "14.5px",
      fontWeight: "700",
      color: "#1e3a8a",
      borderBottom: "2px solid #f97316",
      paddingBottom: "8px",
      margin: "0 0 20px 0",
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(180px, 1fr))",
      gap: "16px 20px",
      marginBottom: "22px",
    },
    label: {
      display: "block",
      fontSize: "12px",
      fontWeight: "600",
      color: "#1e293b",
      marginBottom: "6px",
    },
    star: {
      color: "#dc2626",
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
    btn: {
      backgroundColor: "#1e3a8a",
      color: "#ffffff",
      border: "none",
      padding: "9px 18px",
      borderRadius: "6px",
      fontSize: "13px",
      fontWeight: "600",
      cursor: "pointer",
    },
  };

  return (
    <div style={s.page}>
      <div style={s.card}>
        <h1 style={s.title}>Student Registration</h1>
        <p style={s.subtitle}>Please complete the form to register a new student.</p>

        <h2 style={s.sectionTitle}>1. Student Personal Information</h2>

        <form onSubmit={handleSubmit}>
          <div style={s.grid3}>
            <div>
              <label style={s.label}>First Name <span style={s.star}>*</span></label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} style={s.input} required />
            </div>
            <div>
              <label style={s.label}>Middle Name</label>
              <input type="text" name="middleName" value={form.middleName} onChange={handleChange} style={s.input} />
            </div>
            <div>
              <label style={s.label}>Last Name <span style={s.star}>*</span></label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} style={s.input} required />
            </div>

            <div>
              <label style={s.label}>Gender <span style={s.star}>*</span></label>
              <select name="gender" value={form.gender} onChange={handleChange} style={s.input} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label style={s.label}>Date of Birth <span style={s.star}>*</span></label>
              <input type="date" name="dob" value={form.dob} onChange={handleChange} style={s.input} required />
            </div>
            <div>
              <label style={s.label}>Phone Number</label>
              <input type="text" name="phone" value={form.phone} onChange={handleChange} style={s.input} />
            </div>

            <div>
              <label style={s.label}>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} style={s.input} />
            </div>
            <div>
              <label style={s.label}>Nationality</label>
              <input type="text" name="nationality" value={form.nationality} onChange={handleChange} style={s.input} />
            </div>
            <div>
              <label style={s.label}>Address</label>
              <input type="text" name="address" value={form.address} onChange={handleChange} style={s.input} />
            </div>
          </div>

          <button type="submit" style={s.btn}>Register Student</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;