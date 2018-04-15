import 'react-table/react-table.css'

import ReactTable, {ReactTableDefaults} from 'react-table'

import React from 'react'

Object.assign(ReactTableDefaults, {
  defaultPageSize: 5,
  minRows: 3
})

const columns = [{
  Header: 'Name',
  accessor: 'name' // String-based value accessors!
}, {
  Header: 'Age',
  accessor: 'age',
  Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  id: 'friendName', // Required because our accessor is not a string
  Header: 'Friend Name',
  accessor: d => d.friend.name // Custom value accessors!
}, {
  Header: props => <span>Friend Age</span>, // Custom header components!
  accessor: 'friend.age'
}]

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      }]
    }
  }

  render = () => {
    return (
      <ReactTable
        data={this.state.data}
        columns={columns}
      />
    )
  } 
}

export default List