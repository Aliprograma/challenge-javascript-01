const triangleArea = require('../index');

describe('Test Triangle Area Function', () => {
  test('Calculate Area', () => {
    expect(triangleArea(7, 2)).toEqual(14);
  });
});