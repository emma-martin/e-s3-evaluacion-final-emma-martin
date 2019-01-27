import React, { Component } from 'react';

class CleanSearch extends Component {
    render() { 
        const {cleanInput} = this.props;
        return ( 
            <button className="btn--home" onClick={cleanInput}>
                Borra tu búsqueda
            </button>
        );
    }
}

export default CleanSearch;