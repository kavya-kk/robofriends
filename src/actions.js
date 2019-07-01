import {SEARCH_FIELD_CHANGED} from './constants';

export const setSearchField = (text) => ({
	type: SEARCH_FIELD_CHANGED,
	payload: text
});