import styled from 'styled-components';


export const HomeWraper = styled.div`
	width: 960px;
	margin: 20px auto  0;
	overflow: hidden;
	zoom: 1;
`;


export const HomeLeft = styled.div`
	float: left;
	width: 640px;
`;

export const HomeRight = styled.div`
	float: right;
	width: 280px;
`;

export const BannerImg = styled.a`
	width: 625px;
	display: block;
	padding-bottom: 30px;
	border-bottom: 1px solid #ccc;
	img{
		height: 270px;
		width: 625px;
		border-radius: 5px;
	}
`;


export const ListItem = styled.div`
	padding: 20px 2px;
	border-bottom: 1px solid #ccc;
	color: #333;
	h1{
		font-size: 18px;
		line-height: 1.5;
		font-weight: 700;
		margin-bottom: 4px;
	}
	.content{
		font-size: 13px;
		color: #999;
		line-height: 24px;
		margin: 0 0 8px;
	}

	.meta{
		font-size: 12px;
		color: #b4b4b4;
		line-height: 20px;
		font-weight: 400;
	}
`;



export const MediumItem = styled.div`
	width: 280px;	
	min-height: 50px;
	img{
		width: 100%;
		height: 50px;
		border-radius: 3px;
	}
	margin: 0 0 5px;
`;


export const WriterWrap = styled.ul`
	list-style:none;
	margin: 0;
	padding: 0;
`;


export  const  WriteList = styled.li`
	overflow: hidden;
	display: inline-block;
	width: 280px;
	margin-top: 15px;
	font-size: 14px;
	img{
		float: left;
		border-radius: 50%;
		width: 48px;
		height: auto;
		border: 1px solid #ddd;
	}
	p{	
		overflow: hidden;
		zoom: 1;
		line-height: 2em;
		padding-left: 10px;
	}
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.attention{
		font-size: 13px
		color: #42c02e;
	}
`;

export const Desc = styled.p`
	font-size: 12px;
    color: #969696;
`;