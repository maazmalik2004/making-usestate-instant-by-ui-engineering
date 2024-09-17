# React State Management Comparison

This project demonstrates the difference between React's built-in `useState` hook and a custom hook, `useImmediateState`, that attempts to manage state updates more immediately. 

## Overview

In this example, two counters are implemented:

1. **Counter using `useImmediateState`**: Shows how state updates can be reflected immediately in the console before re-rendering.
2. **Counter using `useState`**: Shows how state updates are reflected after the component re-renders.

## Files

- `App.js`: Contains the main React component with both counters.
- `useImmediateState.js`: Contains the custom hook `useImmediateState`.

## `App.js (usage)`

```javascript
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
      <h3>2. using <i>useState()</i>, change in state is delayed until rerendering</h3>
      <div>
        <h1>{count2}</h1>
        <button onClick={incrementUsingUseState}>Increment</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
```

## `useImmediateState.js`

```javascript
import { useState, useCallback } from 'react';

export default function useImmediateState(initialValue) {
    const [state, setState] = useState(initialValue);

    const getState = useCallback(() => state, [state]);

    const setImmediateState = (value) => {
        setState(value);
    };

    return [getState, setImmediateState];
}
```

## Running the Example

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

4. Open the console to observe the behavior of state updates in the `useImmediateState` and `useState` implementations.

## Contributing

Feel free to submit issues or pull requests to improve the code or documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
