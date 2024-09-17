import { useState, useEffect } from "react";
import "./App.css";
import useImmediateState from "./useImmediateState";

function App() {
  const [getCount1, setCount1] = useImmediateState(0);
  const [count2, setCount2] = useState(0);

  function incrementUsingUseImmediateState() {
    console.log("before : ", getCount1());
    console.log("incrementing");
    setCount1(getCount1() + 1);
    console.log("after : ", getCount1());
  }

  useEffect(() => {
    console.log("after re-rendering : ", count2);
  }, [count2]);
  function incrementUsingUseState() {
    console.log("before : ", count2);
    console.log("incrementing");
    setCount2(count2 + 1);
    console.log("after : ", count2);
  }

  function reset() {
    setCount1(0);
    setCount2(0);
    console.clear();
  }

  return (
    <div className="App">
      <h1>open console to see the difference</h1>
      <h3>
        1. using <i>useImmediateState()</i>, change in state value is reflected
        immediately through print statement
      </h3>
      <div>
        <h1>{getCount1()}</h1>
        <button onClick={incrementUsingUseImmediateState}>Increment</button>
      </div>
      <h3>2. using <i>useState()</i>, change is state is delayed until rerendering</h3>
      <div>
        <h1>{count2}</h1>
        <button onClick={incrementUsingUseState}>Increment</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
