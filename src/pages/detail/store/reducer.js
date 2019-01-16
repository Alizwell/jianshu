import  { actionTypes }  from  '../store';
import { fromJS, merge }  from 'immutable';


const defaultState = fromJS({
	title:'',
	content: ""
});


export default (state = defaultState,  action)=>{
	switch( action.type ){	
		case actionTypes.ACTION_SET_DETAIL:				
			return state.merge({
				title: action.title,
				content: action.content
			})					
		default:
			return state;	
	}
}