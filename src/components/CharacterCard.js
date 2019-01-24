import React, { Component } from 'react';
import PropTypes from 'prop-types';
class CharacterCard extends Component {

    render() {
        const {results} = this.props;
        const id = this.props.match.params.id;
        const mago = results[id]
        if (results.length === 0) {
            return <p>Loading</p>
        }
        else {
            console.log(id);
            console.log(mago.name);
            const name = mago.name;
            const house = mago.house;
            const image = mago.image;
            const dob = mago.dateOfBirth;
            const patronus = mago.patronus;
            const alive = mago.alive;

            return (
                <div className="list__item-card">
                    <img className="list__item-img" alt={name} src={image} />
                    <h2>{name}</h2>
                    <h3>{house}</h3>
                    <h3>{dob}</h3>
                    <h3>{patronus}</h3>
                    <h3>{alive}</h3>
                </div>
            );
        }
        
        
    }
}
// CharacterCard.propTypes ={
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     house: PropTypes.string.isRequired
// }
export default CharacterCard;