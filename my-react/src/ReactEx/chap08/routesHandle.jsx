import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import TopPage from './TopPage';
import BookPage from './BookPage';
import RouterParam from './RouterParam';

// handle 속성으로 메타 정보 정의
const routesHandle = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam />}>
            <Route path="/" element={<TopPage />} handle={{
                title: '홈',
                keywords: '리액트, 라우터, 자바스크립트',
                description: '리액트 라우터에 대한 설명 샘플입니다.'
            }} />
            <Route path="/book/:isbn?" element={<BookPage />} handle={{
                title: '도서상세 - %s',
                keywords: '리액트, %s',
                description: '%s'
            }} />
        </Route>
    )
);

export default routesHandle;