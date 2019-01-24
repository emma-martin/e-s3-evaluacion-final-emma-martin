import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
class CharacterList extends Component {
    render() {
        const {filteredResults} = this.props;
        return (
            <ul className="list">
                {filteredResults.map(item => {
                    return (
                        <li className="list__item" id={item.id} key={item.id}>
                            <CharacterCard 
                            itemId = {item.id}
                            name={item.name}
                            image={item.image}
                            house = {item.house}
                            />
                        </li>
                    )
                })}
            </ul>
        );
    }
}
CharacterList.propTypes ={
    filteredResults: PropTypes.array
}
export default CharacterList;