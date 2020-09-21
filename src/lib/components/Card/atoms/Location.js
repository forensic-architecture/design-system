import React from "react";

import copy from "../../../data/copy.json";

const CardLocation = ({ language, location, isPrecise }) => {
  if (location !== "") {
    return (
      <div className="card-cell location">
        <>
          <h4>Location</h4>
          {/* <i className="material-icons left">location_on</i> */}
          {`${location}${isPrecise ? "" : " (Approximated)"}`}
        </>
      </div>
    );
  } else {
    const unknown = copy[language].cardstack.unknown_location;
    return (
      <div className="card-cell location">
        <>
          {/* <i className="material-icons left">location_on</i> */}
          <h4>Location</h4>
          {unknown}
        </>
      </div>
    );
  }
};

export default CardLocation;
