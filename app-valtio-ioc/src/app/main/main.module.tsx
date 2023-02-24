import {observer} from 'mobx-react-lite';
import {provider, useInstance} from 'react-ioc';

import {ViewStore} from './ViewStore';
import {MainPage} from './components/MainPage';

const MainModule = provider(ViewStore)(
    //
    // Services available only within MainModule should be provided here
    //

    observer(() => {
        return (
            <>
                <MainPage />
                <MainPage />
            </>
        );
    })
);
export default MainModule;
