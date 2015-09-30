/// <reference path="../typings/tsd.d.ts" />
/// <reference path="AppMain.ts" />

require(['AppMain'], (main) => {
    var appMain = new main.AppMain();
    appMain.run();
});