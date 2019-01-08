import React, { Component }  from 'react';

import  { connect } from 'react-redux';

import { actionCreators }  from '../store';

import {
	ListItem
}	from '../style';

class List  extends  Component{
	componentDidMount(){
		this.props.initList();
	}
	render(){
		const { list } = this.props;
		return (
			<div>
				{
					list.map( (item, index)=>(						
						<ListItem  key={index}>
						 	<h1>{item.get('title')}</h1>
						 	<p  className="content">{item.get('content')}</p>
							<p className="meta"><span>{item.get('author')}</span></p>	 	
						</ListItem>						
					))
				}
				
			</div>
		);
	}
}

const mapState = (state)=>({
	list: state.getIn(['home', 'list'])
});

const mapDispatch = (dispatch)=>({
	initList(){	
		dispatch( actionCreators.actionInitList() )		
	}
})



export default connect(mapState, mapDispatch)(List);