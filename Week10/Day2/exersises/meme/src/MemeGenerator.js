import React from 'react';

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        };
    }

    componentDidMount = () => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(res => {
                console.log(res.data.memes);
                this.setState({ allMemeImgs: res.data.memes })
            })
            .catch(err => {
                console.error(err);
            });
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    genClick = (e) => {
        e.preventDefault();
        const {allMemeImgs} = this.state
        const random = Math.floor(Math.random() * allMemeImgs.length);
        this.setState({randomImg: allMemeImgs[random].url})
    }

    render() {
        const {topText, bottomText, randomImg } = this.state;
        return (
            <>
                <form className="meme-form">
                    <input type='text' name='topText' onChange={this.handleChange} placeholder='Top Text' />
                    <input type='text' name='bottomText' onChange={this.handleChange} placeholder='Bottom Text' />
                    <button onClick={this.genClick}>Gen</button>
                </form>
                <div className="meme">
                    <img src={`${randomImg}`} alt='' id='memPic'/>
                    <h2 className="top">{topText}</h2>
                    <h2 className="bottom">{bottomText}</h2>

                </div>
            </>
        )
    }
}



export default MemeGenerator;