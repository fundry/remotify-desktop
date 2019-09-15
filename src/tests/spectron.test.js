import { Application } from 'spectron';
import path from 'path';
import assert from 'assert';

const baseDir = path.join(__dirname, '..');
const electronbinary = path.join(baseDir, 'node_modules', '.bin', 'electron');

// base test block
describe('Should Launch App ', () => {
  setTimeout(() => {}, 3000);

  const app = new Application({
    path: electronbinary,
    args: [baseDir],
  });

  () => app.start();

  () => app.stop();

  it('shows first window', async () => {
    await app.client.waitUntilWindowLoaded();
    const count = await app.client.getWindowCount();
    assert.equal(count, 1);
  });

  //   const number = 5;

  //   it('checks num', function() {
  //     assert.equal(number, 1);
  //   });
});
