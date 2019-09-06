import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'

function _applyMiddleware () {
    const middlware = [
        
    ];
    
    return applyMiddleware (...middlware);
}

export default function configureStore(instalState) {
    const store = compose (
        _applyMiddleware ()
    ) (createStore) (rootReducer, initialState);
        
    return store;
}

