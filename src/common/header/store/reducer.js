import *  as  actionTypes  from './actionTypes';
import { fromJS, merge }  from 'immutable';

const defaultState = fromJS({
	focused: false,
	list: [],
	total: 0,
	index: 0,
	pageSize: 10,
	mouseIn: false
});


export default (state = defaultState,  action)=>{
	switch(action.type){
		case actionTypes.SEARCH_FOCUS: 
			return  state.set('focused', true);
		case actionTypes.SEARCH_BLUR:
			return  state.set('focused', false);
		case actionTypes.SET_SEARCH_LIST:			
			return merge( state,{
				list: fromJS(action.data),
				total: Math.ceil( action.data.length / state.get('pageSize') )
			})
		case actionTypes.SWITCH_SEARCH:
			let index = state.get('index');
			let newIndex = ( index + 1 ) %  state.get('total');
			return  state.set('index', newIndex );		
		case actionTypes.MOUSER_ENTER:
			return  state.set('mouseIn', true);
		case actionTypes.MOUSER_LEAVE:
			return  state.set('mouseIn', false);				
		default:
			return state;
	}
}