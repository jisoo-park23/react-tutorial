import React, { StrictMode } from 'react';  // React import 추가
import { createRoot } from 'react-dom/client';
import MyThemeProvider from "./ReactEx/chap07/MyThemeProvider.jsx";
import HookThemeButton from "./ReactEx/chap07/HookThemeButton.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MyThemeProvider>
            <HookThemeButton />
        </MyThemeProvider>
    </StrictMode>
);
