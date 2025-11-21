import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error logged:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>⚠ Something went wrong while loading the product.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
