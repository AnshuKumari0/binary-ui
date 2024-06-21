// Drawer.type.ts
import { DrawerProps } from "@mui/material/Drawer";

export interface MuiDrawerProps {
  title: string;
  children: React.ReactNode;
  onSubmit?: () => void;
  onCancel?: () => void;
  width?: number | string;
  height?: number | string;
  drawerProps?: DrawerProps;
}

export interface UnifiedDrawerProps extends MuiDrawerProps {
  variant: "default" | "two-col" | "one-col";
  subtitle?: string;
  children1?: React.ReactNode;
  children2?: React.ReactNode;
  children3?: React.ReactNode;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  backgroundColor?: string;
}
