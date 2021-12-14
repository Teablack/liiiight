import Header from "./components/Header.js";
import Switch from "./components/Switch.js";
import Main from "./components/LightBulb.js";
import Footer from "./components/Footer.js";
import RadColorPicker from "./components/RadColorPicker.js";
import { useState } from "react";
function App() {
  const [isLightOn, setIsLightOn] = useState(true);
  const [color, setColor] = useState(0);

  const onInput = (hue) => {
    setColor(hue);
  };

  function handleSwitch() {
    setIsLightOn(!isLightOn);
  }
  return (
    <div className="App" id="root">
      {/* <Head />*/}
      <Switch isOn={isLightOn} handleSwitch={handleSwitch} />
      <Main isOn={isLightOn} color={color} />
      {color.hue}
      <RadColorPicker onInput={onInput} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
