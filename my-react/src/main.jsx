import {StrictMode} from 'react'
import {createRoot} from "react-dom/client";
import EventOnce from "./ReactEx/EventOnce.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <EventOnce/>
    </StrictMode>
)