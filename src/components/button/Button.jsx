import React from "react";

import { StyledButton } from "./Button.style";

const Button = ({ text, action, theme }) => {
  let btnBackground;
  let btnColor;
  let btnBorder;
  switch (theme) {
    case "primary":
      btnBackground = "#fff";
      btnBorder = "none";
      // btnColor = "hsl(229, 25%, 31%)";
      break;
    case "secondary":
      btnBackground = "#15193C";
      btnBorder = "2px solid hsl(217, 16%, 45%)";
      btnColor = "#fff";
      break;
    default:
      btnBackground = "#fff";
      btnBorder = "none";
    // btnColor = "hsl(229, 25%, 31%)";
  }
  return (
    <StyledButton
      style={{
        backgroundColor: btnBackground,
        color: btnColor,
        border: btnBorder,
      }}
      onClick={action}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
