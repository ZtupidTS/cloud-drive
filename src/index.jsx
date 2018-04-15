import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import List from './list.jsx'
import LoginForm from './login.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import Upload from './upload.jsx'

const isLogin = true
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }

  render = () => {
    if (this.state.isLogin) {

      return (
        <div>
          <Upload />
          <List />
        </div>
      )
    }

    return <LoginForm />;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


