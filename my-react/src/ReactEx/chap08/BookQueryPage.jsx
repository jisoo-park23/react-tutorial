import { useSearchParams } from 'react-router-dom';

export default function BookQueryPage() {
    // 쿼리 정보 가져오기
    const [ params, setParams ] = useSearchParams(
        { isbn: '979-1-1583-9517-9' }
    );
    return <p>ISBN 코드 {params.get('isbn')}의 페이지입니다.</p>;
}