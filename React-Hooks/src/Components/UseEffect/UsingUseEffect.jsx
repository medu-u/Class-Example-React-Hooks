import { useState, useEffect, useContext } from "react";
import { MyContext } from "../../App";

function UsingUseEffect() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(50);
  const [input, setInput]= useState('');

  useEffect(() => {
    console.log(input);
    document.title = `Count: ${count}`;
  }, [input]);

  return (
    <div className="effect-container">
      <form action="">
        <input
          className="form-input"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      <h1 className="title">React useEffect Demo</h1>
      <p className="subtitle">Understanding Functional Component Lifecycle</p>

      <div className="card">
        <h3>
          Count is: <span className="value">{count}</span>
        </h3>
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          Increment Count
        </button>
      </div>

      <div className="divider"></div>

      <div className="card">
        <h3>
          Age is: <span className="value">{age}</span>
        </h3>
        <button className="btn" onClick={() => setAge((age) => age + 1)}>
          Increment Age
        </button>
      </div>
    </div>
  );
}

export default UsingUseEffect;
