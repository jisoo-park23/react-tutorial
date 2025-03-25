import {StrictMode} from 'react'
import {createRoot} from "react-dom/client";
import ForNest from "./ForNest.jsx";
import books from "./books";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ForNest src={books} />
    </StrictMode>
)