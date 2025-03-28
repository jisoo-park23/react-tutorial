import {StrictMode, useState} from 'react'
import {createRoot} from "react-dom/client";
import StyledPanel from "./ReactEx/StyledPanel.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <StyledPanel>
            //children 프로퍼티
            <p>회원 모집중!</p>
            <p>위키북스 프로젝트에 오신것을 환영합니다!!</p>
        </StyledPanel>
    </StrictMode>
)