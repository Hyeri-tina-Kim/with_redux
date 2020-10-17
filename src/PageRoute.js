import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';

const PageRoute = ({ title, role, component: Component, ...option }) => {
    return (
        <Route
            {...option}
            render={props => <><Header/><Component {...props}/></>}
        />
    )
}

export default PageRoute;