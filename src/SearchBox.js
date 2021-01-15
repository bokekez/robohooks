import React from 'react';

const SearchBox = ({ searchfield, searchChange, theme}) => {
	console.log('+1');
	if (theme === 'light') {

		return (
		<div className='tc pa2'>
		<input
		className ='pa3 ba b--green bg-lightest-blue'
		type='search' placeholder='search robots' 
		onChange={searchChange}
		/>
		<p class='tc pa1 f7 near-white'> search robots by name, email or website </p>
		</div>
	);
	}
	else {
		return (
		<div className='tc pa2'>
		<input
		className ='pa3 ba b--green bg-lightest-blue'
		type='search' placeholder='search robots' 
		onChange={searchChange}
		/>
		<p class='tc pa1 f7 near-white'> search robots by name, email or website </p>
		</div>
		);
	}
	
	
}

export default SearchBox;