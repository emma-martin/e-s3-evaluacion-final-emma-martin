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
      loading: true,
      select: "",
      house: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.cleanInput = this.cleanInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

  }

  componentDidMount(){
    const LsData = localStorage.getItem('LsData');
    if(LsData !== null){
      const parseData = JSON.parse(LsData);
      setTimeout(()=> this.setState({loading: false}), 1000);  
      this.setState({
          results: parseData
        })
    } else {
      getCharacters()
      .then(data =>{
        const resultsId = data.map((item, index) => {
          return {...item, id: index}
        });
        setTimeout(()=> this.setState({loading: false}), 1000);
        this.setState({
          results: resultsId
        });
          this.saveData(resultsId);

      });
    } 
  }

  saveData(data){
    localStorage.setItem('LsData', JSON.stringify(data));
  }

  handleInput(event){
    const userSearch = event.currentTarget.value;
    this.setState({
      search: userSearch
    });
  }

  cleanInput(){
    this.setState({
      search: ""
    })
  }

  filterCharacter(){
    const filteredCharacter = this.state.results.filter( item => {
        const nameCharacter =`${item.name}`;
        return (this.state.search === [] || nameCharacter.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())) 
      });
      return filteredCharacter;
  }

  handleSelect(event){
    const userSelect = event.target.value;
    this.setState({
      house: userSelect
    });
    console.log(this.state.house)
  }

  filterHouse(){
    const filteredHouses = this.state.results.filter(item => item.house.includes(this.state.select)
    );
    return filteredHouses;
  }




  render() {
    const {results} = this.state;
    const filteredResults = this.filterCharacter();
    const filteredHouses = this.filterHouse();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Harry Potter Characters</h1>
            <Switch>
              <Route exact path="/" render={()=><Search className="header__search" 
              cleanInput={this.cleanInput} 
              handleInput={this.handleInput} 
              inputValue={this.state.search}
              handleSelect={this.handleSelect}
              
              selectValue={this.state.house}
              />} />
            </Switch>
            
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/" render={()=><CharacterList 
            filteredResults={filteredResults} 
            loading={this.state.loading}
            filteredHouses={filteredHouses}
            />}/>
            <Route path="/charactercard/:id" render={props=><CharacterCard match={props.match}results={results} loading={this.state.loading}/>} />
          </Switch>
          
        </main>
      </div>
    );
  }
}

export default App;
