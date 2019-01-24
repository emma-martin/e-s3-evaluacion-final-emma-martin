import React, { Component } from 'react';
import './App.css';
import {getCharacters} from './services/service';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      results: []
    }
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Holi</div>
        </header>
      </div>
    );
  }
}

export default App;
