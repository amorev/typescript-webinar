import {
    Router,
} from 'express';
import { post, get, del } from '../decorators/http';
import { Route } from '../lib/types';
import { UserModel } from '../models/user';
import { getUserModel } from '../helpers/user';
import { logger } from '../decorators/logger';

export class UserController {
    public router = Router();

    private userModel: UserModel;

    public constructor() {
        const constructor: any = this.constructor;
        const routes: Route[] = constructor.routes;
        routes.forEach(route => {
            this.router[route.method](route.path, route.handler);
        });
        this.router.delete('/:id', (req, res) => {
            res.send(this.deleteUserAction(req.params.id));
        });
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

    @logger('users.get')
    @get('/')
    async getAllUsersAction() {
        let users = await getUserModel().getAll();
        console.log(users);
        return users;
    }
}
