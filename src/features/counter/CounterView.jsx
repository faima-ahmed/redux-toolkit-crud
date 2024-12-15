import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state?.counter?.count);
  //console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        IncrementByFive
      </button>
    </div>
  );
};

export default CounterView;
