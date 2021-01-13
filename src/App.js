import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import {robots} from './robots';
import './App.css';
import ErrorBoundry from './ErrorBoundry';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from './toggle.js'


// const state ={
// 	robots: robots,
// 	searchfield: ''
// }

function App (){
document.title = "Robohooks"
	// constructor(){
	// 	super()
	// 	this.state = {
	// 		robots: [],
	// 		searchfield: ''
	// 	}
	// }

const [theme, setTheme] = useState('light');
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


// The function that toggles between themes
const toggleTheme = () => {
	console.log(theme);
  // if the theme is not light, then set it to dark
  if (theme === 'light') {
    setTheme('dark');
  // otherwise, it should be light
  } else {
    setTheme('light');
  }
}
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
	else if (robot.website.toLowerCase().includes(searchfield.toLowerCase()))
			{
				return robot.website;
			}	
	else{
				return '';
		}
})
if (state === 'initial')
 	{ 
 		// return <h1>Loading</h1>
 		return (
 		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
 		<GlobalStyles /> 
        <div className='tc top:1rem'>
       		
        	<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
	 		<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={onSearchChange}/>
			<h1 className='tc'>Loading</h1> 
		</div>
        <footer>
        </footer>
    	</ThemeProvider>
		)
 	}
else if (state === 'loaded') {
	if (filterRobotsName == '')
	{
		return(
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<div className='tc top:1rem'>	
				<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<p class='p1'>Search found no robots</p>
			</div>
	        <footer>
	        </footer>

	    	</ThemeProvider>
			)
	}else {		
		return(
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<div className='tc top:1rem'>	
				<Toggle className='tc' theme={theme} toggleTheme={toggleTheme} />
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
					<ErrorBoundry>
						<CardList robots={filterRobotsName}/>
					</ErrorBoundry>

			</div>
			 <footer>
	        </footer>
	    	</ThemeProvider>
		);
	}
	}
	
}
export default App;