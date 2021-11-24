//import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-main">
        <ItemListContainer greeting="Desafío Componentes 2" />
      </main>
    </div>
  );
}

export default App;
