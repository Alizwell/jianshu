import *  as  actionTypes  from './actionTypes';
import { fromJS }  from 'immutable';

const defaultState = fromJS({
	focused: false,
	list: ["vue","react","typescript"]
})


export default (state = defaultState,  action)=>{
	switch(action.type){
		case actionTypes.SEARCH_FOCUS: 
			return  state.set('focused', true);
		case actionTypes.SEARCH_BLUR:
			return  state.set('focused', false);
		case actionTypes.SET_SEARCH_LIST:
			return  state.set('list', fromJS(action.data));				
		default:
			return state;	

	}
}