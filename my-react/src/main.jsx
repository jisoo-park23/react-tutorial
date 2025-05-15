import React, { StrictMode } from 'react';  // React import 추가
import { createRoot } from 'react-dom/client';
import ErrorEventRoot from "./ReactEx/chap05/ErrorEventRoot.jsx";
import PortalExample from "./ReactEx/modalEX/PortalExample.jsx";
import NoPortalExample from "./ReactEx/modalEX/NoPortalExample.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NoPortalExample/>
        <PortalExample/>
    </StrictMode>
);
