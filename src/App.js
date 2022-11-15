// style
import { useEffect, useState } from "react";
import "./App.css";

// components
import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  const [billAmt, setBillAmt] = useState("");
  const [selectedService, setSelectedService] = useState(0);
  const [selectedFood, setSelectedFood] = useState(0);
  const [people, setPeople] = useState("");
  const [showPeopleError, setShowPeopleError] = useState(false);
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [calculatedTotal, setCalculatedTotal] = useState(0);
  const [calculatedPerPerson, setCalculatedPerPerson] = useState(0);
  const [toggleResetButton, setToggleResetButton] = useState(false);

  function handleBillAmtInput(e) {
    const input = e.target.value;
    setBillAmt(input);
  }

  function handleServiceInput(e) {
    setSelectedService(e.target.value);
  }

  function handleFoodInput(e) {
    setSelectedFood(e.target.value);
  }

  function handlePeopleInput(e) {
    const input = e.target.value;
    const pattern = /^[0-9]*$/;
    if (pattern.test(input)) {
      setShowPeopleError(false);
      setPeople(input);
    } else {
      setShowPeopleError(true);
    }
  }

  function handleSubmit() {
    fetch(
      `http://127.0.0.1:8000/gorjeta?servico=${selectedService}&comida=${selectedFood}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      response.json().then((data) => {
        const percentageTip = data.gorjeta;
        console.log(percentageTip);
        const tip = (billAmt * percentageTip) / 100;
        setCalculatedTip(tip);
      });
    });
  }

  function calculate() {
    const total = Number(billAmt) + calculatedTip;
    const perPerson = total / people;
    setCalculatedTotal(total);
    setCalculatedPerPerson(perPerson);
    setToggleResetButton(true);
  }

  useEffect(() => {
    if (calculatedTip) {
      calculate();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculatedTip]);

  function handleReset() {
    setBillAmt("");
    setSelectedService(0);
    setSelectedFood(0);
    setPeople("");
    setShowPeopleError(false);
    setCalculatedTip(0);
    setCalculatedTotal(0);
    setCalculatedPerPerson(0);
    setToggleResetButton(false);
  }

  return (
    <div className="wrapper">
      <h1 className="title">Gorjetta</h1>
      <div className="container">
        <Form
          billAmt={billAmt}
          people={people}
          showPeopleError={showPeopleError}
          handleBillAmtInput={handleBillAmtInput}
          handleServiceInput={handleServiceInput}
          handleFoodInput={handleFoodInput}
          handlePeopleInput={handlePeopleInput}
          handleSubmit={handleSubmit}
        />
        <Display
          calculatedTip={calculatedTip}
          calculatedTotal={calculatedTotal}
          calculatedPerPerson={calculatedPerPerson}
          toggleResetButton={toggleResetButton}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
