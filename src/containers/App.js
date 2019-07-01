import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import {setSearchField} from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField : state.searchField
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange : (event) => dispatch(setSearchField(event.target.value))
	}
	
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots : []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({robots : users}));
	}

	render() {
		const {searchField, onSearchChange} = this.props;
		const filteredRobots = this.state.robots.filter((item) => {
			return item.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if(this.state.robots.length ===0){
			return (<h1 className="f2"> Loading </h1>);
		}
		return (
			<div className = "tc">
				<h1 className="f2"> RoboFriends </h1>
				<SearchBox searchChange = {onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots = {filteredRobots}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);