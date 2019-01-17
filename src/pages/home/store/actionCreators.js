import axios  from 'axios';
import  { actionTypes }  from  '../store';

const actionSetList = (data)=>({
	type: actionTypes.ACTION_SET_LIST,
	data
});


const actionSetWriter = (data)=>({
	type: actionTypes.ACTION_SET_WRITE,
	data 
}); 


export const  actionInitList = ()=>{
	return (dispatch)=>{		
		axios.get('./api/homeList.json')
		.then((res)=>{			
			if(res.status === 200 ){
				let data = res.data;				
				dispatch( actionSetList(data) );				
			}			
		})
		.catch(err=>{
			console.log(err);
		})
	}
}


export const actionInitWriter = ()=>{
	return (dispatch)=>{
		axios.get('/api/writerList.json')
		.then((res)=>{						
			if(res.status === 200 && res.data ){
				let data = res.data.users;							
				dispatch( actionSetWriter(data) );				
			}			
		})
		.catch(err=>{
			console.log(err);
		})
	}
}