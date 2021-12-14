import Switch from "./Switch.js";
import LightBulb from "./LightBulb.js";
import RadColorPicker from "./RadColorPicker.js";

import { useState } from "react";

export default function Content() {
  const [isLightOn, setIsLightOn] = useState(true);
  const [color, setColor] = useState(0);

  const onInput = (hue) => {
    setColor(hue);
  };

  function handleSwitch() {
    setIsLightOn(!isLightOn);
  }
  return (
    <div className="content">
      <div className="control_panel">
        <Switch isOn={isLightOn} handleSwitch={handleSwitch} />
        <RadColorPicker onInput={onInput} />
      </div>

      <LightBulb isOn={isLightOn} color={color} />
    </div>
  );
}
