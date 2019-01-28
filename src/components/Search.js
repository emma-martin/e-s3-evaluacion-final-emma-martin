import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import CleanSearch from './CleanSearch';
import SelectHouse from './SelectHouse';

class Search extends Component {
    render() {
        const {inputValue, cleanInput, handleInput, handleSelect, selectValue} = this.props;
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
                
                <SelectHouse 
                handleSelect={handleSelect}
                selectValue={selectValue} />
            </div>
            </Fragment>
        );
    }
}

Search.propTypes ={
    handleInput: PropTypes.func.isRequired
}
export default Search;