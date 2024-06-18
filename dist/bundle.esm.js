import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Button } from '@mui/material';

const MyButton = (props) => {
    return (jsxs(Fragment, { children: [jsx(Button, Object.assign({}, props)), " "] }));
};

export { MyButton };
