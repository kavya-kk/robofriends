import {SEARCH_FIELD_CHANGED} from './constants';

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