import React from "react";
import Header from "./components/Header";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

const App = () => {
  return (
    <>
      <Header title="Simple User App" />
      <div className="container" >
        <AddUser />
        <hr />
        <Users />
      </div>
    </>
  )
}

export default App;