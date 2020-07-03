import { BaseController } from './BaseController';
import { get, logger, post } from '../decorators/methods';
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
    @logger('home')
    public postHandler() {
        return {
            post: true
        };
    }
}

export default HomeController;
