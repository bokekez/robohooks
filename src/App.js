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
    return theme;
  // otherwise, it should be light
  } else {
    setTheme('light');
    return theme;
  }
}

const Card = (props) =>{
	const { name, email, website, id } = props;
	console.log(theme);
	if (theme === 'light')
	{
	return (
		<div class="myclass" className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{name}</h2>
				<p className='f6'>{email}</p>
				<p2 className='f6'>{website}</p2>
			</div>
		</div>
	)
	}
	else if (theme === 'dark') {
		return (
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{name}</h2>
				<p className='f6'>{email}</p>
				<p2 className='f6'>{website}</p2>
			</div>
		</div>
	)
	}
	else {
		return (
		<div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2 className='f5'>{name}</h2>
				<p className='f6'>{email}</p>
				<p2 className='f6'>{website}</p2>
			</div>
		</div>
	)
	}
}
const CardList = ({ robots, theme }) =>{
	const cardComponent = robots.map((user, i) => {
		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} website={robots[i].website}/>
	})
	return(
	<div >
		{cardComponent}
    </div>

	);
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