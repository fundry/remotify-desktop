import { Application } from 'spectron';
import path from 'path';
import electron from 'electron';
import assert from 'assert';

describe('Application launch', function() {
  beforeEach(function() {
    this.app = new Application({
      path: electron,

      args: [path.join(__dirname, '..', '..')],
    });
    return this.app.start();
  });

  afterEach(function() {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it('shows an initial window', function() {
    return this.app.client.getWindowCount().then(function(count) {
      assert.equal(count, 1);
      // Please note that getWindowCount() will return 2 if `dev tools` are opened.
      // assert.equal(count, 2)
    });
  });
});
