import { module, test } from 'qunit';

import { setupTest } from 'frontend/tests/helpers';

module('Unit | Adapter | caretaker', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:caretaker');
    assert.ok(adapter);
  });
});
