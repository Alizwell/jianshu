import { createStore, compose , combineReducers  }  from 'redux';


import  *  as headerReducer  from  '../common/header/store';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers(		
		{
			header: headerReducer.reducer
		}	
	);


const store = createStore(reducer, composeEnhancers());


export default store;