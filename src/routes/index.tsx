import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Repository from '../Pages/Repository'


const Routes: React.FC =()=>{
  return(
    <Switch>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/Repository/:repository+" component={Repository}/>
    </Switch>
  )
}

export default Routes
