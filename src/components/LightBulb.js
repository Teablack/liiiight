import lightbulb from "../res/lightbulb.png";
import "../style/lightbulb.css";

export default function LightBulb({ isOn, color }) {
  return (
    <>
      <div className="lightbulb_box">
        <img className="lightbulb" src={lightbulb} alt="lightbulb" />
        <div
          className="light"
          style={
            isOn
              ? {
                  background: `radial-gradient(circle,  hsl(0, 0%, 100%) 0%, hsla(${color}, 100%, 50%, 1) 25%, hsl(0, 0%, 100%) 75%)`,
                }
              : null
          }
        ></div>
      </div>
    </>
  );
}
