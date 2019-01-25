import React, { Fragment, Component } from 'react';
import ReturnBtn from './ReturnBtn';
// import PropTypes from 'prop-types'; can't set proptypes 'cause asyncrony
class CharacterCard extends Component {
    render() {
        const {results} = this.props;
        const id = this.props.match.params.id;
        const mago = results[id]
        if (results.length === 0) {
            return <p>Loading</p>
        }
        else {
            const name = mago.name;
            const house = mago.house;
            const image = mago.image;
            const date = mago.dateOfBirth;
            const dob = date.slice(-4);
            const patronus = mago.patronus;
            const alive = mago.alive;
            const deadOrAlive =() =>{if(alive === true){
                return <span>VIVO</span>
            }else{
                return <span role="img" aria-label="dead">💀</span>
            }}
            return (
                <Fragment>
                    <div className="list__item-card">
                        <img className="list__item-img" alt={name} src={image} />
                        <h2>{name}</h2>
                        <h3>Casa: {house}</h3>
                        <h3>Nacimiento: {dob}</h3>
                        <h3>Patronus: {patronus}</h3>
                        <h3>Estado: {deadOrAlive()}</h3>
                    </div>
                    <ReturnBtn />
                </Fragment>
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