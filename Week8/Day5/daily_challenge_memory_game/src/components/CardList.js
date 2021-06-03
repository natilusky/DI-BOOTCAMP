import React from 'react';
import Card from './Card';
import './list.css'


const CardList = (props) => {
    console.log(props);
    const { heroes} = props;
    let superheroes = heroes.superheroes
    return (
        <>
        <div id="head">
            <h1>Superheroes Memory Game</h1>
            <p>Score: 0   Top Score: 0</p>
        </div>
        <div id="inf">
            <h3>Get points by clicking on an image but don't click on any more than once!</h3>
        </div>
        <div className="tc">
            {
                superheroes.map((item, i) => {
                    console.log(item);
                    return <Card data={item} key={i} />
                })
            }
        </div>
        </>
    )
}

export default CardList;