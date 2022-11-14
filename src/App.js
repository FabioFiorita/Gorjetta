// style
import "./App.css";

// components
import Display from "./components/Display";
import Form from "./components/Form";


function App() {
  return (
    <div className="wrapper">
      <h1 className="title">Gorjetta</h1>
      <div className="container">
        <Form />
        <Display />
      </div>
    </div>
  );
}

export default App;
