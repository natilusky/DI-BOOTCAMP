import React from 'react'

class ErrorBoundary extends React.component {
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
                <>
                    <div>Somthig went wrong!!!</div>
                    <details>
                        {this.state.err.toString()}
                        <br></br>
                        {this.state.errInf.componentStack}
                    </details>
                </>
            )
        }
        return this.props.children

    }
}

export default ErrorBoundary
