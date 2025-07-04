import React from 'react';
import { useRecoilState } from 'recoil';
import { counterAtom } from './store/atom';



export default function RecoilCounter() {
  // Recoil 관리하에 값과 세터를 가져온다.
  const [counter, setCounter] = useRecoilState(counterAtom);

  const handleClick = () => {
    setCounter(c => c + 1);
    // setCounter(counter + 1);
  };

  return (
    <>
      <button onClick={handleClick}>카운트</button>
      <p>{counter}번 클릭되었습니다. </p>
    </>
  );
};
