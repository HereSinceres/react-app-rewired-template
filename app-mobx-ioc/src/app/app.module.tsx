import {Suspense, lazy, useEffect} from 'react';
import {provider, useInstance} from 'react-ioc';

import {FullPageFallbackProgress} from '@/app/common/components/FulPageFallbackProgress';

import { NavigationRecordDataStore } from './main/stores/navigation-record.data-store';

const MainModule = lazy(() => import('./main/main.module'));

export const AppModule = provider(
    //
    // Services available only within DashboardModule should be provided here
    //
    NavigationRecordDataStore
)(() => {
    const navigationRecordDataStore = useInstance(NavigationRecordDataStore);
    useEffect(() => {
        navigationRecordDataStore.initialize();
    }, [])
    
    return (
        <Suspense fallback={<FullPageFallbackProgress />}>
            <MainModule />
        </Suspense>
    );
}); 