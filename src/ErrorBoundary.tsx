import React from 'react'

import ErrorImage from './ErrorBoundaryimage.png'

interface ErrorBoundaryState {
    hasError: boolean
    error: boolean
    errorInfo: boolean
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
    constructor(props: {}) {
        super(props)
        this.state = { hasError: false, error: false, errorInfo: false } //state erweitern
    }

    static getDerivedStateFromError() {
        //Lifecycle Method
        // render a fallback UI
        return { hasError: true }
    }

    componentDidCatch() {
        // log the error Information

        this.setState({
            error: true,
            errorInfo: true,
        })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <img src={ErrorImage} alt="ErrorImage" />
        }

        return this.props.children
    }
}

export default ErrorBoundary
