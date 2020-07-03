import { Repository } from './lib/repository';
import { Book } from './models/book';

const index = new Repository<Book>();
index.add({
    author: "Anton",
    title: "Awesome typescript"
});
index.add({
    author: "Ivan",
    title: "Awesome php"
});
console.log('current entities', index.entities); //Добавили элемент в репозиторий
const book = index.find('author', 'Anton');
console.log('found', book);

index.delete('author', 'Ivan');
console.log('current entities after delete', index.entities); //Добавили элемент в репозиторий
