import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <Counter />
      <CounterActions />
    </div>
  );
}

export default App;
