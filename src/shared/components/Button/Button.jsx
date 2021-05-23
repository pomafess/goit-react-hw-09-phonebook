import React from 'react';
import PropTypes from 'prop-types'


import s from "./Button.module.css"

const Button =({ children, type = 'button', onClick = () => null,className}) =>{
    return <button  className={`${s.button} ${className}`} type={type} onClick={onClick}>{children}</button>
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
}

export default Button;