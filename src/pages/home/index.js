import React, { Component }  from 'react';
import Banner from './components/Banner';
import List from './components/List';
import Writer from './components/Writer';
import Medium from './components/Medium';

import {
	HomeWraper,
	HomeLeft,
	HomeRight
} from './style';
class Home  extends  Component{
	render(){
		return (
			<HomeWraper>
				<HomeLeft>
					<Banner />
					<List />
				</HomeLeft>
				<HomeRight>
					<Medium />
					<Writer />
				</HomeRight>
			</HomeWraper>
		);
	}
}

export default Home;