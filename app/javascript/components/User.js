import React from "react"

const User = (props) => {
  return (
  <div style={{ textAlign: "center", backgroundColor: "lightgrey", border: "2px solid", padding: "40px", margin: "40px" }}>
    <h1>User</h1>
    <a style={{textDecoration: "none", border: "1px solid", padding: "3px"}} href="/users">back</a>
      <div style={{ textAlign: "center", backgroundColor: "lightgreen", border: "1px solid", padding: "40px", margin: "40px" }}>
        <h3>{props.user.name}</h3>
        <h4>age:{props.user.age}</h4>
        <a style={{textDecoration: "none", color: "grey", border: "1px solid", padding: "3px"}} href={`/users/${props.user.id}/edit`}>Edit     </a>
        <a style={{textDecoration: "none", color: "grey", border: "1px solid", padding: "3px"}} href={`/users/${props.user.id}`} data-method="delete">Delete    </a>
      </div>
  </div>
  )
  return User()
}

export default User