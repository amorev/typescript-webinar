import { UserModel } from '../models/user';
import { UsersDatabase } from '../database/users';

let model = null

export const getUserModel = function (): UserModel {
    if (!model) {
        model = new UserModel(new UsersDatabase())
    }
    return model;
}
