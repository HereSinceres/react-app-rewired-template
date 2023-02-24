import {Fragment, useRef} from 'react';
import {provider, useInstance} from 'react-ioc';

import {ViewStore} from '../../ViewStore';
import c from './index.module.scss';

const MainPageComponent = () => {
    const viewStore = useInstance(ViewStore);
    const {name, count} = viewStore.useSnapshot();
    return (
        <div className={c.page}>
            <div>{Math.random()}</div>
            <div>{name}</div>
            <div>{count}</div>
            <button
                onClick={() => {
                    viewStore.setName(`${Math.random()}`);
                }}
            >
                Random
            </button>
        </div>
    );
};

export const MainPage = provider()(MainPageComponent);
