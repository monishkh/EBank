import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'

import './App.css'
// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route path="/ebank/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
