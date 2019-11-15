import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAuthentication} from "../../stores/actions/actions";
import {Link} from "react-router-dom";

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
        return (!this.state.isAuth ? <>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inscription</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" onClick={this.handleLogged}>Login</a>
                    </li>
                </> :
                <li className="nav-item">
                    <a className="nav-link" onClick={this.handleLogged}>
                        Logout
                    </a>
                </li>
        )
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/products">Home</Link>
                            </li>
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