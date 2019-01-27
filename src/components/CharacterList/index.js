import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import NoResults from '../NoResults';
import './CharacterList.scss'
import Loader from '../Loader';
class CharacterList extends Component {
    render() {
        const {filteredResults, loading} = this.props;
        if(filteredResults.length > 1 && loading === true){
            return <Loader />
            
        } else if(filteredResults.length < 1 && loading === false){
            return <NoResults />
        } else {
            return (
                <ul className="main-list">
                    {filteredResults.map(item => {
                        return (
                            <li className="main-list__item" id={item.id} key={item.id}>
                            <Link className="main-list__link" to={`/charactercard/${item.id}`}>
                            <div className="main-list__item-card">
                                <img className="main-list__item-img" alt={item.name} src={item.image} />
                                <h2 className="main-list__item-name">{item.name}</h2>
                                <h3 className="main-list__item-house">{item.house || "sin casa"}</h3>
                            </div>
                            </Link>
                            </li>
                        )
                    })}
                </ul>
            );
        }
    }
}



CharacterList.propTypes ={
    filteredResults: PropTypes.array
}
export default CharacterList;