import React from 'react';

const Scroll = (props) => {
	return (
		<div style = {{border: '1px solid black', overflowY: 'scroll', height : '500px'}}>
			{props.children}
		</div>
	);

}

export default Scroll;