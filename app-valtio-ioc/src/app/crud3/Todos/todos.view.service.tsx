import {useSnapshot as _useSnapshot, proxy} from 'valtio';

export class TodoDTO {
    constructor(public description: string, public status: string, public id: number) {}
    get strings() {
        return `${this.id}_${this.description}_${this.status}`;
    }
}

interface TState {
    list: TodoDTO[];
    count: number;
}
abstract class BaseViewService<T> {
    protected state!: T;
    useSnapshot = () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return _useSnapshot(this.state!);
    };
}

export class TodoViewService extends BaseViewService<TState> {
    state: TState = proxy({
        list: [],
        get count() {
            return this.list.length;
        }
    });
    create = (todo: TodoDTO) => {
        this.state.list.push(todo);
    };
}
