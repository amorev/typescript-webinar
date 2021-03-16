import {
    Router,
} from 'express';
import { post, get, del } from '../decorators/http';
import { Route } from '../lib/types';
import { UserModel } from '../models/user';
import { getUserModel } from '../helpers/user';

export class UserController {
    public router = Router();

    private userModel: UserModel;

    public constructor(userModel: UserModel) {
        const constructor: any = this.constructor;
        const routes: Route[] = constructor.routes;
        routes.forEach(route => {
            this.router[route.method](route.path, route.handler);
        });
        this.router.delete('/:id', (req, res) => {
            res.send(this.deleteUserAction(req.params.id));
        });
        this.userModel = userModel;
        console.log(userModel);
    }

    @post('/')
    async createUserAction(req) {
        const body = req.body;
        return await getUserModel().create(body);
    }

    @del('/:id')
    async deleteUserAction(req) {
        return await getUserModel().delete(req.params.id);
    }

    @get('/:id')
    async getSingleUser(req) {
        return await getUserModel().get(req.params.id)
    }

    @get('/')
    async getAllUsersAction() {
        let users = await getUserModel().getAll();
        console.log(users);
        return users;
    }
}
