import {Outlet} from "react-router-dom";
import PopUp from "./components/PopUp";
import SettingsButton from "./components/SettingsButton";

export const Layout = () => {
    return (
        <div className="relative h-screen max-w-md mx-auto">
            <Outlet />
        
            {/* opop */}
            <PopUp/>
            <SettingsButton/>
        </div>
    )
}
