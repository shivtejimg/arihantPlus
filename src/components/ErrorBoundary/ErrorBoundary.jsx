import React from "react"

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        console.log({ error });
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
        console.log("error->>",{error,info})
    }
  
    render() {
      if (this.state.hasError) {
        return <h1 className="text-red-700 text-base" >Something went wrong!</h1>;
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary;