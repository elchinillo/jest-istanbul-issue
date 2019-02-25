import helpers from '../helpers';

import '../app';

test('Foo', function () {
  expect(helpers.io.bar()).toBe(true);
});
