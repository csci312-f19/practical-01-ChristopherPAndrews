/* eslint-disable no-global-assign, no-underscore-dangle */

const birthday = require('./index');


describe('Determine age based on birthday', () => {
  let _Date;

  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // reset Date
    Date = _Date;
  });

  beforeEach(() => {
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });


  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });

  test('Returns 1 if birthday is one year ago', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });

  test('Returns 1 if birthday is a year + > 12 months', () => {
    expect(birthday.howOld(new Date('12 Dec 2016'))).toBe(1);
  });

  test('Returns 0 if birthday is < year', () => {
    expect(birthday.howOld(new Date('02 Jan 2017'))).toBe(0);
  });

  test('Returns 42 if birthday is 1975-09-15', () => {
    expect(birthday.howOld(new Date('15 Sep 1975'))).toBe(42);
  });
});
