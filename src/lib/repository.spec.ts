import { Repository } from './repository';

type Test = {
    title: string,
    id: number
}

test('repository adds element', () => {
    const repository = new Repository<Test>();

    const el: Test = {
        id: 1,
        title: 'asd'
    };
    repository.addElement(el);
    const el2 = repository.getElements();
    expect(el).toEqual(el2[0]);
});


test('element find', () => {
    const repository = new Repository<Test>();

    const el1: Test = {
        id: 1,
        title: 'asd'
    };
    const el2: Test = {
        id: 2,
        title: 'asda'
    };
    repository.addElement(el1);
    repository.addElement(el2);
    expect(repository.findElement('id', 1)).toEqual(el1);
    expect(repository.findElement('id', 2)).toEqual(el2);
    expect(repository.findElement('title', 'asd')).toEqual(el1);
    expect(repository.findElement('title', 'asda')).toEqual(el2);
});


test('element not found', () => {
    const repository = new Repository<Test>();

    const el1: Test = {
        id: 1,
        title: 'asd'
    };
    repository.addElement(el1);
    let actual = repository.findElement('id', 13);
    expect(actual).toEqual(undefined);
});
test('element delete', () => {
    const repository = new Repository<Test>();

    const el1: Test = {
        id: 1,
        title: 'asd'
    };
    const el2: Test = {
        id: 2,
        title: 'asddsad'
    };
    repository.addElement(el1);
    repository.addElement(el2);
    repository.delete('id', 2);
    repository.delete('title', 'asdasd');
    let actual = repository.findElement('id', 2);
    expect(actual).toEqual(undefined);
    let elements = repository.getElements();
    expect(elements.length).toEqual(1);
});
