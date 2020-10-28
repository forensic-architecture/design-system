import React from "react";

import copy from "../../../data/copy.json";
import { isNotNullNorUndefined } from "../../../utils";

const CardTime = ({ timelabel, language, precision }) => {
  const unknownLang = copy[language].cardstack.unknown_time;

  if (isNotNullNorUndefined(timelabel)) {
    return (
      <div className="card-cell timestamp">
        {/* <i className="material-icons left">today</i> */}
        <h4>Timestamp</h4>
        {timelabel}
        {precision && precision !== "" ? ` - ${precision}` : null}
      </div>
    );
  } else {
    return (
      <div className="card-cell timestamp">
        {/* <i className="material-icons left">today</i> */}
        <h4>Timestamp</h4>
        {unknownLang}
      </div>
    );
  }
};

export default CardTime;
