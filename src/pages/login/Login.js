import React, { useState } from 'react'
import Axios from 'axios'
import { Card } from 'react-bootstrap'
import { API_URL } from '../../constants'
import { useHistory } from 'react-router-dom'

const Login = props => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const handleSubmit = () => {
    Axios.post(API_URL+"/login", {
      email: email,
      password: password
    }).then(response => {
      let token = response.data.access_token
      let token_type = response.data.token_type
      localStorage.setItem("token", token_type + " " + token)
      props.setIsAuth(true)
      history.push("/")
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="d-flex justify-content-center">
      <Card className="mt-5" style={{ width: '18rem' }}>
        <Card.Body>
          <form onSubmit={ e => {
            e.preventDefault()
            handleSubmit()
          }}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                name="email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input 
                type="password" 
                className="form-control" 
                name="password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Login
