import { useState } from "react";
import Button from "./Button";
import style from "./Form.module.css";
import InputNumber from "./InputNumber";

const Form = (props) => {
  const [formData, setFormData] = useState({});

  const formDataChangeHandler = (value, id) => {
    setFormData((prevFormData) => {
      prevFormData[id] = +value;
      return prevFormData;
    });
  };

  const submitHandler = (e) => {
    const target = e.target;
    e.preventDefault();
    const submitter = e.nativeEvent.submitter;

    if (submitter.id === "resetForm") {
      target.reset();
      setFormData({});
      props.onFormSubmit(formData);
      return;
    }

    props.onFormSubmit(formData);
    setFormData({});
    target.reset();
  };

  return (
    <div className={style.form__card}>
      <form
        onSubmit={submitHandler}
        className={`${style.form__control} flow-content`}
      >
        <div className={style.form__input}>
          <InputNumber
            label="Current Savings ($)"
            onFormChange={formDataChangeHandler}
          />
          <InputNumber
            label="Yearly Savings ($)"
            onFormChange={formDataChangeHandler}
          />
          <InputNumber
            label="Expected Interest (%)"
            onFormChange={formDataChangeHandler}
          />
          <InputNumber
            label="Investment Duration (years)"
            onFormChange={formDataChangeHandler}
          />
        </div>
        <div className={style.form__submit}>
          <Button id="resetForm" value="reset" />
          <Button id="calculate" value="calculate" />
        </div>
      </form>
    </div>
  );
};

export default Form;
