import authAPI from '../services/authAPI'
import {logoutFetch}  from '../stores/actions/actions'


export const tokenValid = (store) => (next) => (action) => {
// si oui je lance un venement de deconnexion
    if(!authAPI.isAuthenticated() && store.getState().rootAuthReducer.isAuth){
        store.dispatch(logoutFetch())
    }

    next(action)
}