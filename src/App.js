import React from "react";
import menuItems from "./data";
import MenuItem from "./componente/menuItem";
import "./App.css";

function App() {
  return (
    <main className="menu-container">
      <h1 className="menu-title">Cardápio Outback</h1>
      <section className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
