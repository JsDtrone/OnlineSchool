import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(1);

  function chengeValue() {
    setValue(event.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        name="radio"
        value="1"
        checked={value == "1" ? true : false}
        onChange={chengeValue}
      />{" "}
      <label className="ms-2 text-md font-medium text-slate-800 me-5">1</label>
      <input
        type="radio"
        name="radio"
        value="2"
        checked={value == "2" ? true : false}
        onChange={chengeValue}
      />
      <label className="ms-2 text-md font-medium text-slate-800 me-5">2</label>
      <input
        type="radio"
        name="radio"
        value="3"
        checked={value == "3" ? true : false}
        onChange={chengeValue}
      />{" "}
      <label className="ms-2 text-md font-medium text-slate-800 me-5">3</label>
    </div>
  );
}

export default App;
