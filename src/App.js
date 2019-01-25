import React, { Component } from 'react';
import './App.css';
import {getCharacters} from './services/service';
import Search from './components/Search';
import {Route, Switch} from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      search: "",
      results: []
    }
    this.handleInput = this.handleInput.bind(this);
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

  handleInput(event){
    const userSearch = event.currentTarget.value;
    this.setState({
      search: userSearch
    });
  }

  filterCharacter(){
    const filteredCharacter = this.state.results.filter( item => {
        const nameCharacter =`${item.name}`;
        return (this.state.search === "" || nameCharacter.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) 
      });
      return filteredCharacter;
  }

  render() {
    const {results} = this.state;
    const filteredResults = this.filterCharacter();
    return (
      <div className="App">
        <header className="App-header">
          <h1>Harry Potter Characters</h1>
            <Switch>
              <Route exact path="/" render={()=><Search handleInput={this.handleInput}/>} />
            </Switch>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/" render={()=><CharacterList filteredResults={filteredResults}/>}/>
            <Route path="/charactercard/:id" render={props=><CharacterCard match={props.match}results={results}/>} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
