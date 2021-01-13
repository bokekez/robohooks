import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
	return (
		<div className='tc pa2'>
		<input
		className ='pa3 ba b--green bg-lightest-blue'
		type='search' placeholder='search robots' 
		onChange={searchChange}
		/>
		<p class='tc pa1 f6 near-white'> search robots by name, email or website </p>
		</div>
	);
	
}

export default SearchBox;