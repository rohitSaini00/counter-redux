import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { intcrement, decrement } from "../src/Redux/Action/Action";
function App() {
  const counter = useSelector((state) => state.count.counter);
  const dispacth = useDispatch();

  const intfun = () => {
    dispacth(intcrement(5));
  };
  const decfun = () => {
    dispacth(decrement(5));
  };
  return (
    <div className="App">
      <h2>React Redux</h2>
      <div className="container">
        <div className="redux-data mt-5">
          <button onClick={decfun} type="button" className="btn btn-success">
            -
          </button>
          <p>{counter}</p>

          <button onClick={intfun} type="button" className="btn btn-primary">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
