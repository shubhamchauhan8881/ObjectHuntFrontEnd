import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import {Layout} from "./Layout.jsx";

import HomePage from './pages/HomePage.jsx';
import PopupContextProvider from './context/PopupContextProvider.jsx';
import GameContextProvider from './context/GameContextProvider.jsx';
import PlayPage from './pages/PlayPage.jsx'
import GamePage from './pages/GamePage.jsx';

const router = createBrowserRouter([
    {
        path:'/',
        exact:true,
        element:<Layout />,
        children:[
            {
                path:'/',
                element:<HomePage />,
            },
            {
                path:'/play',
                element:<PlayPage />,
            },
            {
                path:'/game',
                element:<GamePage/>
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GameContextProvider>
            <PopupContextProvider>
                <RouterProvider router={router} />
            </PopupContextProvider>
        </GameContextProvider>
    </React.StrictMode>,
)
