import React from 'react';
import PropTypes from 'prop-types'; 

const Jumbotron = ({title,description,buttonLabel,buttonURL}) => {
    return (
        <div class="p-5 bg-light">
            <h1 class="mb-3">{title}</h1>
            <h4 class="mb-3">{description}</h4>
            <a class="btn btn-primary" href={buttonURL} role="button">{buttonLabel}</a>
        </div>
    )
}

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL:PropTypes.string
}

export default Jumbotron;