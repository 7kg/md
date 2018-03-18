const {app, BrowserView, BrowserWindow, dialog, globalShortcut, Menu} = require('electron');



console.log(app.getAppPath());
console.log(app.getPath('home'));
console.log(app.getPath('appData'));
console.log(app.getPath('exe'));
console.log(app.getPath('desktop'));
console.log(app.getName());
console.log(app.getLocale());
console.log(app.setBadgeCount(2));
console.log(app.getBadgeCount());
app.dock.bounce('informational')

app.commandLine.appendSwitch('remote-debugging-port', '8315')
app.commandLine.appendSwitch('host-rules', 'MAP * 127.0.0.1')

app.on('ready', function(){
    let win = new BrowserWindow({width: 800, height: 600, frame: true, transparent: false, show: true, backgroundColor: '#2e2c29', alwaysOnTop: false, skipTaskbar: false, autoHideMenuBar: true, vibrancy: 'dark', zoomFactor: 3.0})
    // const {width, height} = require('electron').screen.getPrimaryDisplay().workAreaSize
    // let win = new BrowserWindow({width, height})
    win.on('closed', () => {
        win = null
    })
    // win.webContents.openDevTools ()

    win.loadURL(`file://${__dirname}/video.html`)

    // win.previewFile('./')

    win.setProgressBar(0.5)
    win.setHasShadow(true)

    // const ret = globalShortcut.register('CommandOrControl+X', () => {
    //   console.log('CommandOrControl+X is pressed')
    // })
  
    // if (!ret) {
    //   console.log('registration failed')
    // }
  
    // // 检查快捷键是否注册成功
    // console.log(globalShortcut.isRegistered('CommandOrControl+X'))

    const template = [
        {
          label: 'Edit',
          submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {type: 'separator'},
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'},
            {role: 'pasteandmatchstyle'},
            {role: 'delete'},
            {role: 'selectall'}
          ]
        },
        {
          label: 'View',
          submenu: [
            {role: 'reload'},
            {role: 'forcereload'},
            {role: 'toggledevtools'},
            {type: 'separator'},
            {role: 'resetzoom'},
            {role: 'zoomin'},
            {role: 'zoomout'},
            {type: 'separator'},
            {role: 'togglefullscreen'}
          ]
        },
        {
          role: 'window',
          submenu: [
            {role: 'minimize'},
            {role: 'close'}
          ]
        },
        {
          role: 'help',
          submenu: [
            {
              label: 'Learn More',
              click () { require('electron').shell.openExternal('https://electronjs.org') }
            }
          ]
        }
    ]
      
    if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        {role: 'about'},
        {type: 'separator'},
        {role: 'services', submenu: []},
        {type: 'separator'},
        {role: 'hide'},
        {role: 'hideothers'},
        {role: 'unhide'},
        {type: 'separator'},
        {role: 'quit'}
      ]
    })

    // Edit menu
    template[1].submenu.push(
      {type: 'separator'},
      {
        label: 'Speech',
        submenu: [
          {role: 'startspeaking'},
          {role: 'stopspeaking'}
        ]
      }
    )

    // Window menu
    template[3].submenu = [
      {role: 'close'},
      {role: 'minimize'},
      {role: 'zoom'},
      {type: 'separator'},
      {role: 'front'}
    ]
    }

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
const {shell} = require('electron')
  
  shell.openExternal('https://github.com')
  // shell.beep()

    // dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
    // dialog.showSaveDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
    // dialog.showMessageBox({type: 'info', message: 'message', detail: 'detail', title: 'title', buttons: ['a', 'b']})
    // dialog.showErrorBox('title', 'content');


    // let contents = win.webContents
    // console.log(contents)

    // win.flashFrame(true)
    // win.setKiosk(true)
    // win.loadURL(`https://github.com`)
    // win.once('ready-to-show', function(){
    //     win.show();
    // })
    // let child = new BrowserWindow({frame: true,parent: win, modal: true, show: false, width: 500, height: 300, center: true})
    // child.loadURL('https://www.baidu.com')
    // child.once('ready-to-show', () => {
    //     child.show()
    // })
    // child.on('closed', () => {
    //     child = null
    // })

    // const electron = require('electron')
    // let displays = electron.screen.getAllDisplays()
    // let externalDisplay = displays.find((display) => {
    //   return display.bounds.x !== 0 || display.bounds.y !== 0
    // })
  
    // if (externalDisplay) {
    //   win = new BrowserWindow({
    //     x: externalDisplay.bounds.x + 50,
    //     y: externalDisplay.bounds.y + 50
    //   })
    //   win.loadURL('https://github.com')
    // }
});

// app.quit();