import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import { SkeletonTheme } from "react-loading-skeleton";
function App() {
  return (
    <div className="App overflow-hidden">
      <SkeletonTheme
        baseColor="#e3e3e3"
        highlightColor="#f2f2f2"
      ></SkeletonTheme>
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
      <SkeletonTheme />
    </div>
  );
}

export default App;
