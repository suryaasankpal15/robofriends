import React , { useState , useEffect } from 'react';
//import { robots } from './robots.js';
import SearchBox from '../component/SearchBox.js';
import CardList from '../component/CardList.js';
import Scroll from '../component/Scroll.js';
import ErrorBoundry from '../component/ErrorBoundry.js';
import './App.css';

function App() {
    // constructor(){
    //     super();
    //     this.state = {
    //         robots : [],
    //         searchfield : ''
    //     }
    //     console.log("In constructor()");
    // }

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    // componentDidMount(){
    //      fetch('https://jsonplaceholder.typicode.com/users')
    //      .then(robots => robots.json())
    //      .then(jsonRobots => this.setState({robots: jsonRobots}));
    //      //.then(jsonRobots => []);
    //      console.log("In componentDidMount()");
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(robots => robots.json())
            .then(jsonRobots => setRobots(jsonRobots));
    }, [count])
    
        const filteredRobots = robots.filter( robot => {
            return robot.name?.toLowerCase().includes(searchField.toLowerCase());
        }

        );
       return !robots.length?
             <h1>Loading</h1>
        :
             (
                <div className="tc">
                    <h1>Robofriends</h1>
                    <button onClick={()=>setCount(count+1)} >Increase Count</button>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                    </Scroll>
                </div>
            );
}

export default App;