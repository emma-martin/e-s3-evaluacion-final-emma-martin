import React, { Component } from 'react';
import CharacterList from './CharacterList';


class SelectHouse extends Component {

    render() { 
        const {handleSelect, selectValue} = this.props;
        if(selectValue === null){
            return <CharacterList 
            filteredResults={this.props.filteredResults} 
            loading={this.props.loading}
            filteredHouses={this.props.filteredHouses}
            />
        } else {
        return (
            <div>
                <label htmlFor="house-select">Elige una casa</label>
                <select id="house-select" onChange={handleSelect} value={selectValue} multiple={false}>
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
}

// test

export default SelectHouse;