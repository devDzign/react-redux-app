import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import RequireAuthentication from '../helpers/RequireAuthentication'
import ProductsContainer from "./productsContainers/ProductsContainer";
import NavBar from "./headers/NavBar";
import HomePage from "./HomePage/HomePage";
import LoginContainer from "./securityContainer/LoginContainer";
import ProductContainer from "./productsContainers/ProductContainer";
import LogoutContainer from "./securityContainer/LogoutContainer";
import ProfileContainer from "./profile/ProfileContainer";


class App extends Component {
    render() {
        return (
                <>
                    <NavBar/>
                    <div className="container mt-5">
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/products" component={RequireAuthentication(ProductsContainer)}/>
                            <Route exact path="/products/:id" component={RequireAuthentication(ProductContainer)}/>
                            <Route exact path="/profile" component={RequireAuthentication(ProfileContainer)}/>
                            <Route exact path="/login" component={LoginContainer}/>
                            <Route exact path="/logout" component={LogoutContainer}/>
                            <Route render={()=> <h1>Not Found 404 </h1>}/>
                        </Switch>
                    </div>
                </>
        );
    }
}

export default App;