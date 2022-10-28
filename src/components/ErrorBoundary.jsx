import {React, Component} from "react";
 
class ErrorBoundary extends Component {
 
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
 
  componentDidCatch(error, errorInfo) {
 
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
 
  }
 
  render() {
    if (this.state.errorInfo) {
 
      return (
        
        <div>
          <h2>An Error Has Occured in this component</h2>
      
        </div>
        
      );
      
    }
    
    return this.props.children;
  }
}

export default ErrorBoundary;