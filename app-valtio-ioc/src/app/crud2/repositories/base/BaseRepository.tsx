import {ApiClient} from './ApiClient';
// repositories/interfaces

export interface IWrite<T> {
    create(item: T): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}

export interface IRead<T> {
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T>;
}

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    protected  readonly apiClient: ApiClient<T> | undefined;

    loading = false;
    list: T[] = [];

    get count() {
        return this.list.length;
    }
    async create(item: T): Promise<boolean> {
        this.loading = true;
        await this.apiClient?.create(item);
        this.list.push(item);
        this.loading = false;
        throw new Error('Method not implemented.');
    }
    update(id: string, item: T): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    find(item: T): Promise<T[]> {
        throw new Error('Method not implemented.');
    }
    findOne(id: string): Promise<T> {
        throw new Error('Method not implemented.');
    }
}
