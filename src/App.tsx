import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProductPage from "./components/ProductPage";
import Signup from "./components/Signup";
import CartPage from "./components/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<ProductPage />}></Route>
          <Route path="/cartpage" element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
