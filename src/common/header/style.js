import   styled  from  'styled-components'; 

export const HeaderWrap =  styled.header`
	height: 56px;
	line-height: 56px;
	border-bottom: 1px solid rgba(51,51,51,.2);		
`;


export const Logo =  styled.div`
	width: 100px;	
	background:green;
	display:inline-block;
`;

export const Nav =  styled.div`
	width: 930px;
	height: 56px;	
	display: inline-block;	
	&.left {
		float:left;
	}
	&.right{
		float:right;
	}	
`;

export const NavItem =  styled.div`	
	height: 56px;	
	display:inline-block;
	padding: 0 20px;
	color: #969696;
	&.index{
		color: #ea6f5a;
	}
	&.down{
		color: #333;
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
	border-radius: 18px;
	border: 1px solid rgba(236, 97, 73, 0.7);
	&.reg{
		margin-right:20px;
	}
	&.write{
		margin-right:15px;
	}
`;
