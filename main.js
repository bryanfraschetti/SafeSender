// Modules to control application life and create native browser window
const {app, ipcMain, dialog, BrowserWindow} = require('electron')
const path = require('path')
const ipc = ipcMain
let {PythonShell} = require('python-shell')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()


  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const fs = require('fs');       // module that interacts with the file system

function uploadImageFile() {

    // opens a window to choose file
    dialog.showOpenDialog({properties: ['openFile']}).then(result => {

        // checks if window was closed
        if (result.canceled) {
            console.log("No file selected!")
        } else {

            // get first element in array which is path to file selected
            const filePath = result.filePaths[0];

            // get file name
            const fileName = path.basename(filePath);

            // path to app data + fileName = "C:\Users\John\AppData\Roaming\app_name\picture.png"
            imgFolderPath = path.join(app.getPath('userData'), fileName);

            // copy file from original location to app data folder
            fs.copyFile(filePath, imgFolderPath, (err) => {
                if (err) throw err;
                console.log(fileName + ' uploaded.');
                console.log(result)
                console.log(imgFolderPath)
            });
        }
    });
}




