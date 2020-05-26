import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/searchbox.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      search : ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response1 => this.setState({monsters : response1}));
  }
  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Chandrakanth Patil</h1>
        <SearchBox placeholderkey='Search Monsters' actiononchange={e => this.setState({search : e.target.value})} />
        <CardList monsters={filteredMonsters} /> 
      </div>
    );
  }
}

export default App;
