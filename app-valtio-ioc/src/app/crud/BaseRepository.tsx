// entities
export class Spartan {
    private name: string;
    private kills: number;

    constructor(name: string, kills: number) {
        this.name = name;
        this.kills = kills;
    }
}

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

interface ApiClient {}

// repositories/base
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
    public readonly _apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this._apiClient = apiClient;
    }
    create(item: T): Promise<boolean> {
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

export class SpartanRepository extends BaseRepository<Spartan> {
    // here, we can create all especific stuffs of Spartan Repository
    countOfSpartans(): Promise<number> {
        return this._apiClient.count({});
    }
}
