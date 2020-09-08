import { SomeLib } from './SomeLib';

const handler = new SomeLib();


test('handler random int', () => {
    let randomInt = handler.getRandomInt(10);
    expect(randomInt).toBeLessThanOrEqual(10);
    expect(randomInt).not.toBeGreaterThan(10)
});

test('handler rating', () => {
    let randomInt = handler.getLibRating();
    expect(randomInt).toBeLessThanOrEqual(10);
    expect(randomInt).not.toBeGreaterThan(10)
});
