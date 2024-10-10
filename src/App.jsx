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
  const [clicksSinceReset, setClicksSinceReset] = React.useState(0)
	const tooManyClicks = clicksSinceReset >= 4

  const { on, toggle, setOn, setOff } = useToggle({
    modifyStateChange(currentState, changes) {
			if (tooManyClicks) {
				// other changes are fine, but on needs to be unchanged
				return { ...changes, on: currentState.on }
			} else {
				// the changes are fine
				return changes
			}
		},
  });

  function handleClick() {
		toggle()
		setClicksSinceReset((count) => count + 1)
	}

  return (
    <div>
      <button onClick={setOff}>Switch Off</button>
      <button onClick={setOn}>Switch On</button>
      <SwitchForm on={on} onClick={handleClick} />
      {tooManyClicks ? (
				<button onClick={() => setClicksSinceReset(0)}>Reset</button>
			) : null}
    </div>
  );
}

function App() {
  return <Toggle />;
}

export default App;
