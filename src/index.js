import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TryOut from "./components/TryOut/TryOut";
import DataLine from "./components/DataLine/DataLine";
import AboutPrecision from "./components/AboutPrecision/AboutPrecision";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/try",
        element: <TryOut />
    },
    {
        path: "/data",
        element: <DataLine />
    },
    {
        path: "/system",
        element: <AboutPrecision />
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
