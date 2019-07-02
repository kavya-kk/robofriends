import {SEARCH_FIELD_CHANGED,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED} from './constants';

const initialState = {
	searchField : ''
};

export const searchRobots = (state = initialState, action ={}) => {
	switch(action.type){
		case SEARCH_FIELD_CHANGED: 
			return Object.assign({},state, {searchField: action.payload});
		default: 
			return state;
	}
}

const initalStateRobots = {
	robots : [],
	isPending: false,
	error: ''
}

export const requestRobots = (state= initalStateRobots, action={}) => {
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({}, state, {isPending: true});
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({}, state, {isPending: false, robots: action.payload});
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {isPending: false, error: action.payload});
		default:
			return state;
	}
}