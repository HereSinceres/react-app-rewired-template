import React from 'react';
import {provider, useInstance} from 'react-ioc';

import {TodoViewStore} from './todos.view.store';

let index = 1;
const TodosComponent = () => {
    const viewStore = useInstance(TodoViewStore);
    const {list} = viewStore.useSnapshot();
    return (
        <div>
            <div>{Math.random()}</div>
            {JSON.stringify(list)}
            {viewStore.repo.count}
            <button
                onClick={() => {
                    viewStore.repo.create({
                        description: `${index++}`,
                        status: `${Math.random()}`,
                        id: index++
                    });
                }}
            >
                随机插入todo
            </button>
        </div>
    );
};

export const Todos = provider(TodoViewStore)(TodosComponent);
