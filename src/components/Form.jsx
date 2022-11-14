import real from "../assets/icons/real-icon.svg";
import person from "../assets/icons/person-icon.svg";
import QualitySelector from "./QualitySelector";

const Form = () => {
  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
            <label className="label" htmlFor="bill">
              Valor da Conta
            </label>
            <p className="error"></p>
        </div>
        <div className="number-wrapper">
            <input type="number" id="bill" />
            <img
              src={real}
              alt="real"
              aria-hidden="true"
              className="icon"
            />
        </div>
      </div>

      <div className="quality-wrapper">
        <div className="service-section">
        <p className="label"> Selecione a nota da qualidade do serviço</p>
          <div className="service-wrapper">
              <QualitySelector grade={0} />
              <QualitySelector grade={2} />
              <QualitySelector grade={4} />
              <QualitySelector grade={6} />
              <QualitySelector grade={8} />
              <QualitySelector grade={10} />
          </div>
        </div>
        <div className="food-section">
          <p className="label"> Selecione a nota da qualidade da comida</p>
          <div className="food-wrapper">
              <QualitySelector grade={0} />
              <QualitySelector grade={2} />
              <QualitySelector grade={4} />
              <QualitySelector grade={6} />
              <QualitySelector grade={8} />
              <QualitySelector grade={10} />
          </div>
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="people">Número de Pessoas</label>
          <p className="error"></p>
        </div>
        <div className="number-wrapper">
            <input type="number" id="people" />
            <img
              src={person}
              alt="real"
              aria-hidden="true"
              className="icon"
            />
        </div>
      </div>
    </div>
  );
};

export default Form;
