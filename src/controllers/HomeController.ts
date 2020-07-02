import { BaseController } from './BaseController';
import { get, post } from '../decorators/methods';
import { RouterController } from '../decorators/controller';

@RouterController('/')
class HomeController extends BaseController {
    @get('/test')
    public indexHandler() {
        return [
            {
                id: 1,
                name: 'Ali'
            },
            {
                id: 2,
                name: 'Can'
            },
            {
                id: 3,
                name: 'Ahmet'
            }
        ];
    }

    @post('/post')
    public postHandler() {
        return {
            post: true
        };
    }
}

export default HomeController;
