import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthentication} from "../../stores/actions/actions";
import {NavLink} from "react-router-dom";

class NavBar extends Component {

    state={
        isAuth: false
    }

    handleLogged = () => {
        return this.setState(
            {
                ...this.state,
                isAuth: !this.state.isAuth
            }
        )
    }
    renderLinkAuth = () => {
        return (!this.props.isAuth ? <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Inscription</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" activeClassName="active" exact>Login</NavLink>
                    </li>
                </> :
                <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">
                        Logout
                    </NavLink>
                </li>
        )
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" exact activeClassName={"active"}>
                                    Home
                                </NavLink>
                            </li>

                            {this.props.isAuth && <li className="nav-item">
                                <NavLink className="nav-link" to="/products"  exact activeClassName={"active"}>
                                    Products
                                </NavLink>
                            </li> }


                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {this.renderLinkAuth()}
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.rootAuthReducer
    }
}

const mapDispatchToProps = {
    setAuthentication
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);