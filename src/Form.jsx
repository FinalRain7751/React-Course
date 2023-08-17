import { useState } from "react";
import Card from "./Card";

export default function Form(props) {
  const [formData, setFormData] = useState({});
  const [errorObject, setErrorObject] = useState({});

  const formDataChangeHandler = (e) => {
    setFormData((prevFormData) => {
      prevFormData[e.target.id] = e.target.value;
      return prevFormData;
    });
  };

  const isFormDataValid = (formData) => {
    const { username = "", age = "" } = formData;
    if (!username.trim() || !age.trim()) {
      setErrorObject((prevErrObj) => {
        prevErrObj.title = "Invalid input";
        prevErrObj.message = "Username or Age missing.";
        return prevErrObj;
      });
      return false;
    }
    // if (!username.trim() || !age.trim()) return false;
    if (age < 1) {
      setErrorObject((prevErrObj) => {
        prevErrObj.title = "Invalid input";
        prevErrObj.message = "Age must be more than 0.";
        return prevErrObj;
      });
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // const submitter = e.nativeEvent.submitter;
    if (!isFormDataValid(formData)) {
      console.log(errorObject);
      console.log("not valid");
      props.onInvalidFormSubmit(errorObject);
      setFormData({});
      return;
    }
    console.log("valid");
    props.onValidFormSubmit(formData);
    setFormData({});
    e.target.reset();
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className="form__control">
        <div className="form__input">
          <div className="form__input--fields">
            <label htmlFor="username" className="form__label">
              Username
            </label>
            <input
              onChange={formDataChangeHandler}
              type="text"
              name="username"
              id="username"
              className="form__input--box"
            />
          </div>
          <div className="form__input--fields">
            <label htmlFor="age" className="form__label">
              Age (Years)
            </label>
            <input
              onChange={formDataChangeHandler}
              type="text"
              name="age"
              id="age"
              className="form__input--box"
            />
          </div>
        </div>
        <div className="form__submit">
          <button>Add User</button>
        </div>
      </form>
    </Card>
  );
}
