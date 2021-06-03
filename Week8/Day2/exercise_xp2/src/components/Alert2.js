import React from 'react';
import PropTypes from 'prop-types';

const Alert2 = ({ text, show }) => {
    if (show === false) {
        return null;
    }
    else {
        return (
            <>
            <hr></hr>
                <h4>Exercise 2</h4>
                    <div class="alert alert-danger" role="alert">
                        {text}
                    </div>
            </>
        )
    }
};


Alert2.propTypes = {
                    text: PropTypes.string,
    show: PropTypes.bool
}

export default Alert2;