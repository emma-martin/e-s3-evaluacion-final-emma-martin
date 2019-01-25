import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

class ReturnBtn extends Component {
    render() { 
        return (
            <Fragment>
            <Link to="/">
            <button>volver</button>
            </Link>
            </Fragment> 
        );
    }
}

export default ReturnBtn;