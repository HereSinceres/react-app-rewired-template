// repositories/interfaces

interface IWrite<T> {
    create(item: T): Promise<boolean>;
    update(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}

interface IRead<T> {
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T>;
}

// repositories/base
export abstract class ApiClient<T> implements IWrite<T>, IRead<T> {
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
