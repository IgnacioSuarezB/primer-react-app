//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="App-main container">
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="Primera entrega proyecto final" />
            </Route>
            <Route path="/detail/:paramId">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
