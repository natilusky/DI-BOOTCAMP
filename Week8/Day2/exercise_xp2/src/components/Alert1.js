import React from 'react';
import PropTypes from 'prop-types';

const Alert1 = ({ text }) => {
    return (
        <>
            <h4>Exercise 1</h4>
        <div class="alert alert-danger" role="alert">
            {text}
        </div>
        </>
    )
}

Alert1.propTypes = {
    text: PropTypes.string
}

export default Alert1;