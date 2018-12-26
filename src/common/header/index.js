import React, { Component } from  'react';

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
	constructor(props){
		super(props);
		this.state = {
			focused: false
		};
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleFocus(){
		this.setState({
			focused: true
		})
	}

	handleBlur(){
		this.setState({
			focused: false	
		})
	}

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
								in={this.state.focused}
								timeout={200}
								classNames="slide"
							>
								<SearchItem  
									className={ this.state.focused ? 'focused' : '' }
									onFocus={this.handleFocus}
									onBlur={this.handleBlur}
								/>
							</CSSTransition>
							<Glass className={ this.state.focused ? 'focused' : '' }><i className='iconfont'>&#xe6dd;</i></Glass>							
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

export default Header;
