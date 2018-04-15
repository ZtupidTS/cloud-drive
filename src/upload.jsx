import React from 'react'

class Upload extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    createDir = (e) => {
      e.preventDefault()
      console.log('create', e)
    }

    handleFile = (e) => {
      e.preventDefault()
      if (this.fileInput.files.length === 0) {
        return console.log('no files')
      }
      console.log('handle files', this.fileInput.files[0].name)
      const xhr = new XMLHttpRequest()
      xhr.open("POST", '/server', true)
      const form = new FormData()
      for (let file of this.fileInput.files) {
        console.log('name', file.name)
        form.append('files[]', file, file.name)
      }

      xhr.send(form)
    }
  
    render = () => {
      return (
        <div>
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
          <button className="btn btn-default btn-block" onClick={this.createDir}>新建文件夹</button>
        </div>
      )
    } 
  }

export default Upload