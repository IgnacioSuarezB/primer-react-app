//import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <ItemListContainer greeting="Esto es un título h1" />
      </header>
    </div>
  );
}

export default App;
