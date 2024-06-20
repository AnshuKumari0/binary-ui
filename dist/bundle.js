'use strict';

var jsxRuntime = require('react/jsx-runtime');
var material = require('@mui/material');
var Box = require('@mui/material/Box');
var LinearProgress = require('@mui/material/LinearProgress');
var CircularProgress = require('@mui/material/CircularProgress');
var system = require('@mui/system');

const MyButton = (props) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(material.Button, Object.assign({}, props)), " "] }));
};

const CustomLinearProgress = system.styled(LinearProgress, {
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
    return (jsxRuntime.jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", children: variant === "circular" ? (jsxRuntime.jsx(CircularProgress, { size: size, thickness: thickness, style: { color } })) : (jsxRuntime.jsx(Box, { width: "100%", children: jsxRuntime.jsx(CustomLinearProgress, { customColor: color }) })) }));
};

exports.Loader = Loader;
exports.MyButton = MyButton;
