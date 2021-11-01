import React from "react";
import { Link } from "react-router-dom";
import "../styles/AnimalsList.css";

const animalsList = [
  { id: 0, name: "Gekon orzęsiony (Correlophus ciliatus)" },
  { id: 1, name: "Gekon olbrzymi (Rhacodactylus leachianus)" },
  { id: 2, name: "Gekon płaczący (Lepidodactylus lugubris)" },
];

const AnimalsList = () => {
  const list = animalsList.map((animal) => (
    <li key={animal.id}>
      <Link to={`/animal/${animal.id}`}>{animal.name}</Link>
    </li>
  ));
  return (
    <div className="animals">
      <h1>Lista zwierząt</h1>
      <ul>{list}</ul>
    </div>
  );
};

export default AnimalsList;
