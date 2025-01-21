import SingleColor from "./SingleColor.JSX";
import { nanoid } from "nanoid";
const ColorList = ({ colors, setColors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor color={color} index={index} key={nanoid()} />;
      })}
    </section>
  );
};
export default ColorList;
