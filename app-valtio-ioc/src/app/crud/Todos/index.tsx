import React from 'react';
import {provider, useInstance} from 'react-ioc';

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
            <NestTree />
        </div>
    );
};

const NestTree = provider(CrudViewStore)(
    //
    // Services available only within MainModule should be provided here
    //
   () => {
    const insrtance = useInstance(CrudViewStore);
    const state = insrtance.useSnapshot();
        return (
            <>
               <div onClick={() => {
                    insrtance.create({
                        description: '2',
                        status: `${Math.random()}`,
                        id: 0
                    });
                }}>23123{JSON.stringify(state)}</div>
            </>
        );
    }
);