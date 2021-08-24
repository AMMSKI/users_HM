import React from "react"

const NewUser = () => {
  const UserInput = () => {
    return (
      <div>
        <form action="/users" method="post">
        <p>New User Name</p>
        <input name="user[name]"/>
        <p>New User Age</p>
        <input name="user[age]"/>
        <button type="submit">Add</button>
        </form>
      </div>
    )
  }
  return UserInput()
}

export default NewUser