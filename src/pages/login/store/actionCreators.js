import axios  from 'axios';
import  { actionTypes }  from  '../store';


export const actionToggleHeader = (status)=>({
	type: actionTypes.ACTION_TOGGLE_HEADER,
	status
})