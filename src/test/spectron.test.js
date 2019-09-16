import { Application } from 'spectron';
import path from 'path';
import assert from 'assert';
import 'regenerator-runtime/runtime';

const baseDir = path.join(__dirname, '..');
const electronbinary = path.join(baseDir, 'node_modules', '.bin', 'electron');

// base test block
describe('Should Launch App ', () => {
  const app = new Application({
    path: electronbinary,
    args: [baseDir],
  });

  // app.start().then(function() {
  //   // Check if the window is visible

  //   return app.browserWindow.isVisible();
  // });

  beforeEach(() => app.start());

  // afterEach(() => app.stop());

  it('shows first window', async () => {
    await app.client.waitUntilWindowLoaded();
    const count = await app.client.getWindowCount();
    assert.equal(count, 1);
  });
});
