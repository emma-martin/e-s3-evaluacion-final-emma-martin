import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
class CharacterList extends Component {
    render() {
        const {filteredResults} = this.props;
        return (
            <ul className="list">
                {filteredResults.map(item => {
                    return (
                        <li className="list__item" id={item.id} key={item.id}>
                        <Link className="blablabla" to={`/charactercard/${item.id}`}>
                        <div className="list__item-card">
                            <img className="list__item-img" alt={item.name} src={item.image} />
                            <h2>{item.name}</h2>
                            <h3>{item.house}</h3>
                        </div>
                        </Link>
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