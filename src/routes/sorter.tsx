import { createStore, produce } from "solid-js/store";
import { Title } from "solid-start";
import Plot from "../components/Plot";


export default function Sorter() {
  let [array, setArray] = createStore([2,5,1,4,3]);

  const sort = () => {
    setArray(produce((arr) => arr.sort()));
  };

  return (
    <main>
      <Title>Sorter</Title>
      <div style={{
        display: "flex",
        "flex-direction": "row",
        "align-items": "flex-end",
        width: "fit-content",
        padding: "0.5em",
        height: "25%",
        "min-height": "100px",
        gap: "1em"
      }}>
        <Plot array={array}/>
        <button onClick={sort}>Sort</button>
      </div>
    </main>
  );
}
