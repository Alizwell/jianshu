import React, { Component }  from 'react';

import { BannerImg } from '../style';
class Banner  extends  Component{
	render(){
		return (
			<BannerImg>
				<img  alt="img"  src="//upload.jianshu.io/admin_banners/web_images/4596/1686f2fe090d3a75481c6fad69aba5396f82d260.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"  />
			</BannerImg>
		);
	}
}

export default Banner;