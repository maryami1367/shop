import { Route, Routes, Navigate } from "react-router";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Factor from './../pages/Factor';
import Dashboard from "./Dashboard";
import MainLayout from './layout/MainLayout';
import ProfileLayout from "./layout/ProfileLayout";

const MainRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="/" element={<MainLayout />}>
                <Route path="/product" element={<Products />} />
                <Route path="/" element={<Navigate to="/product" />} />
                <Route path="/product/:id" element={<Details />} />
                <Route path="/factor" element={<Factor />} />
            </Route>

            <Route path="/profile" element={<ProfileLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>

        </Routes>
    );
}

export default MainRouter;