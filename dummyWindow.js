imports.gi.versions.Gtk = "3.0";
const { Gtk, Gdk } = imports.gi;

/**
 * On Wayland, making the panel visible is not enough,
 * there is some weird issue that causes the panel to stay invisible,
 * even though it becomes clickable. As a workaround, on Wayland a concealed dumb
 * app with invisible window (always on top) is started. That makes the panel visible.
 * 
 * Credit: github.com/marcinjahn/gnome-peek-top-bar-on-fullscreen-extension
 */
class DummyWindow {
  constructor() {
    this.dummyApp = this.createApp();
  }

  createWindow(app) {
    let win = app.win;
    if (!win) {
      win = new Gtk.ApplicationWindow({
        application: app,
        defaultHeight: 0,
        defaultWidth: 0,
      });
    }
    win.set_keep_above(true);
    win.set_decorated(false);
    win.set_skip_taskbar_hint(true);
    win.set_skip_pager_hint(true);
    win.set_accept_focus(false);

    const screen = Gdk.Screen.get_default();
    const primaryScreen = screen.get_monitor_geometry(0);
    const { x, y } = primaryScreen;
    win.move(x + 100, y + 100);
    win.present();
  }

  createApp() {
    const dummyApp = new Gtk.Application();
    dummyApp.connect("activate", this.createWindow);
    dummyApp.run(null);

    return dummyApp;
  }

  close() {
    this.dummyApp.quit();
  }
}

new DummyWindow();