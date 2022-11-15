import real from "../assets/icons/real-icon.svg";
import person from "../assets/icons/person-icon.svg";
import ServiceSelector from "./ServiceSelector";
import FoodSelector from "./FoodSelector";

const Form = ({
  billAmt,
  people,
  showPeopleError,
  handleBillAmtInput,
  handleServiceInput,
  handleFoodInput,
  handlePeopleInput,
  handleSubmit,
}) => {
  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="bill">
            Valor da Conta
          </label>
        </div>
        <div className="number-wrapper">
          <input
            type="number"
            id="bill"
            onInput={handleBillAmtInput}
            value={billAmt}
          />
          <img src={real} alt="real" aria-hidden="true" className="icon" />
        </div>
      </div>

      <div className="quality-wrapper">
        <div className="service-section">
          <p className="label"> Selecione a nota da qualidade do serviço</p>
          <div className="service-wrapper">
            <ServiceSelector grade={0} handleSelected={handleServiceInput} />
            <ServiceSelector grade={2} handleSelected={handleServiceInput} />
            <ServiceSelector grade={4} handleSelected={handleServiceInput} />
            <ServiceSelector grade={6} handleSelected={handleServiceInput} />
            <ServiceSelector grade={8} handleSelected={handleServiceInput} />
            <ServiceSelector grade={10} handleSelected={handleServiceInput} />
          </div>
        </div>
        <div className="food-section">
          <p className="label"> Selecione a nota da qualidade da comida</p>
          <div className="food-wrapper">
            <FoodSelector grade={0} handleSelected={handleFoodInput} />
            <FoodSelector grade={2} handleSelected={handleFoodInput} />
            <FoodSelector grade={4} handleSelected={handleFoodInput} />
            <FoodSelector grade={6} handleSelected={handleFoodInput} />
            <FoodSelector grade={8} handleSelected={handleFoodInput} />
            <FoodSelector grade={10} handleSelected={handleFoodInput} />
          </div>
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="people">
            Número de Pessoas
          </label>
          <p className="error">{showPeopleError ? "Valor inválido" : ""}</p>
        </div>
        <div className="number-wrapper">
          <input type="number" id="people" onInput={handlePeopleInput} value={people} />
          <img src={person} alt="real" aria-hidden="true" className="icon" />
        </div>
      </div>
      <button className="calculate-btn" onClick={handleSubmit}>Calcular</button>
    </div>
  );
};

export default Form;
