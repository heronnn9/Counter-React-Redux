import { increment, decrement, incrementByAmount } from "../stores/counter";
import { connect, useDispatch } from "react-redux";
function CounterActions() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Azalt(-)</button>
      <button onClick={() => dispatch(increment())}>Arttır(+)</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>10 Arttır</button>
    </div>
  );
}

export default CounterActions;
