import {provider, useInstance} from 'react-ioc';

import {Todos} from './Todos';
import {CrudViewStore} from './ViewStore';

const MainModule = provider(CrudViewStore)(
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
