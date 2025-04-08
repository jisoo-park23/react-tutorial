import {StrictMode} from 'react'
import {createRoot} from "react-dom/client";
import StateTodo from "./ReactEx/chap04/StateTodo.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <StateTodo />
    </StrictMode>
)