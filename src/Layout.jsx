import {Outlet} from "react-router-dom";
import PopUp from "./components/PopUp";

export const Layout = () => {
    return (
        <div className="relative h-screen max-w-md mx-auto">
            <Outlet />
        
            {/* opop */}
            <PopUp/>
        </div>
    )
}
