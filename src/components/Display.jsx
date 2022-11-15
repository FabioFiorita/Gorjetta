const Display = ({ calculatedTip, calculatedTotal, calculatedPerPerson, toggleResetButton, handleReset }) => {
  return (
    <div className="display">
      <div className="display-group">
          <div className="display-row">
            <div className="display-label">
              <p className="header">Valor da Gorjeta</p>
            </div>
            <p className="display-amt">{"R$ " + calculatedTip.toFixed(2).toString().replace(".",",")}</p>
          </div>
          <div className="display-row">
            <div className="display-label">
              <p className="header">Valor da Conta</p>
              <p className="unit"> total</p>
            </div>
            <p className="display-amt">{"R$ " + calculatedTotal.toFixed(2).toString().replace(".",",")}</p>
          </div>
          <div className="display-row">
            <div className="display-label">
              <p className="header">Valor da Conta</p>
              <p className="unit"> pessoa</p>
            </div>
            <p className="display-amt">{"R$ " + calculatedPerPerson.toFixed(2).toString().replace(".",",")}</p>
          </div>
      </div>
      <button className="reset-btn" disabled={!toggleResetButton} onClick={handleReset}>Resetar</button>
    </div>
  );
};

export default Display;
