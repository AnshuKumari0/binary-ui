import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";

interface LoaderProps {
  size?: number;
  thickness?: number;
  color?: string;
  variant?: "circular" | "linear";
}

const CustomLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== "customColor",
})<{ customColor?: string }>(({ customColor, theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[300],
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: customColor || theme.palette.primary.main,
  },
}));

const Loader: React.FC<LoaderProps> = ({
  size = 40,
  thickness = 3.6,
  color = "primary",
  variant = "circular",
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      {variant === "circular" ? (
        <CircularProgress size={size} thickness={thickness} style={{ color }} />
      ) : (
        <Box width="100%">
          <CustomLinearProgress customColor={color} />
        </Box>
      )}
    </Box>
  );
};

export default Loader;
