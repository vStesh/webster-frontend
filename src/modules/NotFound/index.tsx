import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return(
        <>
        <h1>NotFound</h1>
        <Link to="/">back home</Link>
        </>
    )
}

export default NotFound;
