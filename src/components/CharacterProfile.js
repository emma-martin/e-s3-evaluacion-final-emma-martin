import React, { Component } from 'react';

class CharacterProfile extends Component {

    render() { 
        const {results} = this.props;
        return ( 
            <div>
                {results.map(item =>{
                    
                    return (
                        <React.Fragment>
                            <img alt={item.name} src={item.image} />
                            <h2>{item.name}</h2>
                            <p>Casa: {item.house}</p>
                            <p>Patronus: {item.patronus}</p>
                        </React.Fragment>

                    );
                })}
            </div>
        );
    }
}

export default CharacterProfile;