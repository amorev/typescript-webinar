type Book = {
    title: string,
    author: string,
    pagesSize?: number,
}

type BookWithoutPageSize = {
    title: string,
    author: string,
}

type Created = Book | null | undefined;

function giveBook(): NonNullable<Created> {
    return undefined;
}

const book = giveBook();
console.log(book);

const B: NonNullable<Book> = null;
