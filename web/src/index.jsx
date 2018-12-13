import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/list.scss'

import List from './list.jsx'
import LoginForm from './login.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import Upload from './upload.jsx'
import rest from './rest'

const isLogin = true
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true,
      data: [],
      dirname: '/'
    }
  }

  onUpload = async (dirname = '/') => {
    this.setState({dirname: dirname})
    const res = await rest.get(`/?dirname=${dirname}`)
    this.setState({data: res.data})
  }

  onDelete = async (dirname) => {
    await this.onUpload(dirname)
  }

  onClickDir = async (dirname) => {
    await this.onUpload(dirname)
  }

  async componentDidMount() {
    await this.onUpload()
  }

  render = () => {
    if (this.state.isLogin) {

      return (
        <div className="list-container">
          <Upload onUpload={this.onUpload} dirname={this.state.dirname}/>
          <List
            data={this.state.data}
            onDelete={this.onDelete}
            onClickDir={this.onClickDir}
          />
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


