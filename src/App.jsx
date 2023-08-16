import Header from "./components/Header";
import Form from "./components/Form";
import Results from "./components/Results";
import { useState } from "react";

const App = () => {
  const [results, setResults] = useState([]);
  const calculateResults = (formData) => {
    const newResults = [];
    const {
      currentSavings,
      yearlySavings,
      expectedInterest,
      investmentDuration,
    } = formData;

    let investedCapital = currentSavings;
    let totalSavings = 0;
    let totalInterest = 0;
    for (let i = 1; i <= investmentDuration; i++) {
      const year = i;
      const interest =
        (i === 1 ? currentSavings : totalSavings) * (expectedInterest / 100);
      totalInterest += interest;
      investedCapital += yearlySavings;
      totalSavings =
        (i === 1 ? currentSavings : totalSavings) + interest + yearlySavings;

      newResults.push({
        year,
        totalSavings,
        interest,
        totalInterest,
        investedCapital,
      });
    }
    setResults(newResults);
  };

  return (
    <div className="main flow-content">
      <Header />
      <Form onFormSubmit={calculateResults} />
      <Results data={results} />
    </div>
  );
};

export default App;
