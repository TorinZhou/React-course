import { Route } from "react-router-dom";
import { Porducts } from "./pages/Products";
import { Welcome } from "./pages/Welcome";
import { MainHeader } from "./components/MainHeader";
import { ProductItem } from "./pages/ProductItem";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Route path="/" exact>
          <Redirect to="/welcome"></Redirect>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Porducts />
        </Route>
        <Route path="/products/:id">
          <ProductItem />
        </Route>
      </main>
    </div>
  );
}

export default App;
