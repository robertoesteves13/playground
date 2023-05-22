import { createStore, produce } from "solid-js/store";
import { Title } from "solid-start";
import Plot from "../components/Plot";


export default function Sorter() {
  let [array, setArray] = createStore([2,5,1,4,3]);

  const sort = () => {
    // FIXME(roberto): javascript being javascript...
    setArray(produce((arr) => arr.sort()));
    console.log(array)
  };

  const randomize = () => {
    setArray(produce((arr) => {
      for (let i = 0; i < arr.length; ++i) {
        let random = Math.floor(Math.random() * arr.length);

        let swap = arr[i];
        arr[i] = arr[random];
        arr[random] = swap;
      }
    }));
  };

  const resizeArray = (size: number) => {
    let array = [];
    for (let i = 0; i < size; ++i) {
        array.push(i+1);
    }
    setArray(array);
    console.log(array.length);
  }


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
        <button onClick={randomize}>Randomize</button>
        <input type="number" value={array.length} onChange={(e) => resizeArray(Number.parseInt(e.target.value))}></input>
      </div>
    </main>
  );
}
