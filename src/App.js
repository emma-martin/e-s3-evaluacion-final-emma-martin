import React, { Component } from 'react';
import './App.scss';
import {getCharacters} from './services/service';
import Search from './components/Search';
import {Route, Switch} from 'react-router-dom';
import CharacterList from './components/CharacterList/';
import CharacterCard from './components/CharacterCard/';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      search: "",
      results: [],
      loading: true
    }
    this.handleInput = this.handleInput.bind(this);
    this.cleanInput = this.cleanInput.bind(this);
  }

  componentDidMount(){
    getCharacters()
    .then(data =>{
      const resultsId = data.map((item, index) => {
        return {...item, id: index}
      });
      
      setTimeout(()=> this.setState({loading: false}), 2000);
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


  cleanInput(){
    this.setState({
      search: ""
    })
    console.log("hola")
  }


  render() {
    const {results} = this.state;
    const filteredResults = this.filterCharacter();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Harry Potter Characters</h1>
            <Switch>
              <Route exact path="/" render={()=><Search className="header__search" cleanInput={this.cleanInput}handleInput={this.handleInput} inputValue={this.state.search}/>} />
            </Switch>
            
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/" render={()=><CharacterList filteredResults={filteredResults} loading={this.state.loading}/>}/>
            <Route path="/charactercard/:id" render={props=><CharacterCard match={props.match}results={results} loading={this.state.loading}/>} />
          </Switch>
          
        </main>
      </div>
    );
  }
}

export default App;
