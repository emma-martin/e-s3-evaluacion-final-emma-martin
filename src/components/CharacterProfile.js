import React, { Component } from 'react';

class CharacterProfile extends Component {
    render() { 
        const {results} = this.props;
        const {idProfile} = this.props;
        if(results.length === 0){
            return <p>Loading</p>
        } else {
            const profileChosen = results[idProfile];
            console.log(profileChosen);
            const name = profileChosen.name;
            console.log(name);
            const image = profileChosen.image;
            const patronus = profileChosen.patronus;
            const house = profileChosen.house;
            return ( 
                <React.Fragment>
                    <img alt={name} src={image} />
                    <h2>{name}</h2>
                    <p>Casa: {house}</p>
                    <p>Patronus: {patronus}</p>
                </React.Fragment>
                );
        }
    }
}


            
// if(results.alive === true){
//     return <span>ALIVE</span>
// } else {
//     return <span role="img" aria-label="dead">💀</span>
// }



export default CharacterProfile;