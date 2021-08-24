import React from "react"

const NewUser = () => {
  const UserInput = () => {
    return (
      <div style={{ textAlign: "center", backgroundColor: "lightgrey", border: "2px solid", padding: "40px", margin: "40px" }}>
          <h1>Add User</h1>
          <a style={{textDecoration: "none", border: "1px solid", padding: "3px"}} href="/users">back</a>
        <div style={{ textAlign: "center", backgroundColor: "lightgreen", border: "1px solid", padding: "40px", margin: "40px" }}>
          <form action="/users" method="post">
          <p>New User Name</p>
          <input name="user[name]"/>
          <p>New User Age</p>
          <input name="user[age]"/>
          <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
  return UserInput()
}

export default NewUser