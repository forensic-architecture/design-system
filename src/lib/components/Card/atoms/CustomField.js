import React from "react";
import marked from "marked";

const CardCustomField = ({ field, value }) => (
  <div className="card-cell">
    <>
      {/* <i className="material-icons left">{field.icon}</i> */}
      <h4>{field.title ? `${field.title}: ` : "- "}</h4>
      {field.kind === "text" ? value : marked(`[${value}](${field.value})`)}
    </>
  </div>
);

export default CardCustomField;
