import {useSnapshot as _useSnapshot, proxy} from 'valtio';

export class ViewStore {
    state = proxy({
        count: 0,
        name: 'foo'
    });

    setName(name: string) {
        this.state.count = this.state.count + 1;
        this.state.name = name;
    }
    useSnapshot() {
        return _useSnapshot(this.state);
    }
}
