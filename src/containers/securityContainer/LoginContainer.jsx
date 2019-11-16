import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux"
import {loginFetch} from "../../stores/actions/actions";


const FIELDS = { username: "username", password: "password" }

class LoginContainer extends Component
{
    handleSubmit = (credentials) => {
        this.props.loginFetch(credentials, this.props.history)
    }

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="row justify-content-md-center">
                    <h1>Connexion</h1>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-4 form-group">

                        <label className="bmd-label-floating">Username</label>
                        <Field
                            name={FIELDS.username}
                            component="input"
                            type="text"
                            className="form-control"
                        />

                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-md-4 form-group">
                        <label className="bmd-label-floating">Mot de passe</label>

                        <Field
                            name={FIELDS.password}
                            component="input"
                            type="password"
                            className="form-control"

                        />

                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <button type="submit" className="btn btn-primary btn-raised" >Connexion</button>
                </div>
            </form >
        )
    }
}

const SigninForm = reduxForm({
    form: 'SigninForm',
    fields: Object.keys(FIELDS)
})(LoginContainer);


const mapDispatchToProps = {
    loginFetch
}




export default connect(null, mapDispatchToProps)(SigninForm);