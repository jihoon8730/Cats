import Cats from "./component/Cats/Cats";
import "./App.css";

function App() {
  return (
    <>
      <Cats keywordSearch={"ca"} />
      <Cats keywordSearch={"b"} />
      <Cats keywordSearch={"c"} />
      <Cats keywordSearch={"d"} />
      <Cats keywordSearch={"f"} />
    </>
  );
}

export default App;
