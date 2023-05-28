import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from './components/Product/Product';
import NoPage from './components/NoPage/NoPage';
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";

const ShopRouters = () => {
  return <>
    <Routes>
      <Route path="/" element={<Header />}>  
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="categories/:id" element={<Categories />}/>  
        <Route path="*" element={<NoPage />} /> 
      </Route>
      {/* TODO */}
      {/* <Route path="profile" element={<Profile />} />
     
      <Route path="category" element={<Categories />} />
      <Route path="bucket" element={<Bucket />} />
      <Route path="*" element={<NoPage />} /> */}
    </Routes>
  </>;
};

export default ShopRouters;
