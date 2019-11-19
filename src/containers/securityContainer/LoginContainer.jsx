import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux"
import {loginFetch} from "../../stores/actions/actions";
import RenderField from "../../components/form/renderField";


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

                        <Field
                            name={FIELDS.username}
                            label="Username"
                            component={RenderField}
                            type="text"
                            className="form-control"
                        />

                </div>

                <div className="row justify-content-md-center">
                        <Field
                            name={FIELDS.password}
                            label="Password"
                            component={RenderField}
                            type="password"
                            className="form-control"

                        />
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