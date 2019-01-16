import axios  from 'axios';
import  { actionTypes }  from  '../store';

const setDetail = ( {title, content} )=>({
	type: actionTypes.ACTION_SET_DETAIL,
	title,
	content
});


export const getDetailData = (id)=>(
	(dispatch) =>{
		axios.get(`/api/detail.json?id=${id}`)
		.then( res =>{			
			dispatch( setDetail(res.data.result) );
		})
		.catch( err=>{
			console.log(err);
		})
	}
)