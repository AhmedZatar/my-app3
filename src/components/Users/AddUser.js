import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function Adduser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error,setError]= useState()

  function addUserHandler(event) {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title:'Invalid input',
        message: 'Please enter a valid name and age (non-empty value). '
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title:'Invalid age',
        message: 'Please enter a valid age (> 0). '
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  }
  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function errorHandler(){
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModal  title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserNAme</label>
          <input
            value={enteredUsername}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={enteredAge}
            type="number"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default Adduser;
