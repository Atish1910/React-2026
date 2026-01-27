import "./App.css";
import Five from "./components/Five";
import Four from "./components/Four";
import One from "./components/One";
import Six from "./components/Six";
import Three from "./components/Three";
import Two from "./components/Two";
import Seven from "./components/Seven";
import Eight from "./components/Eight";
import Nine from "./components/Nine";
import Ten from "./components/CustomeHook/Ten";

const API = "https://jsonplaceholder.typicode.com/users";
function App() {
  return (
    <>
      <Ten></Ten>
      <Nine API={API}></Nine>
      <One></One>
      <Two></Two>
      <Three></Three>
      <Four></Four>
      <Five></Five>
      <Six></Six>
      <Seven></Seven>
      <Eight></Eight>
    </>
  );
}

export default App;
