import {useSnapshot as _useSnapshot, proxy} from 'valtio';
interface TodoDTO {
    description: string;
    status: string;
    id: number;
}
interface Api<T> {
    list: () => T[];
    details: (id: string) => T;
    create: (todo: T) => void;
    update: (todo: T) => void;
    delete: (todo: T) => void;
}
export abstract class CrudEF<T> {
    protected api: Api<T> | undefined;
    state = proxy<{
        loading: boolean;
        list: T[];
    }>({
        loading: false,
        list: []
    });
    list() {
        if (this.api) {
            this.state.loading = true;
            this.state.list = this.api.list();
            this.state.loading = false;
        }
    }
    details(id: string) {
        if (this.api) {
            this.api.details(id);
        }
    }
    create(atom: T) {
        if (this.api) {
            this.api.create(atom);
        }
    }
    update(atom: T) {
        if (this.api) {
            this.api.update(atom);
        }
    }
    delete(atom: T) {
        if (this.api) {
            this.api.delete(atom);
        }
    }
    useSnapshot() {
        return _useSnapshot(this.state);
    }
}

export class CrudViewStore extends CrudEF<TodoDTO> {
    override api: Api<TodoDTO> = {
        list: function (): TodoDTO[] {
            throw new Error('Function not implemented.');
        },
        details: function (id: string): TodoDTO {
            throw new Error('Function not implemented.');
        },
        create: function (todo: TodoDTO): void {
            throw new Error('Function not implemented.');
        },
        update: function (todo: TodoDTO): void {
            throw new Error('Function not implemented.');
        },
        delete: function (todo: TodoDTO): void {
            throw new Error('Function not implemented.');
        }
    };
    // onAdd(){
    //     this.
    // }
}
