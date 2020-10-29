import React from "react";
import { Button } from "../../Button/Button.React";

const CardButton = ({ text, color = "#000", onClick = () => {}, normalCursor }) => (
  <Button
    size={"small"}
    backgroundColor={color}
    borderRadius={"12px"}
    primary={false}
    label={text}
    onClick={onClick}
    normalCursor={normalCursor}
  />
);

export default CardButton;
