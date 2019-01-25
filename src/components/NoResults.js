import React, { Component } from 'react';
class NoResults extends Component {

    render() { 
        return (
            <div>
                <p>No hemos encontrado resultados para tu búsqueda, pero...</p>
                <img src="https://media.giphy.com/media/kSjGBipdCXdHW/giphy.gif" alt="no results found"/>
            </div>
        );
        
    }
}

export default NoResults;