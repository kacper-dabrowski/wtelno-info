import React from 'react';
import PropTypes, { func } from 'prop-types';
import Backdrop from './BackdropStyles';

const backdrop = ({ show, clicked }) => {
    return show ? <Backdrop onClick={clicked} /> : null;
};
backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: func.isRequired,
};
export default backdrop;
