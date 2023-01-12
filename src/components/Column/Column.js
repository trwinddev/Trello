import React from "react";
import "./Column.scss";
import Card from "components/Card/Card";
import { mapOrder } from "utilities/sorts";

const Column = (props) => {
  const { column } = props;
  const cards = mapOrder(column.card, column.cardOrder, "id");
  return (
    <div className="column">
      <header>{column.title}</header>
      <ul className="card-list">
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
