import React from "react";

function Header() {
  return (
    <>
      {/* 1. Header & Navigation Bar */}
      <header
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #e2e8f0",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ color: "#0f766e", margin: 0, fontWeight: "bold" }}>
          MiniMart<span style={{ color: "#0d9488" }}>.</span>
        </h2>
        
        <nav style={{ display: "flex", gap: "30px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#475569", fontWeight: "500" }}>Home</a>
          <a href="#" style={{ textDecoration: "none", color: "#475569", fontWeight: "500" }}>Products</a>
          <a href="#" style={{ textDecoration: "none", color: "#475569", fontWeight: "500" }}>About</a>
        </nav>
      </header>

      {/* 2. Hero Section (Shop your essentials) */}
      <div
        style={{
          backgroundColor: "#f1f5f9",
          padding: "50px 40px",
          textAlign: "left",
          position: "relative",
          margin: "20px auto",
          width: "90%",
          borderRadius: "12px",
        }}
      >
        <h1 style={{ color: "#0f172a", fontSize: "36px", margin: "0 0 10px 0" }}>
          Shop your essentials
        </h1>
        <p style={{ color: "#64748b", fontSize: "16px", margin: "0 0 20px 0" }}>
          Explore everyday tech products at simple prices.
        </p>
        <button
          style={{
            backgroundColor: "transparent",
            color: "#0f766e",
            border: "1px solid #0f766e",
            padding: "12px 20px",
            borderRadius: "20px",
            fontWeight: "600",
            cursor: "pointer", width:'500px',marginLeft:'500px'
          }}
        >
          PRODUCT CATALOG
        </button>
      </div>

      {/* 3. Featured Products Section Title */}
      <div style={{ width: "90%", margin: "30px auto 10px auto", textAlign: "left" }}>
        <h2 style={{ color: "#0f172a", fontSize: "22px", margin: "0 0 5px 0" }}>
          Featured Products
        </h2>
        <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
          Browse product details and availability
        </p>
      </div>
    </>
  );
}

export default Header;