import React from 'react'
import rest from './rest'
import Ctx from './ctr.jsx'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {data: nextProps.data}
  }

  render = () => {

    const listItems = this.state.data.map((item, index) => {
      return (
        <Ctx
          key={item.name}
          item={item}
          onDelete={this.props.onDelete}
          onClickDir={this.props.onClickDir}
        />
      )
    })

    const black = <div>no data</div>

    return (
      <div>
        <table className="table table-hover table-sm">
          <thead>
            <tr>
              <th>文件名</th>
              <th>大小</th>
              <th>修改日期</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
        {listItems.length == 0 && <div style={{'marginTop': '190px'}}>暂无资料</div>}
      </div>
    )
  }
}

export default List