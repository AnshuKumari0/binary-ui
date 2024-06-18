'use strict';

var jsxRuntime = require('react/jsx-runtime');
var material = require('@mui/material');

const MyButton = (props) => {
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(material.Button, Object.assign({}, props)), " "] }));
};

exports.MyButton = MyButton;
