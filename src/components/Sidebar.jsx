import React from "react";
import { increment, decrement } from "../redux/slices/counter";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Count{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Increment</button>
    </div>
  );
}

export default Sidebar;
