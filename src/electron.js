// i need to split this file later !!
import { app, BrowserWindow, ipcMain, Tray, Menu, dialog } from 'electron';
// import { enableLiveReload } from 'electron-compile';
import path from 'path';
import storage from 'electron-json-storage';

let mainWindow;
let appIcon = null;
let authWindow;
// const isDevMode = process.execPath.match(/[\\/]electron/);

// if (isDevMode) enableLiveReload({ strategy: 'react-hmr' });

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 810,
    minHeight: 670,
    minWidth: 670,
    show: true,
    frame: true,
    backgroundColor: '#f4f4f5',
    title: 'Remotify',
  });

  authWindow = new BrowserWindow({
    width: 550,
    height: 480,
    show: false,
    minHeight: 310,
    minWidth: 310,
    frame: true,
    backgroundColor: '#f4f4f5',
    title: 'Remotify',
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  // Open the DevTools.
  // if (isDevMode) {
  //   mainWindow.webContents.openDevTools();
  // }

  authWindow.loadURL(`file://${__dirname}/login.html`);
  // // Open the DevTools.
  // // if (isDevMode) {
  // //   mainWindow.webContents.openDevTools();
  // // }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  authWindow.on('closed', () => {
    authWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('activate', () => {
  if (authWindow === null) {
    createWindow();
  }
});

// to select user files in file  component
ipcMain.on('open-file-dialog', (event, arg) => {
  dialog.showOpenDialog(
    {
      properties: ['openFile', 'openDirectory'],
    },
    (files) => {
      if (files) {
        event.sender.send('selected-directory', files);
      }
    }
  );
});

// to select user files in file  component
ipcMain.on('open-music-dialog', (event, arg) => {
  dialog.showOpenDialog(
    {
      properties: ['openDirectory'],
    },
    (files) => {
      if (files) {
        event.sender.send('selected-directory', files);
      }
    }
  );
});

// testing local-json-storage
ipcMain.on('test-storage', (event, arg) => {
  const data = arg;

  console.log('data ' + data);
  storage.set('settings', { name: data }, function(error) {
    if (error) {
      console.log(error);
    }
  });
});

ipcMain.on('retrieve-storage', () => {
  storage.get('settings', function(error, data) {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });
});

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
