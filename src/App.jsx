import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* index or path="/" */}
          <Route path="/" element={<Home />} />
          <Route path="cart" element="my cart" />
          <Route path="login" element={<Login />} />
          <Route path="product">
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
