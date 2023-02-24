import React from 'react';
import {useInstance} from 'react-ioc';

import {ViewStore} from '../../ViewStore';

export const Todos = () => {
    const viewStore = useInstance(ViewStore);
    const {todos} = viewStore.useSnapshot();
    return (
        <div>
            <div>{Math.random()}</div>
            {JSON.stringify(todos)}
            <button
                onClick={() => {
                    viewStore.addTodo({
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
