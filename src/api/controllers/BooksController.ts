import {
    Router
} from 'express';

export class BooksController {
    public router = Router();

    public constructor() {
        this.router.get('/', (req, res) => {
            res.send(this.getAllBooksAction());
        });
        this.router.delete('/:id', (req, res) => {
            res.send(this.deleteBookAction(req.params.id));
        });
        this.router.post('/', (req, res) => {
            res.send(this.createBookAction(req.body));
        });
    }

    createBookAction(BookInfo: any) {

    }

    deleteBookAction(id: number) {

    }

    // @get('/')
    getAllBooksAction() {
        return [
            {
                id: 1,
                name: 'anton'
            }
        ];
    }
}
