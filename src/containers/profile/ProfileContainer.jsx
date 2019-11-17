import React, {Component} from 'react';
import {connect} from 'react-redux';
import Profile from "../../components/profile/Profile";



class ProfileContainer extends Component {


    
    loadingRender = () => {

        return <div className="col-12">no items</div>;

    }

    render() {

        return (
            <>
                <Profile />
            </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        ...state.rootProductReducer
    }
}

const mapDispatchToProps = {
    
}

export default connect(null, null)(ProfileContainer);

