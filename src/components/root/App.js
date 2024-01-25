import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi"
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi/>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/product" element={<Dashboard/>}/>
        <Route exact path="/cart" element={<CartDetail/>}/>
        <Route path="/saveproduct" element={<AddOrUpdateProduct/>}/>
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct/>}/>
        <Route element={<NotFound/>}/>
      </Routes>
    </Container>
  );
}

export default App;
