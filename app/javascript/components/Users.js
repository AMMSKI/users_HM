import React from "react"

const Users = (props) => {
  const renderUsers = () => {
    return props.users.map((user) => {
      return (
      <div>
      <h3>{user.name}</h3>
      <h4>age:{user.age}</h4>
      </div>
    )})
  }
  return( 
    <div>
    <h1>User</h1>
    {renderUsers()}
    </div>
    )
}

export default Users