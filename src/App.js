//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/list/ItemListContainer";
import ItemDetailContainer from "./components/detail/ItemDetailContainer";
import Navbar from "./components/general/Navbar";
import Cart from "./components/cart/Cart";
import { CartContextProvider } from "./components/cart/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <main className="App-main container">
            <Switch>
              <Route exact path="/">
                <ItemListContainer greeting="Página principal" />
              </Route>
              <Route path="/category/:categoryId">
                <ItemListContainer greeting="Categoria" />
              </Route>
              <Route path="/item/:paramId">
                <ItemDetailContainer />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
