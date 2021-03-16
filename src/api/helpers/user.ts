import { UserModel } from '../models/user';

let model = null

export const getUserModel = function (): UserModel {
    if (!model) {
        model = new UserModel()
    }
    return model;
}
