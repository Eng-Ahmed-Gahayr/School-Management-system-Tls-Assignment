import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Class from "./pages/class";
import Finance from "./pages/Finance";
import Home from "./pages/Home"
import Registration from "./pages/Registration";
import Staff from "./pages/Staff";
import Students from "./pages/students";
import Sidebar from "./pages/side";
function App() {
  const s = {
    app: {
      display: "flex",
      minHeight: "100vh",
      margin: 0,
      backgroundColor: "#f2f4f7",
    },
    content: {
      flex: 1,
      minWidth: 0,
    },
  };

  return (
    <BrowserRouter>
      <div style={s.app}>
        <Sidebar />
        <div style={s.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class" element={<Class />} />
            <Route path="/students" element={<Students />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;