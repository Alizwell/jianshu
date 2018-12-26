import React, { Component } from  'react';

import {
	HeaderWrap,
	Logo,
	Nav,
	NavItem,
	BtnWrap,
	Button
}  from './style';

class Header extends Component{
	render(){
		return (
			<HeaderWrap>
				<Logo />				
				<Nav>
					<NavItem className="index">首页</NavItem>
					<NavItem className="down">下载App</NavItem>
					<NavItem >Aa</NavItem>
					<NavItem >登录</NavItem>
				</Nav>
				<BtnWrap>
					<Button className="reg">注册2</Button>
					<Button className="write">写文章</Button>
				</BtnWrap>
			</HeaderWrap>
		)
	}
}

export default Header;
