import style from "./Header.module.css";

const Header = () => {
  return (
    <div className="flow-content">
      <div className={style.header__logo}>
        <img
          src="./src/assets/investment-calculator-logo.png"
          alt="investment calculator logo"
        />
      </div>
      <div className={style.header__heading}>
        <h3>Investment Calculator</h3>
      </div>
    </div>
  );
};

export default Header;
