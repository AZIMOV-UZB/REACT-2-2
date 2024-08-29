import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import Wishlist from "./pages/wishlist/wishlist";
import Cart from "./pages/cart/cart";
import Auth from "./pages/auth/auth";
import Login from "./pages/login/Login";
import Profil from "./pages/admin/Profil";
import User from "./pages/admin/User";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Auth />}>
            <Route path="" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Admin/*" element={<Admin/>}>
          <Route path="profil" element={<Profil/>} />
          <Route path="user" element={<User/>} />
        </Route>
          </Route>
        </Route>{" "}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
