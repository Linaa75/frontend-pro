import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log('log from getDerivedStateFromError', error)
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log('log from componentDidCatch', error, errorInfo);
    }

    render() {
        console.log(this.state)
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback;
        }

        return this.props.children;
    }
}