import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "zwierzęta", path: "animals" },
  { name: "kontakt", path: "contact" },
  { name: "panel admina", path: "admin" },
];

const menu = list.map((item) => (
  <li key={item.name}>
    <NavLink to={item.path} exact={item.exact}>
      {item.name}
    </NavLink>
  </li>
));

const Navigation = () => {
  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
