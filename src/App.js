import React, { useState } from "react";
import moment from "moment";
import "./styles.css";

import Calendar from "./components/calendar.jsx";

export default function App() {
  const [value, setValue] = useState(moment());
  return (
    <div className="App">
      <Calendar value={value} setValue={setValue} />
    </div>
  );
}
