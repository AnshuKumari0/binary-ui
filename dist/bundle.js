'use strict';

var jsxRuntime = require('react/jsx-runtime');
var material = require('@mui/material');
var system = require('@mui/system');

const CustomLinearProgress = system.styled(material.LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.palette.grey[300],
    "& .MuiLinearProgress-bar": {
        borderRadius: 5,
        backgroundColor: theme.palette.primary.main,
    },
}));
const Loader = ({ size = 40, thickness = 3.6, color = "primary", variant = "circular", }) => {
    return (jsxRuntime.jsx(material.Box, { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", children: variant === "circular" ? (jsxRuntime.jsx(material.CircularProgress, { size: size, thickness: thickness, color: color })) : (jsxRuntime.jsx(material.Box, { width: "100%", children: jsxRuntime.jsx(CustomLinearProgress, { color: color }) })) }));
};

exports.Loader = Loader;
