import React, { Component } from 'react';
import './App.css';
import {getCharacters} from './services/service';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      search: "",
      results: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    getCharacters()
    .then(data =>{
      const resultsId = data.map((item, index) => {
        return {...item, id: index}
      });
      this.setState({
        results: resultsId
      })
    });
  }

  handleSearch(event){
    const userSearch = event.currentTarget.value;
    this.setState({
      search: userSearch
    });
  }

  render() {
    const {results} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Harry Potter Characters' Finder</h1>
          <div className="search-field">
            <input className="search-field__input" type="text" placeholder="find your fav character" onChange={this.handleSearch}/>
          </div>
        </header>
        <main className="main">
          <ul className="list">
            {results.map(item => {
              return (
                <li className="list__item" id={item.id} key={item.id}>
                  <div className="list__item-card">
                    <img className="list__item-img" alt={item.name} src={item.image} />
                    <h2>{item.name}</h2>
                    <h3>{item.house}</h3>
                  </div>
                </li>
              )
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
