import React, { Component } from 'react';

import { Provider }  from 'react-redux';

import store from './store';

import Header  from './common/header';

import Home from './pages/home';

import Detail from './pages/detail';

import { BrowserRouter,  Route }  from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>          
            <BrowserRouter>
              <div>
                <Header />            
                <Route path="/"  exact  component={Home} ></Route>
                <Route path="/detail/:id"  exact component={Detail} ></Route>
              </div>
            </BrowserRouter>          
        </Provider>
      </div>
    )
  }
}

export default App;
