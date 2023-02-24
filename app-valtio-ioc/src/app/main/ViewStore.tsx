import {useSnapshot as _useSnapshot, proxy} from 'valtio';
type Todo = {
    description: string;
    status: string;
    id: number;
};

export class ViewStore {
    state = proxy<{
        count: number;
        name: string;
        todos: Todo[];
    }>({
        count: 0,
        name: 'foo',
        todos: []
    });

    setName(name: string) {
        this.state.count = this.state.count + 1;
        this.state.name = name;
    }
    useSnapshot() {
        return _useSnapshot(this.state);
    }
    addTodo(todo: Todo) {
        this.state.todos.push(todo);
    }
}
