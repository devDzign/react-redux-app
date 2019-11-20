import React, { Component } from 'react'
import { connect } from "react-redux"
import {logoutFetch} from "../../stores/actions/actions";
import {Redirect} from "react-router";

class LogoutContainer extends Component
{
    constructor(props)
    {
        super(props)
        this.props.logoutFetch()

    }

    render() {

        return (
            <>
                <Redirect to="/" />
            </ >
        )
    }
}

const mapDispatchToProps = {
    logoutFetch
}

export default connect(null, mapDispatchToProps)(LogoutContainer);