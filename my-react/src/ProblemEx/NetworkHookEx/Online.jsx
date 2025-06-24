import {useState, useEffect } from "react";

export default function Online() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function thatOnline() {
            setIsOnline(true);
        }

        function thatOffline() {
            setIsOnline(false);
        }

        window.addEventListener('online', thatOnline);
        window.addEventListener('offline', thatOffline);

        return () => {
            window.removeEventListener('online', thatOnline);
            window.removeEventListener('offline', thatOffline);
        }
    })
    return (
        <h1>{isOnline ? "✅온라인" : "❌오프라인"}</h1>
    )
}

