import React from 'react';
import PropTypes from 'prop-types';

const Alert3 = ({ text, color }) => {
    const colorClasses = {
        'red': 'alert-danger',
        'orange': 'alert-warning'
    }
    return (
        <>
        <hr></hr>
            <h4>Exercise 3</h4>
        <div class={`alert ${colorClasses[color]}`} role="alert">
            This is a primary alert-check it out!
        </div>
        </>
    )
}


Alert3.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Alert3;