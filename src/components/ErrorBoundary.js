import React, { Component } from 'react';

class ErrorBoundary extends Component {

	constructor(props){
		super(props);
		this.state = {
			hasErrorOccurred: false
		}
	}

	componentDidCatch(error, info){
		this.setState({hasErrorOccurred: true});
	}

	render() {
		if(this.state.hasErrorOccurred){
			return (<h1>Error Occurred</h1>);
		}else {
			return this.props.children;
		}
	}
}

export default ErrorBoundary;