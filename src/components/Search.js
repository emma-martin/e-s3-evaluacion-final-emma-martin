import React, { Component } from 'react';

class Search extends Component {

    render() { 
        return ( 
        <div className="search-field">
            <input className="search-field__input" type="text" placeholder="find your fav character" onChange={this.props.handleInput}/>
        </div>
        );
    }
}

export default Search;