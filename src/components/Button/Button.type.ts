import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

// Define custom props interface
export interface MyButtonProps {
  label?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  variant?: "contained" | "outlined" | string;
  sx?: SxProps<Theme>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
