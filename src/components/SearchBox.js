import React from 'react';

const SearchBox = ({searchChange}) => {

	return (
		<div className = 'pa2'>
			<input 
				type="search" 
				placeholder="Type in to search" 
				className = 'pa2 bg-lightest-blue b--green ba'
				onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;