const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
require('dotenv').config();

const TARGET_URL = process.env.OPENWEBUI_URL || 'https://sleaky.chat';

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'customButtonsOnHover',
    icon: path.join(__dirname, 'media', 'openwebui-icon.icns'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      partition: 'persist:sleakychat'
    }
  });

  win.loadURL(TARGET_URL);

  // Open external links in the system browser
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.startsWith(TARGET_URL)) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  win.on('page-title-updated', e => e.preventDefault());
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
