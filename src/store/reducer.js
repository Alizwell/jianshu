import { combineReducers }  from 'redux-immutable';

import  *  as headerReducer  from  '../common/header/store';


const reducer = combineReducers(		
	{
		header: headerReducer.reducer
	}	
);


export default reducer;