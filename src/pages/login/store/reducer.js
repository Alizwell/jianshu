import  { actionTypes }  from  '../store';

import { fromJS, merge }  from 'immutable';


const defaultState = fromJS({
	a:"123"
});


export default (state = defaultState,  action)=>{
	switch( action.type ){		
		case actionTypes.ACTION_TOGGLE_HEADER:
			return  
		default:
			return state;	
	}
}