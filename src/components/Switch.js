export default function Switch({ isOn, handleSwitch }) {
  return <button onClick={handleSwitch}>{isOn ? "Off" : "On"}</button>;
}
