export interface UnifiedDrawerProps {
  variant?: "default" | "one-col" | "two-col";
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  children1?: React.ReactNode;
  children2?: React.ReactNode;
  children3?: React.ReactNode;
  onSubmit?: () => void;
  onCancel?: () => void;
  width?: { lg: number; md: number; sm: number; xs: string; xl: number };
  height?: number;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  backgroundColor?: string;
  open: boolean;
  onClose: () => void;
  anchor?: "left" | "right" | "top" | "bottom";
}
