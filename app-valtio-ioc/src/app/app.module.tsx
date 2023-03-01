import {Suspense, lazy, useEffect} from 'react';
import {provider, useInstance} from 'react-ioc';

import {FullPageFallbackProgress} from '@/app/common/components/FulPageFallbackProgress';

const MainModule = lazy(() => import('./main/main.module'));
const CrudModule = lazy(() => import('./crud/crud.module'));
const Crud2Module = lazy(() => import('./crud2/crud.module'));
const Crud3Module = lazy(() => import('./crud3/crud.module'));
export const AppModule = provider()(() => {
    return (
        <Suspense fallback={<FullPageFallbackProgress />}>
            {/* <MainModule /> */}
            {/* <CrudModule />
            <Crud2Module /> */}
            <Crud3Module />
        </Suspense>
    );
});
