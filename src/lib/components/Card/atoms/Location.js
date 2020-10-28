import React from "react";

import copy from "../../../data/copy.json";

export const CardLocation = ({ language, location, isPrecise }) => {
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

export const CardLocationPrecision = ({ type }) => {
  switch (type) {
    case `Confirmed`:
      return null;
    case `Generalised`:
      return (
        <>
          <em>No precise location data available.</em>
        </>
      );
    case `Estimated`:
      return (
        <>
          <span>
            This location is an estimate; precise location could not be
            verified.
          </span>
        </>
      );
    case `Self-reported`:
      return (
        <>
          <span>This location was reported by a witness.</span>
        </>
      );
    default:
      return null;
  }
};
