
import React, { useState } from "react";
import "./segmentStyles.css";

const Segments = (props) => {
  const numberOfSlice = props.number;
  const [pass, setPass] = useState("");
  // const [colorArr, setColorArr] = useState([]);
  const colorArr=props.colorArr;
  const setColorArr=props.setColorArr;
  const color = props.color;

  function slice() {
      
    let slices = [];

    for (let i = 0; i < numberOfSlice; i++) {
      slices.push({
        percent: 1 / numberOfSlice,
        cnt: i,
        color: colorArr[i] || "gray"
      });
    }

    let cumulativePercent = 0;

    function getCoordinatesForPercent(percent) {
      const x = Math.cos(2 * Math.PI * percent);
      const y = Math.sin(2 * Math.PI * percent);
      return [x, y];
    }
    const shoot = (a, i, color) => {
      if (pass === "") setPass(String(i) + ":" + a);
      else setPass(pass + "," + String(i) + ":" + a);

      slices[i] = color;
    };

    let arr = [];
    arr = slices.map((slice) => {
      const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
      cumulativePercent += slice.percent;
      const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
      const largeArcFlag = slice.percent > 0.5 ? 1 : 0;
      const pathData = [
        `M ${startX} ${startY}`, // Move
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
        "L 0 0" // Line
      ].join(" ");

      return (
        <path
          onClick={() => {
            const l = colorArr;
            l[slice.cnt] = color;
            // alert(l);
            setColorArr(l);
            shoot(colorArr[slice.cnt], slice.cnt);
          }}
          d={pathData}
          fill={slice.color}
          key={pathData}
          className="seg"
        />
      );
    });
    return arr;
  }

  return (
      <div>
    <svg
      height="200"
      width="200"
      viewBox="-1 -1 2 2"
      style={{ transform: [{ rotate: "-90deg" }] }}
    >
      {slice()}
    </svg>
    </div>
  );
};

export default Segments;
