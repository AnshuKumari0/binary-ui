import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/system';

const MyButton = (props) => {
    return (jsxs(Fragment, { children: [jsx(Button, Object.assign({}, props)), " "] }));
};

const CustomLinearProgress = styled(LinearProgress, {
    shouldForwardProp: (prop) => prop !== "customColor",
})(({ customColor, theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.palette.grey[300],
    "& .MuiLinearProgress-bar": {
        borderRadius: 5,
        backgroundColor: customColor || theme.palette.primary.main,
    },
}));
const Loader = ({ size = 40, thickness = 3.6, color = "primary", variant = "circular", }) => {
    return (jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", children: variant === "circular" ? (jsx(CircularProgress, { size: size, thickness: thickness, style: { color } })) : (jsx(Box, { width: "100%", children: jsx(CustomLinearProgress, { customColor: color }) })) }));
};

export { Loader, MyButton };
