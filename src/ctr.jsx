import React from 'react'
import rest from './rest'
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '290px'
  }
}

Modal.setAppElement('#root')

class Ctr extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: '',
      modalIsOpen: false
    }
  }

  createQrCode = async (name, e) => {
    if (this.state.src == '') {
      const requestName = this.props.item.dirname == '/' ? `/${name}` : `${this.props.item.dirname}/${name}`
      const src = await rest.post('/qrcode', {
        name: requestName
      })

      this.setState({src: src.data})
    }

    this.openModal()
  }

  deleteFile = async (name, e) => {
    await rest.delete(`/file?name=${this.props.item.dirname}/${name}`)
    await this.props.onDelete(this.props.item.dirname)
  }

  clickDir = async () => {
    if (this.props.item.isDir) {
      if (this.props.item.dirname == '/') {
        return await this.props.onClickDir(`/${this.props.item.name}`)
      }

      await this.props.onClickDir(`${this.props.item.dirname}/${this.props.item.name}`)
    }
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00'
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render = () => {
    return (
      <tr key={this.props.item.name}>
        <td onClick={(e) => this.clickDir()}>
          <img src={this.props.item.isDir ? '/svg/file-directory.svg' : '/svg/file.svg'}/>{this.props.item.name}
        </td>
        <td>{this.props.item.size}</td>
        <td>{this.props.item.date}</td>
        <td>
        {!this.props.item.isDir &&
          <button onClick={(e) => this.createQrCode(this.props.item.name, e)}>二维码 </button>
        }
        {!this.props.item.isDir &&
          <button onClick={(e) => this.deleteFile(this.props.item.name, e)}>删除</button>
        }
        </td>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h5 ref={subtitle => this.subtitle = subtitle}>{this.props.item.name}</h5>
          <div><img src={this.state.src} width="250" height="250" alt=""/></div>
          <button className="btn btn-default btn-block" onClick={this.closeModal}>关闭</button>
        </Modal>
      </tr>
    )
  }
}

export default Ctr