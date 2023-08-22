import React, { useState, useEffect, useContext } from "react";
import * as d3 from "d3";
import classNames from "classnames";

import ThemeContext from "../../../context/ThemeContext";

const SkillGague = ({ icon, value = 0, min = 0, max = 100, offset }) => {
  const theme = useContext(ThemeContext);

  const [count, setCount] = useState(25);
  const incrementAmount = value / 300;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + incrementAmount;
        if (newCount >= value) {
          clearInterval(interval);
          return value;
        }
        return newCount;
      });
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, [value, incrementAmount]);

  const percentScale = d3.scaleLinear().domain([min, max]).range([0, 1]);

  const percent = percentScale(count);

  const angleScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([-Math.PI * 2, Math.PI * 2])
    .clamp(true);

  const angle = angleScale(percent);

  const filledArc = d3
    .arc()
    .innerRadius(0.65)
    .outerRadius(0.95)
    .startAngle(-Math.PI)
    .endAngle(angle)
    .cornerRadius(1)();

  const colorScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range(["#0ECDD8", "#4B99FE"]);

  const gradientSteps = colorScale.ticks(10).map((value) => colorScale(value));

  return (
    <div
      className={classNames(
        theme === "dark" ? "raised-dark" : "raised",
        "relative h-fit w-fit rounded-full p-4",
      )}
    >
      <div
        className={classNames(
          theme === "dark" ? "inset-dark" : "inset",
          "flex items-center rounded-full",
        )}
      >
        <div className="absolute left-0 top-0">
          <svg
            style={{ overflow: "visible" }}
            width="5.1em"
            viewBox={[-1, -1, 2, 1].join(" ")}
          >
            <defs>
              <linearGradient
                id="Gauge__gradient"
                gradientUnits="userSpaceOnUse"
                x1="-1"
                x2="1"
                y2="0"
              >
                {gradientSteps.map((color, index) => (
                  <stop
                    key={color}
                    stopColor={color}
                    offset={`${index / (gradientSteps.length - 1)}`}
                  />
                ))}
              </linearGradient>
            </defs>

            <path d={filledArc} fill="url(#Gauge__gradient)" />
          </svg>
        </div>
        <div
          className={classNames(
            theme === "dark" ? "raised-dark" : "raised",
            " m-15 flex h-12 w-12 items-center rounded-full",
          )}
        >
          <div
            className={classNames(
              theme === "dark" ? "inset-dark" : "inset",
              "inset m-1 mx-auto rounded-full  p-2",
            )}
          >
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillGague;