import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import routesHandle from "./ReactEx/chap08/routesHandle.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HelmetProvider>
            <RouterProvider router={routesHandle}/>
        </HelmetProvider>
    </StrictMode>
);
