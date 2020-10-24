import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import Menu from '../src/borrar/Menu'
import List from './borrar/List'
import { API_URL } from './constants';
import NotFound from './pages/404/NotFound';
import Information from './pages/info/Information';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import './styles/bootstrap.min.css'
function App() {

  const [isAuth, setIsAuth] = useState(null)
  const [name, setName] = useState("")

  const history = useHistory()

  useEffect(() => {
    let token = localStorage.getItem("token")
    console.log(token)
    if (token !== null) {
      Axios.defaults.headers.common["Authorization"] = token
      Axios.get(API_URL+"/me").then(response => {
        setIsAuth(true)
        setName(response.data.name)
        history.push("/")
      }).catch(error => {
        console.log(error)
        setIsAuth(false)
      })
    } else {
      setIsAuth(false)
    }
  }, [isAuth])

  if (isAuth === null) {
    return ""
  }


  return (
    <Container>
      <Menu name={name} isAuth={isAuth} setIsAuth={setIsAuth} />
        <Switch>
          {isAuth ? (<>
            <Route exact path="/" component={List} />
            <Route exact path="/info" component={Information} />
          </>) : (<>
            <Route exact path="/" render={() => <Redirect to="/login" /> } />
            <Route exact path="/login" render={() => <Login setIsAuth={setIsAuth} setName={setName} />} />
            <Route exact path="/info" component={Information} />
          </>)}
        </Switch>
    </Container>
  );
}
export default App;

