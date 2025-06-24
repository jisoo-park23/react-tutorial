import React from 'react';
import { useState } from 'react';

export default function ModalContent({onClose}) {
    const [show, setShow] = useState(false);

    return (
        <div>
            <p>
                모달 내용
            </p>
            <button type="button" onClick={onClose} disabled={show}>
                닫기
            </button>
        </div>

    );

};