import React, { useState, useRef } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid data in the form",
      });
      return;
    }
    //EnteredAge is a string here
    //+enteredAge here converts EnteredAge string to an integer for comparison
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "The age should be greater than 1",
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);
    //Resetting the values to an empty string now
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> USERNAME</label>
          <hr />
          <div className={classes.input_wrap}>
            <input
              type="text"
              id="username"
              className={classes.effect_1}
              ref={nameInputRef}
            />
          </div>
          <label htmlFor="age"> AGE</label>
          <hr />
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
