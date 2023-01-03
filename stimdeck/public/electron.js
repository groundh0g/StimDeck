// const path = require('path');
//
// const { app, BrowserWindow, BrowserView } = require('electron');
// const isDev = require('electron-is-dev');
//
// function createWindow() {
//     // const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
//     // Create the browser window.
//     const win = new BrowserWindow({
//         // fullscreen: true,
//         // simpleFullscreen: true,
//         width: 800,
//         height: 600,
//         // width,
//         // height,
//         webPreferences: {
//             nodeIntegration: true,
//         },
//         // maximizable: true,
//         show: false,
//     });
//
//     const view = new BrowserView();
//
//     win.addBrowserView(view);
//     view.setBounds({
//         x: 0,
//         y: 20,
//         width: 300,
//         height: 600
//     });
//     view.setAutoResize({
//         width: false,
//         height: true,
//         horizontal: false,
//         vertical: false,
//     });
//     // view.webContents.loadURL('https://stimulus.com/explore');
//
//     // console.log("1");
//     win.maximize();
//     // console.log("2");
//     win.show();
//     // console.log("3");
//
//     // // and load the index.html of the app.
//     // console.log("loading");
//     // win.loadFile("index.html");
//     // // win.loadURL("https://joehall.net/");
//     // console.log("loaded");
//     // // win.setTitle('stimdeck - a HUD for stimulus.com');
//     win.loadURL(
//         isDev
//             ? 'http://localhost:3000'
//             : `file://${path.join(__dirname, './build/index.html')}`
//     );
//
//     // win.webContents.on("page-title-updated", (event, url) => {
//         view.webContents.loadURL('https://stimulus.com/explore');
//     // });
//
//     // Open the DevTools.
//     if (isDev || true) {
//         win.webContents.openDevTools({ mode: 'detach' });
//     }
// }
//
// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.whenReady().then(() => { console.log("A"); createWindow(); console.log("B"); }) .catch(console.error);
//
// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });
//
// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow();
//     }
// });
//
// // app.on('browser-window-created', (event, win) => { win.maximize(); });
// // app.on('ready', (event, win) => { win.maximize(); });