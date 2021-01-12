import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import {robots} from './robots';
import './App.css';
import ErrorBoundry from './ErrorBoundry';

// const state ={
// 	robots: robots,
// 	searchfield: ''
// }

function App (){
	// constructor(){
	// 	super()
	// 	this.state = {
	// 		robots: [],
	// 		searchfield: ''
	// 	}
	// }
const [state, setState] = useState('initial')
const [robots, setRobots] = useState([]);
const [searchfield, setSearchfield] = useState('');
	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users').then(response => {
	// 		return response.json();
	// 	})
	// 	.then(users => {
	// 		this.setState({robots:users})
	// 	})
	// 	// this.setState({ robots: robots});
	// }

useEffect(() => { if (setState !== 'loaded') {	
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
	 	.then(users => {setRobots(users)})
	 	.then(setState('loaded'))
	}}, []) // <-- didMount da se ne ucitava stalno

const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}
const filterRobotsName = robots.filter(robot => {
	if (robot.name.toLowerCase().includes(searchfield.toLowerCase()))
			{
				return robot.name;
			}

	else if (robot.email.toLowerCase().includes(searchfield.toLowerCase()))
			{
				return robot.email;
			}	
	else{
				return '';
		}
})
if (state === 'initial')
 	{ 
 		// return <h1>Loading</h1>
 		return (
 		<div className='tc'>
	 		<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange}/>
			<h1 className='tc'>Loading</h1> 
		</div>
		)
 	}
else if (state === 'loaded') {
	if (filterRobotsName == '')
	{
		return(
			<div className='tc'>	
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<p class='p1'>Search found no robots</p>
			</div>
			)
	}else {		
		return(
			<div className='tc'>	
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
					<ErrorBoundry>
						<CardList robots={filterRobotsName}/>
					</ErrorBoundry>

			</div>
		);
	}
	}
	
}

export default App;