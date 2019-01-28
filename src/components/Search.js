import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import CleanSearch from './CleanSearch';

class Search extends Component {
    render() {
        const {inputValue, cleanInput, handleInput, selectValue, handleSelect} = this.props;
        return ( 
            <Fragment>
            <div className="header__search-field">
                <input 
                className="header__search-input" 
                type="text" 
                placeholder="find your fav character" 
                value= {inputValue}
                onChange={handleInput}/>
                {inputValue !== "" && <CleanSearch cleanInput={cleanInput}/>}
            </div>
            <div>
                <label htmlFor="house-select">Elige una casa</label>
                <select id="house-select" 
                onChange={handleSelect} 
                value={selectValue} 
                multiple={false}>
                    <option value="todas">--todas las casas--</option>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>

                </select>
            </div>
            </Fragment>
        );
    }
}

Search.propTypes ={
    handleInput: PropTypes.func.isRequired
}
export default Search;