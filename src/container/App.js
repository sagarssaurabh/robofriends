// This is our main js file which is like parent to all componenets
import React, { Component } from 'react';
import CardList from '../component/CardList';
// import { robots } from './robots';
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';
// import 'tachyons';

//we are changing this App from function into class because we have to use constructor
// function to pss the state for this component to its childrens

class App extends Component {
    constructor(){
      super()
      this.state = {
        robot : [] ,
        searchfield : ''
      }
    }

    onSearchChange = (event) => {
      // console.log(event.target.value);
      this.setState({ searchfield : event.target.value})
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({robot : user}))
      // this.setState({robot : robots});
    }

    render() {
      const { robot , searchfield } = this.state;
      const filteredrobot = robot.filter(item =>{
          return item.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredrobot} />
          </Scroll>
        </div>
      );
    }

}
export default App;

//we need to return single element for which we wrap the JSX syntax in div elements

//we need to set up communication between SearchBox and CardList
// by using this.state.robot we are able to pass state as prop

//As App now include state as robots it is allowed to change it
