import { useRef, useState } from "react";
import "./MinMaxFilter.css";
const MinMaxFilter = () => {
  const rangeMin = useRef(null);
  const rangeMax = useRef(null);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const handleChange = () => {
    let min = rangeMin.current.value;
    let max = rangeMax.current.value;
    setMin(min);
    setMax(max);
  };
  return (
    <div>
      <h3>{min}</h3>
      <div className="minMaxInput">
      <input
          className="maxInput"
          type="range"
          ref={rangeMax}
          min={min}
          max={100}
          defaultValue={100}
          style={{ width: `${100 - min}%`}}
          onChange={() => {
            handleChange();
          }}
        />
        <input
          className="minInput"
          type="range"
          ref={rangeMin}
          min={0}
          max={max - 1}
          defaultValue={0}
          style={{ width: `${max-1}%` }}
          onChange={() => {
            handleChange();
          }}
        />
      </div>
      <h3>{max}</h3>
    </div>
  );
};
export default MinMaxFilter;
