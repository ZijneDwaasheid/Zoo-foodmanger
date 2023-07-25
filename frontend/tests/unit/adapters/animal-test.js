import { module, test } from 'qunit';

import { setupTest } from 'frontend/tests/helpers';

module('Unit | Adapter | animal', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:animal');
    assert.ok(adapter);
  });
});
