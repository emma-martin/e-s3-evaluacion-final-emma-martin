import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CleanSearch from './CleanSearch';

class Search extends Component {
    render() {
        const {inputValue, cleanInput} = this.props;
        return ( 
        <div className="header__search-field">
            <input 
            className="header__search-input" 
            type="text" 
            placeholder="find your fav character" 
            value= {inputValue}
            onChange={this.props.handleInput}/>
            {inputValue !== "" && <CleanSearch cleanInput={cleanInput}/>}
        </div>
        );
    }
}

Search.propTypes ={
    handleInput: PropTypes.func.isRequired
}
export default Search;