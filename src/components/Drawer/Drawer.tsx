import React from "react";
import { Box, Button, Drawer, Grid, Typography } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { UnifiedDrawerProps } from "./Drawer.type";

const UnifiedDrawer: React.FC<UnifiedDrawerProps> = ({
  variant = "default",
  title,
  subtitle,
  children,
  children1,
  children2,
  children3,
  onSubmit,
  onCancel,
  width = { lg: 720, md: 720, sm: 720, xs: "100%", xl: 1000 },
  height,
  headerContent,
  footerContent,
  backgroundColor,
  open,
  onClose,
  anchor = "left",
  ...other
}) => {
  const theme = useTheme() as Theme;

  const renderContent = () => {
    switch (variant) {
      case "two-col":
        return (
          <Box sx={{ width, padding: 2 }} role="presentation">
            <Grid container>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                xl={12}
                sx={{ paddingTop: 4, paddingBottom: 1 }}
              >
                <Typography variant="h3">{title}</Typography>
                <Typography variant="subtitle2">{subtitle}</Typography>
                <Grid
                  container
                  spacing={2}
                  sx={{ marginTop: 3, marginBottom: 0 }}
                >
                  <Grid item lg={6} md={6} sm={6} xs={12} xl={6}>
                    {children1}
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12} xl={6}>
                    {children2}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
                    {children3}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
      case "one-col":
        return (
          <Box
            sx={{ width, padding: 2, marginLeft: 1, marginRight: 1 }}
            role="presentation"
          >
            <Grid container>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{ paddingTop: 4, paddingBottom: 5 }}
              >
                <Typography variant="h3">{title}</Typography>
                <Grid container sx={{ marginTop: 3, marginBottom: 2 }}>
                  {children}
                </Grid>
                <Grid
                  item
                  lg={12}
                  xs={12}
                  sx={{
                    marginTop: 2,
                    marginBottom: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{ width: 240, margin: 0.8 }}
                    onClick={onCancel}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      width: 240,
                      margin: 0.8,
                      background: theme.palette.primary.dark,
                      color: theme.palette.primary.light,
                    }}
                    onClick={onSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
      case "default":
      default:
        return (
          <Box
            sx={{ width, height, padding: 2, backgroundColor }}
            role="presentation"
          >
            {headerContent && (
              <Box
                sx={{
                  padding: 2,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }}
              >
                {headerContent}
              </Box>
            )}
            <Box sx={{ padding: 2 }}>{children}</Box>
            <Grid
              item
              lg={12}
              xs={12}
              sx={{
                marginTop: 2,
                marginBottom: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                sx={{ width: 240, margin: 0.8 }}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  width: 240,
                  margin: 0.8,
                  background: theme.palette.primary.dark,
                  color: theme.palette.primary.light,
                }}
                onClick={onSubmit}
              >
                Submit
              </Button>
            </Grid>
            {footerContent && (
              <Box
                sx={{
                  padding: 2,
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                {footerContent}
              </Box>
            )}
          </Box>
        );
    }
  };

  return (
    <Drawer {...other} open={open} onClose={onClose} anchor={anchor}>
      {renderContent()}
    </Drawer>
  );
};

export default UnifiedDrawer;
