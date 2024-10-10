import React from "react";
import SwitchForm from "./components/Switch";

function useToggle() {
  const [on, setOnState] = React.useState(false);

  const toggle = () => setOnState((o) => !o);
  const setOn = () => setOnState(true);
  const setOff = () => setOnState(false);

  return { on, toggle, setOn, setOff };
}

function Toggle() {
  const { on, toggle, setOn, setOff } = useToggle();

  return (
    <div>
      <button onClick={setOff}>Switch Off</button>
      <button onClick={setOn}>Switch On</button>
      <SwitchForm on={on} onClick={toggle} />
    </div>
  );
}

function App() {
  return <Toggle />;
}

export default App;
