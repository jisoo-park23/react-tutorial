import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from "./ModalContent.jsx";

export default function PortalExample() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <form>
            <p>포탈로 모달 보여주기</p>
            <button type="button" onClick={handleClick} disabled={show}>
                모달 표시
            </button>
            {show && createPortal(
                <ModalContent onClose={handleClose} />,
                document.getElementById('dialog')
            )}
        </form>
    );
}
