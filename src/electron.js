import { app, BrowserWindow } from 'electron'
import { enableLiveReload } from 'electron-compile'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
// let loginWindow

const isDevMode = process.execPath.match(/[\\/]electron/)

if (isDevMode) enableLiveReload({ strategy: 'react-hmr' })

const createWindow = async () => {
  // Create the browser window.

  // loginWindow = new BrowserWindow({
  //   width: 700,
  //   height: 600
  // })

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 770 , 
    'minHeight': 310,
    'minWidth': 310,
    // frame: process.platform != "win32" ? true : false, 
    backgroundColor: "#f4f4f5",
    title: "Remotify"
  })

  // and load the index.html of the app.
  // mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  // Open the DevTools.
  if (isDevMode) {
    mainWindow.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

console.log('hello')

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
