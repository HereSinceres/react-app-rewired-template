import React from 'react';
import {provider} from 'react-ioc';

import {AppModule} from '@/app/app.module';
import {Theme} from '@/app/common/components/theme/theme';
import {ThemeDataStore} from '@/app/common/stores/theme.data-store';

export const BrowserModule = provider(ThemeDataStore)(() => (
    <Theme>
        <AppModule />
    </Theme>
));


