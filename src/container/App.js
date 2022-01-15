import React , { Component } from 'react';
//import { robots } from './robots.js';
import SearchBox from '../component/SearchBox.js';
import CardList from '../component/CardList.js';
import Scroll from '../component/Scroll.js';
import ErrorBoundry from '../component/ErrorBoundry.js';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
        console.log("In constructor()");
    }

    onSearchChange = (event) => {
        //console.log(event.target.value);
        this.setState({searchfield: event.target.value})
    }

    componentDidMount(){
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(robots => robots.json())
         .then(jsonRobots => this.setState({robots: jsonRobots}));
         //.then(jsonRobots => []);
         console.log("In componentDidMount()");
    }

    render(){
        const { robots , searchfield } = this.state;
        console.log("In render()");
        const filteredRobots = robots.filter( robot => {
            return robot.name?.toLowerCase().includes(searchfield.toLowerCase());
        }

        );
       return !robots.length?
             <h1>Loading</h1>
        :
             (
                <div className="tc">
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                    </Scroll>
                </div>
            )         
    }
}

export default App;