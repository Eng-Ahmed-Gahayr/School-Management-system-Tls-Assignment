import React, { useState } from "react";

function Products({ title, category, price, imageBg }) {
  // 1. Waxaan sameynay State lagu kaydiyo xaaladda (Bilowgii waa "In Stock")
  const [availability, setAvailability] = useState("In Stock");

  // 2. Shaqada beddesha xaaladda marka badhanka la taabto
  const toggleStock = () => {
    if (availability === "In Stock") {
      setAvailability("Out of Stock");
    } else {
      setAvailability("In Stock");
    }
  };

  const isAvailable = availability === "In Stock";

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        overflow: "hidden",
        width: "280px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Qaybta sare ee sawirka / asalka midabka leh */}
      <div
        style={{
          backgroundColor: imageBg || "#e0f2fe",
          height: "160px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Halkan waxaad geli kartaa sawirka badeecada */}
      </div>

      {/* Qaybta hoose ee macluumaadka */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontWeight: "700",
            color: "#64748b",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          {category}
        </span>

        <h3
          style={{
            fontSize: "16px",
            fontWeight: "600",
            color: "#0f172a",
            margin: "0 0 10px 0",
          }}
        >
          {title}
        </h3>
        
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#0f172a",
            }}
          >
            {price}
          </span>
          
          {/* Halkaan ayay xaaladdu si live ah uga beddelmaysaa */}
          <span
            style={{
              fontSize: "12px",
              fontWeight: "500",
              color: isAvailable ? "#16a34a" : "#dc2626",
            }}
          >
            {availability}
          </span>
        </div>

        {/* Badhanka oo lagu daray onClick si uu u shaqeeyo */}
        <button
          onClick={toggleStock}
          style={{
            backgroundColor: "#1e3a8a",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            padding: "10px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
            width: "100%",
          }}
        >
         Veiw Products
        </button>
      </div>
    </div>
  );
}

export default Products;