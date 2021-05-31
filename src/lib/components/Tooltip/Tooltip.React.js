import React from "react";
import PropTypes from "prop-types";
import CardText from "../Card/atoms/Text";

export const Tooltip = ({
  backgroundColor,
  borderRadius,
  opacity,
  height,
  width,
  content,
  ...props
}) => {
  return (
    <div
      className="tooltip"
      style={{
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        opacity: opacity,
        width: width,
        height: height
      }}
      {...props}
    >
      <div className="tooltip-row">
        {content.map((row) => (
          !isEmptyString(row.value) && <CardText {...row}>
        ))}
      </div>
    </div>
  )
};

Tooltip.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  opacity: PropTypes.number,
  height: PropTypes.string,
  width: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string
  })).isRequired
};

Tooltip.defaultProps = {
  backgroundColor: "black",
  borderRadius: "0%",
  opacity: 1,
  height: "35px",
  width: "25px"
};