import React, { useState, useEffect } from "react";
import Header from "./header";
import "./calendar.css";

import dayStyles from "./styles.js";
import buildCalendar from "./buidCalendar";

export default function Calendar({ value, setValue }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    buildCalendar(value);
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar">
      <Header value={value} setValue={setValue} />
      <div className="body">
        <div className="day-names">
          {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((d) => (
            <div>{d}</div>
          ))}
        </div>
        {calendar.map((week) => (
          <div className="week">
            {week.map((day) => (
              <div className="day" onClick={() => setValue(day)}>
                <div className={dayStyles(day, value)}>{day.format("D")} </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
