import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import {setSearchField,requestRobots} from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField : state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
	
}

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const {searchField, onSearchChange, isPending, robots} = this.props;
		const filteredRobots = robots.filter((item) => {
			return item.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if(isPending){
			return (<h1 className="f2"> Loading </h1>);
		}else {
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);