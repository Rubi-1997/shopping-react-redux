import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increament1, Decreament1 } from "./Redux/counterSlice";

const Counter = () => {
  const counter = useSelector((state)=> state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter}</h1>

      <button onClick={() => dispatch(Increament1())}>increament</button>
      <button onClick={() => dispatch(Decreament1())}>decreament</button>
    </div>
  );
};

export default Counter;
