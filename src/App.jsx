import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ShopRouters from "./ShopRouters";
import { useEffect } from "react";
import { getProductsFromBE } from './store/products/productsRequest';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getProductsFromBE(dispatch);
  },[dispatch]) 

  return (
      <BrowserRouter>
        <ShopRouters />
      </BrowserRouter> 
  );
}

export default App;
