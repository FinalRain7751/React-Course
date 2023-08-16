import style from "./InputNumber.module.css";

const labelToId = (label) => {
  let id = "";
  label.split(" ").forEach((el, i) => {
    if (i === 0) id += el.toLowerCase();
    if (i === 1) {
      id += el.slice(0, 1).toUpperCase() + el.slice(1).toLowerCase();
    }
  });

  return id;
};

const InputNumber = (props) => {
  const id = labelToId(props.label);
  const inputChangeHandler = (e) => {
    const target = e.target;
    props.onFormChange(target.value, target.id);
  };

  return (
    <div>
      <div className={style["form__input--fields"]}>
        <label htmlFor={id} className={style["form__input--fields-label"]}>
          {props.label}
        </label>
        <input
          type="number"
          min="1"
          className={style["form__input--fields-box"]}
          id={id}
          onChange={inputChangeHandler}
        />
      </div>
    </div>
  );
};

export default InputNumber;
