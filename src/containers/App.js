import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import RequireAuthentication from '../helpers/RequireAuthentication'
import ProductsContainer from "./productsContainers/ProductsContainer";
import NavBar from "./headers/NavBar";


class App extends Component {
    render() {
        return (
                <>
                    <NavBar/>
                    <div className="container mt-5">
                        <Switch>
                            <Route exact path="/products" component={ProductsContainer}/>
                        </Switch>
                    </div>
                </>

        );
    }
}

export default App;