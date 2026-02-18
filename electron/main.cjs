const { app, BrowserWindow } = require("electron");

const START_URL = "http://localhost:3000/tournaments";

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false
  });

  win.loadURL(START_URL);

  win.once("ready-to-show", () => {
    win.show();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
