import { render } from '@testing-library/react';
import React from 'react';

// let count = 0;

// const add = () => {
//     count = count + 1
//     console.log(count);
// }

// const NewComp = () => {
//     return (

//         <div style={{ textAlign: 'center' }}>
//             <h2> {count}</h2>
//             <button onClick={add}>add 1!!!</button>
//         </div>

//     )
// }



// class NewComp extends React.Component {
//     constructor(){
//         super();
//         console.log('constroctor');
//     }
//     componentDidMount(){
//         console.log('componentDidMount');

//     }
//         render(){
//         console.log('render');
//         return (

//             <div>
//                 <h1>Hii</h1>
//             </div>
//         )
//     }
// }

class NewComp extends React.Component {
    constructor() {
        console.log('constructor');
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
console.log('componentDidMoun');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');

    }

    add = () => {
        this.setState({ count: ++this.state.count})
    }

    render() {
        console.log('render');
        return (

            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.add}> Add!!!</button>
            </div>
        )
    }
}


export default NewComp;