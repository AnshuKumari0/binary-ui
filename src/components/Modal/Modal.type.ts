// Modal.type.ts
export interface CustomModalProps {
  title?: string;
  children?: React.ReactNode;
  onSubmit?: () => void;
  onCancel?: () => void;
  width?: number | string;
  height?: number | string;
  backgroundColor?: string;
  headerContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
}

export interface ExtendedCustomModalProps extends CustomModalProps {
  showCloseIcon?: boolean; // Add a prop to control the visibility of the close icon
}
