import style from "./Results.module.css";

const Results = (props) => {
  let showResults = props.data.length !== 0;

  console.log(props.data);
  return (
    showResults && (
      <div className={style.results}>
        <table>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>Year</th>
              <th style={{ width: "22.5%" }}>Total Savings</th>
              <th style={{ width: "22.5%" }}>Interest (Year)</th>
              <th style={{ width: "22.5%" }}>Total Interest</th>
              <th style={{ width: "22.5%" }}>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {[
              props.data.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>{el.year}</td>
                    <td>${el.totalSavings.toLocaleString("en-US")}</td>
                    <td>${el.interest.toLocaleString("en-US")}</td>
                    <td>${el.totalInterest.toLocaleString("en-US")}</td>
                    <td>${el.investedCapital.toLocaleString("en-US")}</td>
                  </tr>
                );
              }),
            ]}
          </tbody>
        </table>
      </div>
    )
  );
};

export default Results;
