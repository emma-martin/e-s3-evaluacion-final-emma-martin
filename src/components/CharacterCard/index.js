import React, { Component } from 'react';
import ReturnBtn from '../ReturnBtn/';
import Loader from '../Loader/';
import './CharacterCard.scss'
import PropTypes from 'prop-types'; 
// can't set proptypes 'cause asyncrony
class CharacterCard extends Component {
    render() {
        const {results} = this.props;
        const {loading} = this.props;
        const id = this.props.match.params.id;
        const mago = results[id]
        if (results.length === 0 || loading) {
            return <Loader />
        }
        else {
            const name = mago.name;
            const house = mago.house;
            const image = mago.image;
            const date = mago.dateOfBirth;
            const dob = date.slice(-4);
            const patronus = mago.patronus;
            const alive = mago.alive;
            const deadOrAlive =() =>
            (alive === true) ?<span className="card__div--span">VIVO</span>:<span className="card__div--span" role="img" aria-label="dead">💀</span>
            return (
                <div className="card">
                    <div className="card__div">
                        <img className="card__div-img" alt={name} src={image} />
                        <div>
                        <h2 className="card__div--name">{name}</h2>
                            <div className="card__div--text">
                                <p>Casa: {house || "Sin casa"}</p>
                                <p>Nacimiento: {dob || "desconocido"}</p>
                                <p>Patronus: {patronus || "sin patronus"}</p>
                                <p>Estado: {deadOrAlive()}</p>
                            </div>
                        </div>
                    </div>
                    <ReturnBtn />
                </div>
            );
        }
    }
}

CharacterCard.propTypes ={
    results: PropTypes.array.isRequired,
    loading: PropTypes.bool
}
export default CharacterCard;