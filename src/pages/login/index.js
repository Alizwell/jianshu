import  React, { Component }  from  'react';

import { connect } from 'react-redux';


import { actionCreators } from './store';

import  {  actionCreators as headerActionCreators }  from '../../common/header/store';

import {
	LoginWrap,
	LoginForm
} from './style';


class Login  extends Component{
	componentDidMount(){
		this.props.hideHeader();
	}
	render(){
		return (
			<LoginWrap>
					<LoginForm>
					</LoginForm>
			</LoginWrap>
		)
	}
}

const mapDispatch = (dispatch)=>({
	hideHeader(){
		dispatch( headerActionCreators.actionToggleHeader(false) );
	}
});


export default  connect(null, mapDispatch)(Login);

