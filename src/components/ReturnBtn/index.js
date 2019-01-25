import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import './ReturnBtn.scss';

class ReturnBtn extends Component {
    render() { 
        return (
            <Fragment>
            <Link to="/">
            <button className="btn--home">volver</button>
            </Link>
            </Fragment> 
        );
    }
}

export default ReturnBtn;