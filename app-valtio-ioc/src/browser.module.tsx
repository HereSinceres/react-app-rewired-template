import React from 'react';
import {provider} from 'react-ioc';

import {AppModule} from '@/app/app.module';

export const BrowserModule = provider()(() => <AppModule />);
