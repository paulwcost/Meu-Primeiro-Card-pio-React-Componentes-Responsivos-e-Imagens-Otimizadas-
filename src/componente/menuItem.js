import React from "react";
import "./menuItem.css";

function menuItem({ name, description, price, imageUrl, onAdd }) {
  return (
    <div className="menu-item">
      <img src={imageUrl} alt={name} style={{ width: "100%", borderRadius: "12px" }} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>{price}</strong></p>
      <button onClick={onAdd}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default menuItem;
