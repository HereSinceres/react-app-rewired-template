import {provider, useInstance} from 'react-ioc';

import {Todos} from './Todos';

const MainModule = provider()(
    //
    // Services available only within MainModule should be provided here
    //

    () => {
        return (
            <>
                <Todos />
            </>
        );
    }
);
export default MainModule;
