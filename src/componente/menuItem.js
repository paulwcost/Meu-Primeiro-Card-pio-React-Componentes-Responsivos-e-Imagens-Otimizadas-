import React from "react";
import "./menuItem.css";

function MenuItem({ name, description, price, imageUrl }) {
  return (
    <article className="menu-item">
      <img src={imageUrl} alt={`Prato: ${name}`} className="menu-item__image" />
      <div className="menu-item__info">
        <h2 className="menu-item__name">{name}</h2>
        <p className="menu-item__description">{description}</p>
        <p className="menu-item__price">{price}</p>
      </div>
    </article>
  );
}

export default MenuItem;
