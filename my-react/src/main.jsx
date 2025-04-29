import {StrictMode} from 'react'
import {createRoot} from "react-dom/client";
import ProfilerBasic from "./ReactEx/chap05/ProfilerBasic.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ProfilerBasic />
    </StrictMode>
)