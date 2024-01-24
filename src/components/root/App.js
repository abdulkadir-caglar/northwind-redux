import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi"
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <Container>
      <Navi/>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/product" element={<Dashboard/>}/>
        <Route exact path="/cart" element={<CartDetail/>}/>
        <Route exact path="/saveproduct:productId" element={<AddOrUpdateProduct/>}/>
      </Routes>
    </Container>
  );
}

export default App;
