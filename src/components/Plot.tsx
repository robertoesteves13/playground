import { createMemo, For } from "solid-js";

interface PlotProps {
  array: number[]
}

export default function Plot(props: PlotProps) {
  const normals = createMemo(() => {
    let arr = props.array
    let max = Math.max(...arr);
    return arr.map(val => (val / max) * 100);
  });

  console.log(normals);

  return <For each={normals()}>
  { (num) => {
    return <div style={{
      height: `${num}%`,
      width: "1em",
      "background-color": "black"
    }}>
    </div>;
  }}
  </For>;
}
