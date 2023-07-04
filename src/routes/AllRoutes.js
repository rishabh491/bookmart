import { Routes, Route} from "react-router-dom";
import { HomePage, ProductsList, ProductDetail, CartPage, OrderPage } from "../pages";
import {Login} from "../pages/Login"
import {Register} from "../pages/Register"
import { ProtectedRoutes } from "./ProtectedRoutes";


export const AllRoutes = () => {
  
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register  />}  />
        <Route path="/cart"  element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        <Route path="order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />
    </Routes>
    </>
  )
}
