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
	SearchContent,
	SearchContentTitle,
	SearchSwitch,
	SearchList,
	ListItem,
	BtnWrap,
	Button,
	Font
}  from './style';

class Header extends Component{

	render(){
		const { list, index, pageSize, switchSearch, handleSearchMouseEnter, handleSearchMouseLeave  } = this.props;

		const SearchListData = ()=>{
			return (
				<SearchList>
					{
						list.slice( index * pageSize, (index + 1) * pageSize  ).map((val, keyIndex)=>{
							return <ListItem  key={keyIndex}>{val}</ListItem>
						})
					}
				</SearchList>
			);
		}


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
							{  (this.props.mouseIn  ||  this.props.focused) && 
								<SearchContent  onMouseEnter ={ handleSearchMouseEnter }  onMouseLeave={ handleSearchMouseLeave }>							
									<SearchContentTitle>
										热门搜索
										<SearchSwitch  onClick={ switchSearch }>
											换一批
										</SearchSwitch>									
										{ SearchListData() }
									</SearchContentTitle>
								</SearchContent>
							}							
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
		focused: state.getIn(['header','focused']),
		list: state.get('header').get('list'),
		index: state.get('header').get('index'),
		pageSize: state.get('header').get('pageSize'),
		total: state.get('header').get('total'),
		mouseIn: state.get('header').get('mouseIn')
	}
}


const mapDispatchToProps = (dispatch)=>{
	return {
		handleFocus(){
			dispatch( actionCreators.actionGetList() );
			dispatch( actionCreators.actionSearchFocus() );
		},
		handleSearchMouseEnter(){
			dispatch( actionCreators.actionMouseEnter() );
		},
		handleSearchMouseLeave(){
			dispatch( actionCreators.actionMouseLeave() );
		},
		handleBlur(){
			dispatch(actionCreators.actionSearchBlur());	
		},
		switchSearch(){
			dispatch(actionCreators.actionSwitchSearch() );
		}
	}
}


export default  connect(mapStateToProps, mapDispatchToProps)(Header);
