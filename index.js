'use strict';
const electron = require('electron');
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

var forceQuit = false;
let mainWindow = null;

// 起動時に呼び出される
app.on('ready', function()
{
    // ウィンドウを作成する
    mainWindow = new BrowserWindow(
    {
        title: app.getName(),
        'overlay-scrollbars':false,
        "title-bar-style": "hidden-inset",
        'always-on-top': true,

    });
    // ベースとなるHTMLファイル
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // フルスクリーンモードに設定する
    mainWindow.setFullScreen(false);
    //下記のコメントを解除すると、デベロッパツールが起動する
    //mainWindow.webContents.openDevTools();
    //ウィンドウの大きさを決めます
    mainWindow.setSize(500, 650);
    //ウィンドウのサイズを固定にします
    mainWindow.setResizable(false);

    // ウィンドウを閉じるときに呼び出される
    mainWindow.on('close', function(e)
    {
        if (!forceQuit)
        {
            e.preventDefault();
            app.quit();
        }
    });
});

app.on('window-all-closed', function()
{
    // すべてのウィンドウが閉じられたときに、アプリも終了する
    app.quit();
});

app.on('before-quit', function(e)
{
    forceQuit = true;
});

app.on('will-quit', function()
{
    mainWindow = null;
});

app.on('activate', function()
{
    mainWindow.show();
});
