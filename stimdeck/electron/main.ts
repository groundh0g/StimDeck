import { app, BrowserWindow, BrowserView } from 'electron';
import * as path from 'path';
import NativeImage = Electron.NativeImage;
import ToDataURLOptions = Electron.ToDataURLOptions;
import {
    SCRIPT_SET_THEME,
    SCRIPT_STRIP_HEADER,
    SCRIPT_HIDE_BLACKLISTED,
} from "./scripts";

const browserViews = [] as BrowserView[];

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
        show: true,
    });

    const view1 = new BrowserView();
    const view2 = new BrowserView();
    const view3 = new BrowserView();

    win.addBrowserView(view1);
    view1.setBounds({
        x: 5,
        y: 105,
        width: 294,
        height: 600
    });
    view1.setAutoResize({
        width: false,
        height: false,
        horizontal: false,
        vertical: false,
    });

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

    win.addBrowserView(view3);
    view3.setBounds({
        x: 590,
        y: 20,
        width: 300,
        height: 600
    });
    view3.setAutoResize({
        width: false,
        height: true,
        horizontal: false,
        vertical: false,
    });

    browserViews.push(view1);
    browserViews.push(view2);
    browserViews.push(view3);

    void win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../../build/index.html')}`
    );
    view1.webContents.on("page-title-updated", () => {
        // registerHideTemu(view1);
        stripMobileHeader(view1); setDarkMode(true);
    });
    // view1.webContents.on("did-finish-load", () => { stripMobileHeader(view1); });
    // view1.webContents.on("page-title-updated", (event, title, explicitSet) => {
    //     stripMobileHeader(view1);
    // });
    view2.webContents.on("page-title-updated", (event, title, explicitSet) => {
        try {
            registerHideTemu(view2);
        } catch(err) {
            alert(err);
        }
        stripMobileHeader(view2);
    });
    view3.webContents.on("page-title-updated", (event, title, explicitSet) => {
        stripMobileHeader(view3);
    });

    void view1.webContents.loadURL('https://stimulus.com/explore');
    void view2.webContents.loadURL('https://stimulus.com/groundh0g');
    void view3.webContents.loadURL('https://stimulus.com/giveaways');
    //void view3.webContents.loadURL('https://www.stimulus.com/senpaithagawd');

    // Open the DevTools?
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
        win.webContents.closeDevTools();
    }

    const captureWebViewContentsAsDataUrl = async (view: BrowserView) => {
        let imageDataUrl = "";
        await view.webContents
            .capturePage()
            .then(img => { imageDataUrl = "data:image/png;base64," + img.toPNG().toString("base64"); })
            .catch((e: Error) => {
                console.error(`There was a problem capturing the '${view.webContents.getTitle()}' browser view.\nERROR: ${e.message}`);
                imageDataUrl = "";
            });
        return imageDataUrl;
    };

    const stripMobileHeader = (view: BrowserView) => {
        void view.webContents.executeJavaScript(SCRIPT_STRIP_HEADER);
    };

    const setDarkMode = (isDarkMode = false) => {
        browserViews.forEach((view, index, array) => {
            void view.webContents.executeJavaScript(SCRIPT_SET_THEME(isDarkMode));
        });
    };

    const registerHideTemu = (view: BrowserView) => {
        void view.webContents.executeJavaScript(SCRIPT_HIDE_BLACKLISTED);
    };

    const resizeViews = (y = 109, dh = 97) => {
        const bounds = win.getContentBounds();

        browserViews.forEach((view, index, array) => {
            view.setBounds({
                x: 6 + index * 306,
                y: y,
                width: 294,
                height: bounds.height - dh
            });
        });
    };

    win.on("maximize", () => { resizeViews(); });
    win.on("unmaximize", () => { resizeViews(); });
    win.on("resize", () => { resizeViews(); });
    win.webContents.on("leave-html-full-screen", () => { resizeViews(); });

    // TODO: needs some love
    win.webContents.on("enter-html-full-screen", () => {
        resizeViews(20, 300);
        //
        // const bounds = win.getContentBounds();
        // // const views = win.getBrowserViews();
        //
        // browserViews.forEach((view, index, array) => {
        //     view.setBounds({
        //         x: 6,
        //         y: 20,
        //         width: 294,
        //         height: bounds.height - 300
        //     })
        // });
    });

    win.maximize();
    // win.show();

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => { createWindow(); }).catch(console.error);

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

export { };