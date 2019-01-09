import React, { Component }  from 'react';

import { connect }  from 'react-redux';

import { MediumItem } from '../style';

class Medium  extends  Component{
	render(){
		const { medium }  = this.props;
		return (
			<div>
				{
					medium.map((item, index)=>(
							<MediumItem  key={index}>
								<img   alt=""  src={item} />
							</MediumItem>								
						)
					)
				}
								
			</div>
		);
	}
}

const mapState = (state)=>({
	medium: state.getIn(['home','medium'])
})


export default  connect(mapState ,null)(Medium);


