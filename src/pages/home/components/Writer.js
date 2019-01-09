import React, { Component }  from 'react';

import { connect }  from 'react-redux';

import { actionCreators }  from '../store';

import { 
	WriterWrap,
	WriteList,
	Desc
} from  '../style';

class Writer  extends  Component{

	componentDidMount(){
		this.props.initWriter();
	}
	foramtNumberK(num){
		return  (num / 1000).toFixed(1) + 'k';
	}
	render(){
		const { writerList } = this.props;
		return (
			<WriterWrap>			
				{
					writerList.map( (item,index)=>{
							return	(
								<WriteList key={item.get('id')}>
									<img   alt="" src={item.get('avatar_source')}  />
									<p><span  className="left">{item.get('nickname')}</span><span className="right attention" >+关注</span></p>
									<Desc>写了{ this.foramtNumberK( item.get('total_wordage') )}字 · {this.foramtNumberK( item.get('total_likes_count') )}喜欢</Desc>
								</WriteList>
							)
						}
					)				
				}
				
			</WriterWrap>			
		);
	}
}

const mapState = (state)=>({
	writerList: state.getIn(['home','writerList'])
})

const mapDispath = (dispatch)=>({
	initWriter(){
		dispatch( actionCreators.actionInitWriter() );
	}
})

export default connect(mapState, mapDispath)(Writer);