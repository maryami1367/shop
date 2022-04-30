import { Outlet } from "react-router";
import Footer from "../Footer";

const ProfileLayout = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
}

export default ProfileLayout;