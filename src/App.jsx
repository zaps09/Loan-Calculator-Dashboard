import React, { useState } from "react";

const App = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [termYears, setTermYears] = useState(5);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount);
    const annualInterest = parseFloat(interestRate) / 100;
    const months = parseFloat(termYears) * 12;
    const monthlyRate = annualInterest / 12;

    const payment =
      (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

    setMonthlyPayment(payment.toFixed(2));
  };
  return (
    <div>
      <div className="navbar">
        <div className="logo">Loan Calculator</div>
        <div className="nav-links">
          <button>HOME</button>
          <a href="#">EXCHANGE RATES (LIVE)</a>
          <a href="#">ABOUT</a>
          <a href="#">ERROR PAGE</a>
          <div className="toggle"></div>
        </div>
      </div>

      <div className="container">
        <h2>Loan Calculator Dashboard</h2>
        <div className="input-group">
          <input
            type="number"
            placeholder="Loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Interest Rate (%)"
          />
          <input
            type="number"
            placeholder="Term (Years)"
            value={termYears}
            onChange={(e) => setTermYears(e.target.value)}
          />
        </div>
        <button className="calculate-btn" onClick={calculatePayment}>
          CALCULATE
        </button>

        {monthlyPayment && (
          <div style={{ marginTop: "1rem" }}>
            <strong>Monthly Payment:</strong> ${monthlyPayment}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
