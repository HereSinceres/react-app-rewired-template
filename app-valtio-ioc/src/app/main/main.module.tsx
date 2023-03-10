import {provider, useInstance} from 'react-ioc';

import {ViewStore} from './ViewStore';
import {MainPage} from './components/MainPage';
import { Todos } from './components/Todos';

const MainModule = provider(ViewStore)(
    //
    // Services available only within MainModule should be provided here
    //

   () => {
        return (
            <>
                <MainPage />
                <MainPage />
                <Todos />
            </>
        );
    }
);
export default MainModule;
