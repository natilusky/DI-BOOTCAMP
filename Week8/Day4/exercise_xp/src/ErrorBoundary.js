import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            errInf: null
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ err: error, errInf: errorInfo })
    }

    render() {
        if (this.state.errInf) {
            return (
                <div>
                    <h3>Somethig went wrong!!!</h3>
                    <details>
                        {this.state.err.toString()}
                        <br></br>
                        {this.state.errInf.componentStack}
                    </details>
                    </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;