import React, { Component } from 'react'
import { connect } from "react-redux"
import {logoutFetch} from "../../stores/actions/actions";

class LogoutContainer extends Component
{
    constructor(props)
    {
        super(props)
        this.props.logoutFetch()
        this.props.history.push("/")
    }

    render() {

        return (
            <>
                <h1>Logout Page</h1>
            </ >
        )
    }
}

const mapDispatchToProps = {
    logoutFetch
}

export default connect(null, mapDispatchToProps)(LogoutContainer);