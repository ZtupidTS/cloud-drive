import './css/signin.css'

import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username: 'seasons521@126.com',
        password: '111111'
      }
    }
  
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }
  
    handleSubmit = (e) => {
      console.log(this.state)
      e.preventDefault()
    }
  
    render = () => {
      return (
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <img className="mb-4" src="" alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">云盘</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input 
            type="email" 
            id="inputEmail" 
            className="form-control" 
            placeholder="用户名"
            name="username" 
            value={this.state.username}
            onChange={this.handleChange} 
            required 
            autoFocus/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input 
            type="password" 
            id="inputPassword" 
            className="form-control" 
            placeholder="密码"
            name="password"
            value={this.state.password}
            onChange={this.handleChange} 
            required/>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> 记住我
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">登录</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
      )
    } 
  }

export default LoginForm