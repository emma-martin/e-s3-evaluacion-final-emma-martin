import React, { Component } from "react";
import PropTypes from 'prop-types';
class CharacterCard extends Component {
    render() {
        const {name, image, house} = this.props;

    return (
        <div className="list__item-card">
            <img className="list__item-img" alt={name} src={image} />
            <h2>{name}</h2>
            <h3>{house}</h3>
        </div>
    );
    }
}


CharacterCard.propTypes ={
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired
}


export default CharacterCard;
