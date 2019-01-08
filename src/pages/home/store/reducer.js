import  { actionTypes }  from  '../store';
import { fromJS }  from 'immutable';


const defaultState = fromJS({
	list:[]
});


export default (state = defaultState,  action)=>{
	switch( action.type ){
		case  actionTypes.ACTION_SET_LIST:
			return state.set('list', fromJS(action.data) )
		default:
			return state;	
	}
}