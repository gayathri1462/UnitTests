import { useState } from "react";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="Counter">
      <header className="Counter-header">
        <h2>Counter App</h2>
        <h3>On Click Testing</h3>
        <h5>
          Created Using &nbsp;
          <a
            data-testid="created-using"
            className="Counter-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            title="React"
          >
            React
          </a>
        </h5>
      </header>
      <div>
        <h3 className="count" data-testid="count-text">
          Total Count: {count}
        </h3>
        <button onClick={handleIncrement} data-testid="btn-increment">
          Increment
        </button>
        <button onClick={handleDecrement} data-testid="btn-decrement">
          Decrement
        </button>
      </div>
      <Link to="/user-input">UserInput</Link>
    </div>
  );
}

export default Counter;
