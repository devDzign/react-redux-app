import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import RequireAuthentication from '../helpers/RequireAuthentication'
import ProductsContainer from "./productsContainers/ProductsContainer";
import NavBar from "./headers/NavBar";
import HomePage from "./HomePage/HomePage";


class App extends Component {
    render() {
        return (
                <>
                    <NavBar/>
                    <div className="container mt-5">
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/products" component={ProductsContainer}/>
                            <Route render={()=> <h1>Not Found 404 </h1>}/>
                        </Switch>
                    </div>
                </>

        );
    }
}

export default App;