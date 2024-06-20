// src/types/binary-ui.d.ts
declare module "binary-ui" {
  import React from "react";

  export interface MyButtonProps {
    text: string;
    onClick: () => void;
  }

  export const MyButton: React.FC<MyButtonProps>;
}
