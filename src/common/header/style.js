import   styled , { createGlobalStyle } from  'styled-components'; 

import  logo  from './statics/logo.png';


export const NavBar = styled.nav`
	margin-bottom: 20px;
	height: 56px;
	border: 1px solid #f0f0f0;
`;

export  const Font = createGlobalStyle`
	@font-face {font-family: "iconfont";
	  src: url('./statics/iconfont.eot?t=1546764050402'); /* IE9 */
	  src: url('./statics/iconfont.eot?t=1546764050402#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAASUAAsAAAAACRwAAARIAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqFDIRMATYCJAMYCw4ABCAFhG0HWhsECBFVnG3JfhTGMbFQWG+4cqOo8vzt0URj34d8sM7+JZm1XKyA6Upf1g3AiTqpROlis/27filYDAkoFEqiUJ59117g2gkTNXkkvx15IFlIe73iy+WjHDg9pSbkhJzQ++F+pou0zYb57NtcsoOCxuMBDSzjIq2IAuT4QPSW4VWHuAN4GAhAES84g0THJgsgj4K+iQBIfU1VCeQTBlQJlWCpJ3CSQxZCBotO0esAFng/Tz7Ck8gDRTPoO9MrY8oR/sbuy2vGS3nkOygI+7MBYM8BAzgD4ID0g45OsCDhDIYt/wUOXwDKWBioN3Zv9r558S7jy2vpPwmJ7iG4GQngMPr7x2sgsiAKZYxPlsvsoNBCgIM3exGg8OYFAgzeZSBA4MtrA2SwRrbHVlXABSBOGG/9gRTBQKM0NOR0lT20OCKnrElkugTnHuD+fQERCMmjR2LJQ5Eonsc/yBCffyjsQ195pQpToU0XHpGHD0Xw/AcPhDOPgoS7Zi5IHBslXgUejt2/XzItSsx/SCSPslbMLOO1b98HxCvhyfOmBUu3r16j90hpRsjaHvCCPt72fun08tV6eSv0ylYsW7ZKO3updvHSPIFYLFDkd+2R7N7Zpzq9W7JHSW1mF7+zMazVE6/Qq1oxoyPs9vblS7UNRQJxlejP2becF25tEXTi6NEJGj6kfyn8HPf3L3cuL2rTn/fEsLRWFvyJ1VCxQcazvXf+Npf1wXTd7Vtr2Tp265b9grW3bq+jwfXWX168gIumM+EkI+zQITpMRxjZCMPFNDbChl8OaXBepmWaRW+vRZplZp44bP35Lu0v2pXx/jOpbMerVzsoKcNGtiNaWJTluMRmOHO00K0utwWtr88iVXrc9Fqk9fXGb5lpGXhF8YV67G5d60id3W3fr6nH7dLxDrOzjhk3nzjRbN1nyRJTjdsXLS/ehg/PDqrgARVn7+CUqrax7jqDyuXLJ/UnJyZsbvCKqoUhdd1qdQ2qvb0F+QgGAEgvMZ5KPcZJdpnFc6l151k4ALBO+v//+R0XzT9dLVIL/i2vxAGAx+LXmqRBynM4eOAnUKot/FuENQc4RawbZTmpv9UCApDF7w7HKEDRGIN/xKOJl32pdGqXAgQL9wgoTjyBYeGN5vAeZ2hKvGGSFwabk7vzV1rIIVIX8PGFgFD3DZSqC8Co+0Fz+F+QoesPZKnnEBSJcnFDJbbx4opQMhpQW/C6ZGuaWfjl9+iWUVJc7NGfkWYfhr7p0uk7zEh97JlXbmC2YKkkuEWPwxgLVCoTam5G5rpoWwt9UqNL2hOiECQxZABlC3hakVlnMhOZ77+HnKVIopK+MuczRGZ+dtBrdDXQd4pcq+9c5s9WnAFjllpnkSIBt9iGopEoQIWXTZDGGmOLWLXQklG2rqIZX5Wu8hRs+lvMjBypdGZO3L/6fLLxcie9sDI7IyfvUMRuJMnsw3ziAL/ye3s=') format('woff2'),
	  url('./statics/iconfont.woff?t=1546764050402') format('woff'),
	  url('./statics/iconfont.ttf?t=1546764050402') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('./statics/iconfont.svg?t=1546764050402#iconfont') format('svg'); /* iOS 4.1- */
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
		cursor: auto;
	}
	&.right{
		float:right;
	}

	.slide-enter {
		transition: all .2s ease-out;
	}
	.slide-enter-active {
		width: 335px;
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
		width: 335px;		
	}
`;



export const SearchContent = styled.div`
	position: absolute;	
	width: 250px;	
	top: 100%;
	padding:20px  20px 10px;
	border-radius: 5px;
	background-color: #fff;	
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	&:before{
		position: absolute;
		display: inline-block;
		content: '';
		top: -7px;
		left: 40px;
		height: 13px;
		width: 13px;
		background-color: #fff;
		border: 1px solid rgba(0,0,0,.1);
		border-width:1px 0  0 1px;		
		transform: rotate(45deg);
	}
`;


export  const SearchContentTitle =styled.div`
	font-size: 15px;
	line-height: 20px;
`;

export  const SearchSwitch =styled.a`
	display:inline-block;
	float: right;
	font-size: 14px;
	cursor: pointer;
	.spin{
		display: block;
		float: left;
		transition: all .2s ease-in;
		transform: rotate(90deg);
		transform-origin: center center;
		margin-right: 2px;
		font-size: 12px;
	}
`;

export  const SearchList =styled.div`
	margin-top: 20px;	
`;
export  const ListItem =styled.a`
	display:inline-block;
	border: 1px solid #ccc;
	font-size: 14px;
	color: #777;
	border-radius: 3px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 10px;
	&:hover{
		background-color: #ccc;
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


export const GoTop = styled.div`
	position: fixed;
	bottom: 50px;
	right: 50px;
	width: 50px;
	height: 50px;
	line-height: 50px;
	border: 1px solid #dcdcdc;	
	text-align: center;
	font-size: 14px;
	background: #fff;
	cursor: pointer;
	&::before{
		content:'';
		height: 20px;
		width: 20px;
		font-weight: 400;		
		margin-top: 20px;
		line-height: 50px;
		display: inline-block;
		border: 1px solid #333;
		transition: all  .2s  ease-in;
		transform: rotate(45deg);
		transform-origin: center center;
		border-right: none;
		border-bottom: none;
	}
	&:hover{
		background-color: hsla(0,0%,71%,.1);
    	transition: .1s ease-in;
	}
`;

