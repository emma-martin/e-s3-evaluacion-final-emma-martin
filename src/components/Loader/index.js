import React, { Component } from 'react';
import './Loader.scss';

class Loader extends Component {

    render() { 
        return (
            <React.Fragment>
            <div className="spinner">
                <span className="spinner-inner-1"></span>
                <span className="spinner-inner-2"></span>
                <span className="spinner-inner-3"></span>
            </div>
            </React.Fragment>
        );
    }
}

export default Loader;