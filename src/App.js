import React, { Component } from 'react';

import { Provider }  from 'react-redux';

import store from './store';

import Header  from './common/header';

import Home from './pages/home';

import Detail from './pages/detail';

import Login  from './pages/login';

import { GlobalStyle } from './style';


import { BrowserRouter,  Route }  from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Provider store={store}>          
            <BrowserRouter>
              <React.Fragment>                
                  <Header />  
                  <Route path="/"  exact  component={Home} ></Route>
                  <Route path="/detail/:id"  exact component={Detail} ></Route>
                  <Route path="/login/:status"  exact component={Login} ></Route>                
              </React.Fragment>
            </BrowserRouter>
            <GlobalStyle />
        </Provider>      
    )
  }
}

export default App;
