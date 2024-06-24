import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { MyButtonProps } from "./Button.type";

const MyButton: React.FC<MyButtonProps & ButtonProps> = ({
  label,
  backgroundColor = "#1a73e8",
  color = "#ffffff",
  borderColor = "#1a73e8",
  width = "200px",
  height = "50px",
  fontSize = "1em",
  variant = "contained",
  sx,
  onClick,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant={variant}
      sx={{
        backgroundColor,
        color,
        borderColor,
        width,
        height,
        textTransform: "capitalize",
        fontSize,
        ...sx,
        "&:hover": {
          backgroundColor: backgroundColor ? `${backgroundColor}CC` : undefined,
        },
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default MyButton;
