import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={style.btn} id={props.id}>
      <p>{props.value}</p>
    </button>
  );
};

export default Button;
