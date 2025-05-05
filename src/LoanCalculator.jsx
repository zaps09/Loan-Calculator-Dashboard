const LoanCalculator = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Loan Calculator Dashboard</h2>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          placeholder="Loan Amount"
        />
        <input
          type="number"
          step="0.1"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          placeholder="Interest Rate (%)"
        />
        <input
          type="number"
          value={termYears}
          onChange={(e) => setTermYears(e.target.value)}
          placeholder="Term (Years)"
        />
      </div>
      <button onClick={calculatePayment}>CALCULATE</button>
      {monthlyPayment && (
        <div style={{ marginTop: "1rem" }}>
          <strong>Monthly Payment:</strong> ${monthlyPayment}
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
