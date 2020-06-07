import React, { Component } from 'react';

import {CardList} from './Components/card-list/card-list.component';

import {SearchBox} from './Components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor() {
      super();

      this.state = {
        monsters: [],
        searchField: ''
      };

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())  //Here response is just a variable indicating what we got back
      .then(users => this.setState({ monsters: users}));   //Here users in array elements converted in the form by json
  }

  render(){
    //Pull properties of an object and put it in const varuables.
    //includes check wether the passed string match the strings in array. It returns boolean. True or False
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex </h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={e => {this.setState({ searchField: e.target.value})
        }}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
