import React from "react"

const Users = (props) => {
  const renderUsers = () => {
    return props.users.map((user) => {
      return (
      <div style={{ textAlign: "center", backgroundColor: "lightgreen", border: "1px solid", padding: "40px", margin: "40px" }}>
        <h3>{user.name}</h3>
        <h4>age:{user.age}</h4>
        <a style={{textDecoration: "none", color: "grey", border: "1px solid", padding: "3px"}} href={`/users/${user.id}`}>Show     </a>
        <a style={{textDecoration: "none", color: "grey", border: "1px solid", padding: "3px"}} href={`/users/${user.id}/edit`}>Edit     </a>
        <a style={{textDecoration: "none", color: "grey", border: "1px solid", padding: "3px"}} href={`/users/${user.id}`} data-method="delete">Delete    </a>
      </div>
    )})
  }
  return( 
    <div style={{ textAlign: "center", backgroundColor: "lightgrey", border: "2px solid", padding: "40px", margin: "40px" }}>
      <h1>Users</h1>
      <a style={{textDecoration: "none", border: "1px solid", padding: "3px"}} href="/users/new">Create new user</a>
      {renderUsers()}
    </div>
    )
}

export default Users