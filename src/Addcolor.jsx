import { useState } from "react";
import { Colorbox } from "./Colorbox";

export function Addcolor() {
  const [color, setcolor] = useState("pink");
  const inputstyles = {
    backgroundColor: color
  };
  // const colorlist =["orange","green","red"]
  const [colorlist, setcolorlist] = useState(["orange", "green", "red"]);
  return (
    <div>
      <input style={inputstyles} onChange={(event) => setcolor(event.target.value)} value={color} />
      <button onClick={() => setcolorlist([...colorlist, color])}>Add color</button>
      {colorlist.map((clr) => (
        <Colorbox color={clr} />
      ))}
    </div>
  );
}
