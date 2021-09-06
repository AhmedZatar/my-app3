import React, { useState } from "react";
import Adduser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  function addUserHandler(uNAme, uAge) {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uNAme, age: uAge, id: Math.random().toString() },
      ];
    });
  }
  return (
    <div>
      <Adduser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
