import { Repository } from './lib/repository';

interface Book {
    title: string;
    id: number;
    ideal: boolean;
}


const repository = new Repository<Book>();
repository.addElement({
    title: "asda",
    id: 1,
    ideal: true
});

repository.addElement({
    title: "asddasda",
    id: 2,
    ideal: false
});
console.log(repository.getElements());
