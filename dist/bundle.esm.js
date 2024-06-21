import { jsx } from 'react/jsx-runtime';
import { LinearProgress, Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.palette.grey[300],
    "& .MuiLinearProgress-bar": {
        borderRadius: 5,
        backgroundColor: theme.palette.primary.main,
    },
}));
const Loader = ({ size = 40, thickness = 3.6, color = "primary", variant = "circular", }) => {
    return (jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", children: variant === "circular" ? (jsx(CircularProgress, { size: size, thickness: thickness, color: color })) : (jsx(Box, { width: "100%", children: jsx(CustomLinearProgress, { color: color }) })) }));
};

export { Loader };
