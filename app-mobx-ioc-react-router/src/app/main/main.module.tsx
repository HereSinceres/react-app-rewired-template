import {observer} from 'mobx-react-lite';
import {provider, useInstance} from 'react-ioc';

import {MainPage} from './components/MainPage';

const MainModule = provider()(
    //
    // Services available only within MainModule should be provided here
    //

    observer(() => {
        return <MainPage />;
    })
);
export default MainModule;
