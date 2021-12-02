//import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-main container">
        <ItemListContainer greeting="Desafío Consumiendo APIs" />
        <ItemDetailContainer />
      </main>
    </div>
  );
}

export default App;
