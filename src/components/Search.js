import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    render() { 
        return ( 
        <div className="header__search-field">
            <input className="header__search-input" type="text" placeholder="find your fav character" onChange={this.props.handleInput}/>
        </div>
        );
    }
}

Search.propTypes ={
    handleInput: PropTypes.func.isRequired
}
export default Search;