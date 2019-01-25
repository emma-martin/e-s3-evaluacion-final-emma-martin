import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    render() { 
        return ( 
        <div className="search-field">
            <input className="search-field__input" type="text" placeholder="find your fav character" onChange={this.props.handleInput}/>
        </div>
        );
    }
}

Search.propTypes ={
    handleInput: PropTypes.func.isRequired
}
export default Search;