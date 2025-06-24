import {Suspense, lazy} from 'react';
import NowLoading from "./NowLoading.jsx";
import PersonLoading from "./PersonLoading.jsx";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function NestingSuspense() {
    const LazyTitle = lazy(() => sleep(2000).then(() => import('./LazyTitle.jsx')));
    const LazyPerson = lazy(() => sleep(4000).then(() => import('./LazyPerson.jsx')));
    return (
        <Suspense fallback={<NowLoading/>}>
            <LazyTitle/>
            <Suspense fallback={<PersonLoading/>}>
                <LazyPerson/>
            </Suspense>
        </Suspense>
    )
}