import {TodoDTO} from './TodoDTO';
import {BaseRepository} from '../repositories/base/BaseRepository';

export class TodosRepository extends BaseRepository<TodoDTO> {
    override apiClient = {
        create: function (item: TodoDTO): Promise<boolean> {
            return new Promise((resolve, reject) => {
                resolve(true);
            });
        },
        update: function (id: string, item: TodoDTO): Promise<boolean> {
            throw new Error('Function not implemented.');
        },
        delete: function (id: string): Promise<boolean> {
            throw new Error('Function not implemented.');
        },
        find: function (item: TodoDTO): Promise<TodoDTO[]> {
            throw new Error('Function not implemented.');
        },
        findOne: function (id: string): Promise<TodoDTO> {
            throw new Error('Function not implemented.');
        },
        otherApi: function (id: string): Promise<TodoDTO> {
            throw new Error('Function not implemented.');
        }
    };
    otherAction() {
        this.apiClient.otherApi('123');
        throw new Error('Function not implemented.');
    }
}
