import React from "react";

const CardText = ({ title, value }) => (
  <div className="card-cell">
    {title ? <h4>{title}</h4> : null}
    {value}
  </div>
);

export default CardText;
