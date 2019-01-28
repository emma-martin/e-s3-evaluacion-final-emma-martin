import React, { Component } from 'react';


class SelectHouse extends Component {

    render() { 
        const {handleSelect} = this.props;

        return (
            <div>
                <label htmlFor="house-select">Elige una casa</label>
                <select id="house-select" 
                onChange={handleSelect} 
                value='' 
                multiple={false}>
                    <option value="null">--todas las casas--</option>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>

                </select>
            </div>
            );
        }
    
}

// test

export default SelectHouse;