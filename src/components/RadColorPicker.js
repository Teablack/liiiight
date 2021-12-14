import ColorPicker from "@radial-color-picker/react-color-picker";
import "@radial-color-picker/react-color-picker/dist/react-color-picker.min.css";

export default function RadColorPicker({ onInput }) {
  return (
    <ColorPicker
      style={{ width: "200px", height: "200px", margin: "auto" }}
      onInput={onInput}
    />
  );
}
