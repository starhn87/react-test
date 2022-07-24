import { sum, person, toggle, range } from './util';

describe('test util.js file', () => {
  it('sums 27 + 43 to equal 60', () => {
    expect(sum(27, 43)).toBe(60);
  });

  it('make a person', () => {
    expect(person('Jin', 28)).toEqual({
      name: 'Kim',
      age: 28,
    });
  });

  it('return false', () => {
    expect(toggle(true)).toBeFalsy();
    expect(toggle(true)).not.toBeTruthy();
  });

  it('contains 9', () => {
    expect(range(8, 10)).toContain(9);
  });
});
