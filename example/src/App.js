import React, { Component } from 'react'
import { USERS } from "./SAMPLE_DATA/users";
import UserList, { UserItem } from 'react-user-list'

export default class App extends Component {
  render () {
    return (
      <div style={{width: "80%", margin: "72px auto"}}>
        <UserList users={USERS} />
        <div><UserItem user={USERS[0]} size={40}/></div>
      </div>
    )
  }
}
