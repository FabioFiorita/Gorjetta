const Display = () => {
  return (
    <div className="display">
      <div className="display-group">
          <div className="display-row">
            <div className="display-label">
              <p className="header">Valor da Gorjeta</p>
              <p className="unit"> pessoa</p>
            </div>
            <p className="display-amt">R$ 0,00</p>
          </div>
          <div className="display-row">
            <div className="display-label">
              <p className="header">Valor da Gorjeta</p>
              <p className="unit"> pessoa</p>
            </div>
            <p className="display-amt">R$ 0,00</p>
          </div>
      </div>
      <button className="btn" disabled>Resetar</button>
    </div>
  );
};

export default Display;
