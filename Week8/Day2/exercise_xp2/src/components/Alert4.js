import React from 'react';
import PropTypes from 'prop-types';

const Alert3 = ({ text, color }) => {
    const colorClasses = {
        red: 'alert-danger',
        orange: 'alert-warning',
        green: 'alert-success'
    };
    if (colorClasses[color]) {
        return (
            <>
                <hr></hr>
                <h4>Exercise 4</h4>
                <div className={`alert ${colorClasses[color]}`} role="alert">
                    {text}
                </div>
            </>
        );
    }
    else {
        alert(`${color} is not in the list`)
        return (
            <>
                <hr></hr>
                <h4>Exercise 4</h4>
                <div>
                    {text}
                </div>
            </>
        );
    }

}


Alert3.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Alert3;