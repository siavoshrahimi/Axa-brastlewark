import React,{Component} from 'react';
//routing
import {Switch,Route,BrowserRouter} from 'react-router-dom';
//components
import Home from '../Component/Home/Home';
import Detail from '../Component/Detail/Detail';

class Routes extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/detail/:name' component={Detail}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;