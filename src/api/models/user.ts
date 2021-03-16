import { UsersDatabase } from '../database/users';

export type User = {
    name: string,
    id: number
}

export class UserModel {
    constructor(private usersDatabase: UsersDatabase) {
    }

    public async get(id: number): Promise<User> {
        return this.usersDatabase.get(id);
    }

    public async create(userInfo: User): Promise<User> {
        return this.usersDatabase.create(userInfo);
    }

    public async delete(id: number): Promise<boolean> {
        return this.usersDatabase.delete(id);
    }

    public async getAll(): Promise<User[]> {
        return this.usersDatabase.getAll();
    }
}
