import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NewProduct from './comps/NewProduct';
import ProductList from "./comps/ProductList";
import './App.css';

function App1() {
  return(
    <div>
    <ProductList/>
      <NewProduct/>
    </div>
  );
}

export default App1;
