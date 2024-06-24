import React from "react";
import { Modal, Box, Typography, Grid, IconButton } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { ExtendedCustomModalProps } from "./Modal.type";
import MyButton from "../Button";

const CustomModal: React.FC<ExtendedCustomModalProps> = ({
  title,
  children,
  onSubmit,
  onCancel,
  width = "auto",
  height = "auto",
  backgroundColor,
  headerContent,
  footerContent,
  open = false,
  onClose,
  showCloseIcon = false,
  ...modalProps
}) => {
  const theme = useTheme() as Theme;

  return (
    <Modal open={open} onClose={onClose} {...modalProps}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            width,
            height,
            backgroundColor: backgroundColor || theme.palette.background.paper,
            padding: 4,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 1,
            boxShadow: 24,
            position: "relative",
          }}
        >
          {showCloseIcon && (
            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
          {headerContent ? (
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              {headerContent}
            </Typography>
          ) : (
            title && (
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                {title}
              </Typography>
            )
          )}
          <Box sx={{ flexGrow: 1 }}>{children}</Box>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 2 }}
          >
            {onCancel && (
              <Grid item>
                <MyButton
                  label="Cancel"
                  backgroundColor="#ffffff"
                  borderColor="#000000"
                  width="100px"
                  height="40px"
                  variant="outlined"
                  onClick={onCancel}
                />
              </Grid>
            )}
            {onSubmit && (
              <Grid item>
                <MyButton
                  label="Submit"
                  backgroundColor="#000000"
                  borderColor="#000000"
                  width="100px"
                  height="40px"
                  onClick={onSubmit}
                />
              </Grid>
            )}
          </Grid>
          {footerContent && <Box sx={{ marginTop: 2 }}>{footerContent}</Box>}
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
