import {Button} from 'antd-mobile';
import React from 'react';
import {provider, useInstance} from 'react-ioc';

import {TodoDTO, TodoViewService} from './todos.view.service';

let index = 1;
const AddButton = () => {
    const viewStore = useInstance(TodoViewService);
    return (
        <>
            <button
                onClick={() => {
                    viewStore.create(new TodoDTO(`${index++}`, `${Math.random()}`, index++));
                }}
            >
                随机插入todo
            </button>
        </>
    );
};
const List = () => {
    const viewStore = useInstance(TodoViewService);
    const {list} = viewStore.useSnapshot();
    return (
        <>
            {(list || []).map(todo => {
                return (
                    <div>
                        {todo.strings}
                    </div>
                );
            })}
        </>
    );
};
const Count = () => {
    const viewStore = useInstance(TodoViewService);
    const {count} = viewStore.useSnapshot();
    return <div>{count}</div>;
};
const TodosComponent = () => {
    return (
        <>
            <Count />
            <List />
            <AddButton />
        </>
    );
};

export const Todos = provider(TodoViewService)(TodosComponent);
