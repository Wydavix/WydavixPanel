const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    title: "Legion-Studio - Launcher",
    icon: path.join(__dirname, "./asset/logo.png"),
    width: 1000,
    height: 650,
    frame: false,
    titleBarStyle: "hidden",
    webPreferences:{
      nodeIntegration:true,
      enableRemoteModule:true
    },
  })

  mainWindow.loadURL(path.join(__dirname, "./panel/index.html"))

}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})