import React from 'react';
import {useInstance} from 'react-ioc';

import {CrudViewStore} from '../ViewStore';

export const Todos = () => {
    const viewStore = useInstance(CrudViewStore);
    const {list} = viewStore.useSnapshot();
    return (
        <div>
            <div>{Math.random()}</div>
            {JSON.stringify(list)}
            <button
                onClick={() => {
                    viewStore.create({
                        description: '2',
                        status: `${Math.random()}`,
                        id: 0
                    });
                }}
            >
                随机插入todo
            </button>
        </div>
    );
};
