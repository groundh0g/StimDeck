import { app, BrowserWindow, BrowserView } from 'electron';
import * as path from 'path';

const createWindow = () => {
    const isDev = !app.isPackaged;

    // const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
    // Create the browser window.
    const win = new BrowserWindow({
        // fullscreen: true,
        // simpleFullscreen: true,
        width: 800,
        height: 600,
        // width,
        // height,
        webPreferences: {
            nodeIntegration: true,
        },
        // maximizable: true,
        show: false,
    });

    const view1 = new BrowserView();
    const view2 = new BrowserView();

    win.addBrowserView(view1);
    view1.setBounds({
        x: 0,
        y: 20,
        width: 300,
        height: 600
    });
    view1.setAutoResize({
        width: false,
        height: true,
        horizontal: false,
        vertical: false,
    });
    // view.webContents.loadURL('https://stimulus.com/explore');

    win.addBrowserView(view2);
    view2.setBounds({
        x: 300,
        y: 20,
        width: 300,
        height: 600
    });
    view2.setAutoResize({
        width: false,
        height: true,
        horizontal: false,
        vertical: false,
    });

    win.maximize();
    win.show();

    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../../build/index.html')}`
    );

    // win.webContents.on("page-title-updated", (event, url) => {
    view1.webContents.loadURL('https://stimulus.com/explore');
    view2.webContents.loadURL('https://stimulus.com/groundh0g');
    // });

    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
    }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => { console.log("A"); createWindow(); console.log("B"); }) .catch(console.error);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// app.on('browser-window-created', (event, win) => { win.maximize(); });
// app.on('ready', (event, win) => { win.maximize(); });

export default {}