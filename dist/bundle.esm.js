import { jsx, jsxs } from 'react/jsx-runtime';
import { LinearProgress, Box, CircularProgress, Drawer, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

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

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const UnifiedDrawer = (_a) => {
    var { variant = "default", title, subtitle, children, children1, children2, children3, onSubmit, onCancel, drawerProps, width = { lg: 720, md: 720, sm: 720, xs: "100%", xl: 1000 }, height, headerContent, footerContent, backgroundColor } = _a, other = __rest(_a, ["variant", "title", "subtitle", "children", "children1", "children2", "children3", "onSubmit", "onCancel", "drawerProps", "width", "height", "headerContent", "footerContent", "backgroundColor"]);
    const theme = useTheme();
    const renderContent = () => {
        switch (variant) {
            case "two-col":
                return (jsx(Box, { sx: { width, padding: 2 }, role: "presentation", children: jsx(Grid, { container: true, children: jsxs(Grid, { item: true, lg: 12, md: 12, sm: 12, xs: 12, xl: 12, sx: { paddingTop: 4, paddingBottom: 1 }, children: [jsx(Typography, { variant: "h3", children: title }), jsx(Typography, { variant: "subtitle2", children: subtitle }), jsxs(Grid, { container: true, spacing: 2, sx: { marginTop: 3, marginBottom: 0 }, children: [jsx(Grid, { item: true, lg: 6, md: 6, sm: 6, xs: 12, xl: 6, children: children1 }), jsx(Grid, { item: true, lg: 6, md: 6, sm: 6, xs: 12, xl: 6, children: children2 })] }), jsx(Grid, { container: true, children: jsx(Grid, { item: true, lg: 12, md: 12, sm: 12, xs: 12, xl: 12, children: children3 }) })] }) }) }));
            case "one-col":
                return (jsx(Box, { sx: { width, padding: 2, marginLeft: 1, marginRight: 1 }, role: "presentation", children: jsx(Grid, { container: true, children: jsxs(Grid, { item: true, lg: 12, md: 12, sm: 12, xs: 12, sx: { paddingTop: 4, paddingBottom: 5 }, children: [jsx(Typography, { variant: "h3", children: title }), jsx(Grid, { container: true, sx: { marginTop: 3, marginBottom: 2 }, children: children }), jsxs(Grid, { item: true, lg: 12, xs: 12, sx: {
                                        marginTop: 2,
                                        marginBottom: 2,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }, children: [jsx(Button, { variant: "outlined", sx: { width: 240, margin: 0.8 }, onClick: onCancel, children: "Cancel" }), jsx(Button, { variant: "contained", sx: {
                                                width: 240,
                                                margin: 0.8,
                                                background: theme.palette.primary.dark,
                                                color: theme.palette.primary.light,
                                            }, onClick: onSubmit, children: "Submit" })] })] }) }) }));
            case "default":
            default:
                return (jsxs(Box, { sx: { width, height, padding: 2, backgroundColor }, role: "presentation", children: [headerContent && (jsx(Box, { sx: {
                                padding: 2,
                                borderBottom: `1px solid ${theme.palette.divider}`,
                            }, children: headerContent })), jsx(Box, { sx: { padding: 2 }, children: children }), footerContent && (jsx(Box, { sx: {
                                padding: 2,
                                borderTop: `1px solid ${theme.palette.divider}`,
                            }, children: footerContent }))] }));
        }
    };
    return (jsx(Drawer, Object.assign({}, drawerProps, other, { children: renderContent() })));
};

export { UnifiedDrawer as Drawer, Loader };
