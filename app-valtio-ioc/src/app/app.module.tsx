import {Suspense, lazy, useEffect} from 'react';
import {provider, useInstance} from 'react-ioc';

import {FullPageFallbackProgress} from '@/app/common/components/FulPageFallbackProgress';

const MainModule = lazy(() => import('./main/main.module'));

export const AppModule = provider(
)(() => { 
    return (
        <Suspense fallback={<FullPageFallbackProgress />}>
            <MainModule />
        </Suspense>
    );
}); 