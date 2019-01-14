import *  as  actionTypes  from './actionTypes';

import  axios  from 'axios';

const setSearchList = (data)=>({
	type: actionTypes.SET_SEARCH_LIST,
	data
});


export const actionSearchFocus = ()=>({
	type: actionTypes.SEARCH_FOCUS
})

export const actionSearchBlur = ()=>({
	type: actionTypes.SEARCH_BLUR
})


export const actionGetList = ()=>{
	return (dispatch)=>{
		axios.get('./api/list.json')
		.then((res)=>{
			if(res.status === 200 && res.data.success){
				let data = res.data.data;				
				dispatch( setSearchList(data) );				
			}			
		})
		.catch(err=>{
			console.log(err);
		})
	}
}


export const actionSwitchSearch = ()=>({
	type: actionTypes.SWITCH_SEARCH
})


export const actionMouseEnter = ()=>({
	type: actionTypes.MOUSER_ENTER
})

export const actionMouseLeave = ()=>({
	type: actionTypes.MOUSER_LEAVE
})

export const toggleScroll =(scroll)=>({
	type: actionTypes.TOGGLE_SCROLL,
	scroll
})