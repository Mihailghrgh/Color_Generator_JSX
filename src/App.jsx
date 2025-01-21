import { useState } from "react";
import ColorList from "./ColorList.JSX";
import Form from "./Form.JSX";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f88076").all(10));

  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  ////WHO DID THE MESS?
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} setColors={setColors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
