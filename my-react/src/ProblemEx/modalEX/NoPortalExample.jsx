import { useState } from 'react';
import ModalContent from "./ModalContent.jsx";
import React from 'react';

export default function NoPortalExample() {
    const [show, setShow] = useState(false);
    // 버튼 클릭 시 핸들러(State 켜기/끄기)
    const handleClick = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }

    return (
        <form>
            <p>포탈 없이 모달 보여주기</p>
            <button type="button" onClick={handleClick} disabled={show}>
                모달 표시
            </button>
            {show && (
                    <ModalContent onClose={handleClose} disabled={show}/>
            )}
        </form>
    );
}
