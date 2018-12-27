import React, { Component } from  'react';

import  { connect }  from 'react-redux';

import { actionCreators }  from './store';

import { CSSTransition } from 'react-transition-group'

import {
	NavBar,
	HeaderWrap,
	Logo,
	Nav,
	NavItem,
	SearchItem,
	Glass,
	BtnWrap,
	Button,
	Font
}  from './style';

class Header extends Component{

	render(){
		return (
			<NavBar>
				<HeaderWrap>
					<Logo className="left"/>
					<BtnWrap className="right">
						<Button className="reg">注册</Button>
						<Button className="write"><i className="iconfont">&#xeee0;</i>写文章</Button>
					</BtnWrap>				
					<Nav>
						<NavItem className="index"><i className="iconfont">&#xe627;</i> 首页</NavItem>
						<NavItem className="down"><i className="iconfont">&#xe6ac;</i> 下载App</NavItem>
						<NavItem className="search">	
							<CSSTransition	
								in={this.props.focused}
								timeout={200}
								classNames="slide"
							>
								<SearchItem  
									className={ this.props.focused ? 'focused' : '' }
									onFocus={this.props.handleFocus}
									onBlur={this.props.handleBlur}
								/>
							</CSSTransition>
							<Glass className={ this.props.focused ? 'focused' : '' }><i className='iconfont'>&#xe6dd;</i></Glass>							
						</NavItem>
						<NavItem className="right">Aa</NavItem>
						<NavItem className="right">登录</NavItem>
					</Nav>
					<Font/>
				</HeaderWrap>
			</NavBar>
		)
	}
}

const mapStateToProps = (state)=>{
	return {		
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header','focused'])
	}
}


const mapDispatchToProps = (dispatch)=>{
	return {
		handleFocus(){
			dispatch(actionCreators.actionSearchFocus());			
		},
		handleBlur(){
			dispatch(actionCreators.actionSearchBlur());	
		}
	}
}


export default  connect(mapStateToProps, mapDispatchToProps)(Header);
