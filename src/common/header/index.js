import React, { Component } from  'react';

import  { connect }  from 'react-redux';

import { actionCreators }  from './store';

import { CSSTransition } from 'react-transition-group';

import { boundce }  from '../../utils';

import { Link } from 'react-router-dom';

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
	Font,
	GoTop
}  from './style';

class Header extends Component{
	render(){
		const { 
				list, 
				index, 
				pageSize, 
				switchSearch, 
				handleSearchMouseEnter, 
				handleSearchMouseLeave, 
				goToTop,
				isScroll 
			} = this.props;

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
			<div>	
				<NavBar>
					<HeaderWrap>
						<Link to="/">
							<Logo className="left"/>
						</Link>
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
										onFocus={()=>this.props.handleFocus(list) }
										onBlur={this.props.handleBlur}
									/>
								</CSSTransition>
								<Glass className={ this.props.focused ? 'focused' : '' }><i className='iconfont'>&#xe6dd;</i></Glass>
								{  (this.props.mouseIn  ||  this.props.focused) && 
									<SearchContent  onMouseEnter ={ handleSearchMouseEnter }  onMouseLeave={ handleSearchMouseLeave }>							
										<SearchContentTitle>
											热门搜索
											<SearchSwitch  onClick={ ()=>switchSearch(this.myRef) }  >
												<i   ref={ (icon)=>{  this.myRef = icon } }  className="iconfont  spin">&#xe851;</i>换一批
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
				{  isScroll ? <GoTop  onClick={ goToTop } /> : '' }				
			</div>
		)
	}

	componentDidMount(){
		window.onscroll =  boundce(this.props.handleScroll, 200); 		
	}
}

const mapStateToProps = (state)=>{
	return {				
		focused: state.getIn(['header','focused']),
		list: state.get('header').get('list'),
		index: state.get('header').get('index'),
		pageSize: state.get('header').get('pageSize'),
		total: state.get('header').get('total'),
		mouseIn: state.get('header').get('mouseIn'),
		isScroll: state.get('header').get('isScroll')
	}
}


const mapDispatchToProps = (dispatch)=>{
	return {
		handleFocus(list){			
			list.size === 0 && dispatch( actionCreators.actionGetList() );
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
		switchSearch(spin){			
			let originAngle = spin.style.transform.replace(/[^\d]/ig, '');
			//初始时originAngle为空
			originAngle = originAngle ?  parseInt(originAngle ,10) : 0;			
			originAngle += 360;			
			spin.style.transform = `rotate(${originAngle}deg)`;
			dispatch(actionCreators.actionSwitchSearch() );
		},
		goToTop(){
			document.getElementsByTagName('body')[0].scrollTo = 0;
			window.scrollTo(0, 0);
		},
		toggleScroll(scroll){
			dispatch( actionCreators.toggleScroll(scroll) );
		},
		handleScroll(){			
			if( document.documentElement.scrollTop > 300){
				dispatch( actionCreators.toggleScroll(true) );
			}else{
				dispatch( actionCreators.toggleScroll(false) );
			}			
		}
	}
}


export default  connect(mapStateToProps, mapDispatchToProps)(Header);
