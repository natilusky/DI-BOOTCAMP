import React from 'react';

class FavoriteColor extends React.Component {

    render() {
        const { changeBlue , color } = this.props;
        return (
            <div>
                <h2>My Favorite Color is {color}</h2>
                <button onClick={() => changeBlue()}>Change Blue</button>
            </div>
        )
    }
}

export default FavoriteColor