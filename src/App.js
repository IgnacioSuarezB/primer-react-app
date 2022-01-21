import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListContainer from "./components/list/ItemListContainer";
import ItemDetailContainer from "./components/detail/ItemDetailContainer";
import Navbar from "./components/general/Navbar";
import Cart from "./components/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import OrderContainer from "./components/order/OrderContainer";
import Login from "./components/login/Login";
import SingUp from "./components/login/SingUp";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App bg2">
      <UserContextProvider>
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
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/singup">
                  <SingUp />
                </Route>
              </Switch>
            </main>
          </BrowserRouter>
        </CartContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
