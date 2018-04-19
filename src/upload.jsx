import React from 'react'
import rest from './rest'
import './css/upload.scss'

class Upload extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    createDir = (e) => {
      e.preventDefault()
    }

    backDir = (e) => {
      let path = this.props.dirname.split('/')
      let result = path.filter((value) => {
        return value != ''
      })

      if (result.length == 0) {
        return this.props.onUpload('/')
      }

      result.pop()

      this.props.onUpload('/' + result.join('/'))
    }

    handleFile = async (e) => {
      e.preventDefault()
      if (this.fileInput.files.length === 0) {
        return console.log('no files')
      }

      const form = new FormData()
      for (let file of this.fileInput.files) {
        form.append(file.name, file, file.name)
      }

      await rest.post(`/upload?dirname=${this.props.dirname}`, form)
      this.props.onUpload(this.props.dirname)
    }

    render = () => {
      return (
        <div className="upload-container">
          <input
            id="file"
            style={{display: 'none'}}
            type="file"
            ref={(input) => this.fileInput = input}
            onChange={this.handleFile}
            multiple
          >{this.props.children}
          </input>
          <label className="btn btn-primary btn-block" htmlFor="file">上传</label>
          {/*<button className="btn btn-default btn-block" onClick={this.createDir}>新建文件夹</button>*/}
          {this.props.dirname != '/' && <button className="btn btn-default btn-block" onClick={this.backDir}>返回上一级</button>}
        </div>
      )
    }
  }

export default Upload