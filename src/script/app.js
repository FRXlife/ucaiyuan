require('../style/app.scss')//只写require不需要返回，一旦引进来就把模块打包起来

import React from 'react'
import ReactDOM from 'react-dom'
import { Router,Route, IndexRoute,IndexRedirect,hashHistory} from 'react-router'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import Index from './component/index'
import Home from './component/home'
import Kind from './component/kind'

import Kind1 from './component/kind1'
import Kind2 from './component/kind2'
import Kind3 from './component/kind3'
import Kind4 from './component/kind4'
import Kind5 from './component/kind5'
import Kind6 from './component/kind6'
import Kind7 from './component/kind7'
import Kind8 from './component/kind8'


import Cart from './component/cart'
import My from './component/my'
import Register from './component/register'
import Login from './component/login'
import Set from './component/set'


















ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
    	<Route path="/" component={Index}>
    		<IndexRedirect to="/home"></IndexRedirect>
    		<Route path="home" title="0" component={Home}/>
    		<Route path="kind" title="1"  component={Kind}>
            <IndexRoute component={Kind1}/>
              <Route path="kind1" component={Kind1}/>
              <Route path="kind2" component={Kind2}/>
              <Route path="kind3" component={Kind3}/>
              <Route path="kind4" component={Kind4}/>
              <Route path="kind5" component={Kind5}/>
              <Route path="kind6" component={Kind6}/>
              <Route path="kind7" component={Kind7}/>
              <Route path="kind8" component={Kind8}/>
        </Route>
    		<Route path="cart" title="2"  component={Cart}/>
    		<Route path="my" title="3" component={My}/>
    	</Route>
      
      <Route path="register" component={Register}/>
      <Route path="login" component={Login}/>
      <Route path="set" component={Set}/>

    </Router>
  </Provider>  ,
  document.getElementById('root')
)
