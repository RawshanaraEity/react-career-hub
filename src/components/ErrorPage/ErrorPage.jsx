import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Oop!!!</h2>
            <Link to='/'>Go back home</Link>
        </div>
    );
};

export default ErrorPage;