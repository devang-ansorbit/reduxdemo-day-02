import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIncrem, setDecrem, setcounter } from "../redux/pageSlice";

export const Pagination = () => {
  const {value} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
 
  console.log("hey", value);
  return (
    <div style={{ margin: "10px" }}>
      <button disabled={value===1} onClick={() => dispatch(setDecrem())}>PREV</button>
      <button>{value}</button>
      <button onClick={() => dispatch(setIncrem())}>NEXT</button>
    </div>
  );
};
