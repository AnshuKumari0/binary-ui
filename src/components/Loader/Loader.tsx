import React from "react";
import { CircularProgress, LinearProgress, Box } from "@mui/material";
import { styled } from "@mui/system";

interface LoaderProps {
  size?: number;
  thickness?: number;
  color?: "primary" | "secondary" | "inherit";
  variant?: "circular" | "linear";
}

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[300],
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
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
        <CircularProgress size={size} thickness={thickness} color={color} />
      ) : (
        <Box width="100%">
          <CustomLinearProgress color={color} />
        </Box>
      )}
    </Box>
  );
};

export default Loader;
