import React from 'react';
import './card.css';

const Card = (props) => {
    const {data} = props;
    const {name, image, occupation} = data;
    return (
        <>
        
            <div className='tc grow br3 pa3 ma2 dib bw2 shadow-5'>
                <img src={image} />
                <p><strong>Name: </strong> {name}</p>
                <p><strong>Occupation: </strong>{occupation}</p>
             </div>
        </>

    )
}

export default Card;