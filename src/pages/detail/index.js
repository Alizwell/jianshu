import React, { Component }  from 'react';

import { connect } from 'react-redux';

import { actionCreators }  from './store';

import { 
	DetailWrap,
	Content
} from './style';

class Detail  extends  Component{
	render(){
		const { title, content }  = this.props;
		return (
			<DetailWrap>
				<h1>{title}</h1>
				<Content dangerouslySetInnerHTML = {{ __html: content }}>				
				{/*
					<p>老王娶了隔壁家的姑娘给小王。小王子承父业搞运输，将爹的三马子换成了大卡车。</p>
					<p>小王媳妇连生三个女儿迫于计划生育做了绝育手术。</p>
					<p>小王出轨了。</p>
					<p>媳妇带老王、女儿等冲进了宾馆。 </p>
					<br/> 
					<p>一番纠缠后，老王吼道:“你个畜生不如的东西……”</p>
					<p>小王回敬:“爹，别以为你年轻时和咱们村‘狐狸精’的事我们都不知道……”</p>
				*/}
				</Content>
			</DetailWrap>
		);
	}
	componentDidMount(){
		let id = this.props.match.params.id;		
		this.props.getData(id);
	}
}

const mapState = (state)=>({
	title: state.getIn(['detail','title']),
	content: state.getIn(['detail','content'])
})

const mapDispatch = (dispatch)=>({
	getData(id){
		dispatch( actionCreators.getDetailData(id) )
	}
})

export default  connect(mapState, mapDispatch)( Detail ); 