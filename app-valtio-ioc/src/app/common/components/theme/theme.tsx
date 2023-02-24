import {observer} from 'mobx-react-lite';
import React, {PropsWithChildren} from 'react';
import {useInstance} from 'react-ioc';

import {ThemeDataStore} from '@/app/common/stores/theme.data-store';

export const Theme: React.FC<PropsWithChildren> = observer(({children}) => {
    const themeStore = useInstance(ThemeDataStore);
    return <div className={themeStore.theme}>{children}</div>;
});
