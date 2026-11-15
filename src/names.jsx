import { useState } from "react";

function Names() {
  
  const [Names, setNames] = useState("");

  return (
    <>
      
      <input type="text" value={Names} onChange={(e) => setNames(e.target.value)} placeholder="Geli magac..."
      />
      <p>  Hello , {Names}</p>
    </>
  );
}

export default Names;