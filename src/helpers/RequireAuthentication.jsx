import React, {Component} from 'react';
import { connect } from 'react-redux'


export default function (ChildComponent) {

    class RequireAuthentication extends Component {

        componentDidMount() {
            if(!this.props.isAuth){
                this.props.history.push('/')
            }
        }


        componentDidUpdate(nextProps, nextState, nextContext) {
            if(!nextProps.isAuth){
                this.props.history.push('/')
            }
        }

        render() {
            return <ChildComponent {...this.props}/>
        }
    }

    const mapStateToProps = store => {
        return {
            isAuth: store.rootAuthReducer.isAuth
        }
    }

    return connect(mapStateToProps)(RequireAuthentication)
}
