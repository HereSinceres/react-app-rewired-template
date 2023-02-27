import {inject} from 'react-ioc';
import {useSnapshot as _useSnapshot, proxy} from 'valtio';

import {TodosRepository} from '../entities/todos.domain';

abstract class BaseViewStore {
    public readonly repo: unknown;
    useSnapshot() {
        return _useSnapshot(this.repo as any);
    }
}

export class TodoViewStore extends BaseViewStore {
    override repo = proxy(new TodosRepository());
}
