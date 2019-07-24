import { app, BrowserWindow, ipcMain, Tray, Menu } from 'electron';
// import { enableLiveReload } from 'electron-compile';
import path from 'path';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let appIcon = null;
let authWindow;
const isDevMode = process.execPath.match(/[\\/]electron/);

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 780,
    minHeight: 600,
    minWidth: 600,
    show: true,
    frame: true,
    backgroundColor: '#f4f4f5',
    title: 'Remotify',
  });

  // authWindow = new BrowserWindow({
  //   width: 550,
  //   height: 480,    
  //   show: false,
  //   minHeight: 310,
  //   minWidth: 310,
  //   frame: false,
  //   backgroundColor: '#f4f4f5',
  //   title: 'Remotify',
  // });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // Open the DevTools.
  // if (isDevMode) {
  //   mainWindow.webContents.openDevTools();
  // }

  // authWindow.loadURL(`file://${__dirname}/login.html`);
  // Open the DevTools.
  // if (isDevMode) {
  //   mainWindow.webContents.openDevTools();
  // }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// console.log('hello');

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.on('authenticate-user', (event, arg) => {
  authWindow.show();
  mainWindow.hide();
});

ipcMain.on('authenticated', (event, arg) => {
  authWindow.hide();
  mainWindow.show();
});

ipcMain.on('create-tray', (event) => {
  const icon = process.platform === 'win32' ? 'win.png' : 'win.png';
  const iconPath = path.join(__dirname, icon);
  appIcon = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Remove',
      click: () => {
        event.sender.send('remove-tray');
      },
    },
  ]);

  appIcon.setToolTip('Remotify');
  appIcon.setContextMenu(contextMenu);
});

ipcMain.on('delete-tray', (event, arg) => {
  appIcon.destroy();
});
