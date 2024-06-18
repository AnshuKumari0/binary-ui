// src/MyButton.tsx
import React from "react";
import { Button, ButtonProps } from "@mui/material";

const MyButton: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <Button {...props} />{" "}
    </>
  );
};

export default MyButton;
