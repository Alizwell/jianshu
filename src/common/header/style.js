import   styled , { createGlobalStyle } from  'styled-components'; 

import  logo  from './statics/logo.png';


export const NavBar = styled.nav`
	margin-bottom: 20px;
	height: 56px;
	border: 1px solid #f0f0f0;
`;

export  const Font = createGlobalStyle`
	@font-face {font-family: "iconfont";
	  src: url('./statics/iconfont.eot?t=1545831223428'); /* IE9*/
	  src: url('./statics/iconfont.eot?t=1545831223428#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
	  url('./statics/iconfont.ttf?t=1545831223428') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
	  url('./statics/iconfont.svg?t=1545831223428#iconfont') format('svg'); /* iOS 4.1- */
	}

	.iconfont {
	  font-family:"iconfont" !important;
	  font-size:16px;
	  font-style:normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
`;



export const HeaderWrap =  styled.header`
	max-width:1440px;
	min-width:768px;
	margin:0 auto;
	box-sizing: border-box;
	height: 56px;
	line-height: 56px;	
	& > .left{
		float:left;
	}
	& > .right{
		float:right;
	}
`;


export const Logo =  styled.a.attrs({href:'./'})`
	width: 100px;	
	height: 56px;		
	background-image: url(${logo});
	background-size:contain;
`;

export const Nav =  styled.ul`
	width: 960px;
	height: 56px;
	font-size: 0;
	margin-left: auto;
	margin-right:auto;
	vertical-align: top;		
	padding-left:15px;
	padding-right: 15px;
	&.left {
		float:left;
	}
	&.right{
		float:right;
	}		
`;

export const NavItem =  styled.li`	
	height: 56px;	
	list-style:none;
	display:inline-block;	
	font-size:17px;
	margin: 0 20px;
	color: #969696;
	cursor:pointer;
	&.index{
		color: #ea6f5a;
	}
	&.down{
		color: #333;
		width:100px;
		text-align:center;		
	}
	&.down:hover{
		background-color:#f5f5f5;
	}
	&.search{
		position: relative;
		line-height: 52px;
	}
	&.right{
		float:right;
	}

	.slide-enter {
		transition: all .2s ease-out;
	}
	.slide-enter-active {
		width: 240px;
	}
	.slide-exit {
		transition: all .2s ease-out;
	}
	.slide-exit-active {
		width: 160px;
	}

`;

export const SearchItem = styled.input.attrs({
	placeholder:'搜索'
})`
	height: 38px;
	line-height: 38px;
	font-size: 15px;
	background-color: #eee;
	border-radius:40px;
	width:160px;
	

	outline:none;
	border:none;
	text-indent: 15px;
	&::placeholder{
		font-size:14px;
		color:#ccc;
	}
	&.focused{
		width: 240px;		
	}
`;

export const Glass = styled.div`
	display:inline-block;
	width: 30px;
	height: 30px;	
	position: absolute;
	right: 5px;
	top: 0;
	bottom: 0;
	border-radius: 15px;
	text-align:center;
	line-height: 30px;
	margin:auto 0;
	&.focused{
		color:#fff;
		background-color:#888;
	}
`;

export const BtnWrap =  styled.div`	
	height: 56px;	
	float:right;
	display:inline-block;

`;

export const Button =  styled.div`
	height: 36px;
	line-height: 36px;
	display:inline-block;
	font-size: 15px;
	padding: 0 20px;
	cursor: pointer;
	border-radius: 18px;	
	border: 1px solid rgba(236, 97, 73, 0.7);
	&.reg{
		margin-right:20px;
		color: #ea6f5a;
	}
	&.write{
		margin-right:15px;
		background-color:#ea6f5a;
		color:#fff;
	}
`;
