import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import {Layout} from "./Layout.jsx";

import HomePage from './pages/HomePage.jsx';


const router = createBrowserRouter([
    {
        path:'/',
        exact:true,
        element:<Layout />,
        children:[
            {
                path:'/',
                element:<HomePage />,
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
