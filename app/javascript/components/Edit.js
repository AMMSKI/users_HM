import React from "react"

const Edit = (props) => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "lightgrey", border: "2px solid", padding: "40px", margin: "40px" }}>
    <h1>Edit User</h1>
    <a style={{textDecoration: "none", border: "1px solid", padding: "3px"}} href="/users">back</a>
      <div style={{ textAlign: "center", backgroundColor: "lightgreen", border: "1px solid", padding: "40px", margin: "40px" }}>
        <form action={`/users/${props.user.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <h3>Edit User Name</h3>
        <input defaultValue={props.user.name} name="user[name]"/>
        <h3>Edit User Age</h3>
        <input defaultValue={props.user.age} name="user[age]"/>
        <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default Edit