import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/list/ItemListContainer";
import ItemDetailContainer from "./components/detail/ItemDetailContainer";
import Navbar from "./components/general/Navbar";
import Cart from "./components/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import OrderContainer from "./components/order/OrderContainer";

function App() {
  return (
    <div className="App bg2">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <main className="App-main container maxWidth ">
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
              <Route path="/order/:orderId">
                <OrderContainer />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
