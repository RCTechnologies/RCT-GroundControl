import test from 'ava';
import {Application} from 'spectron';

test.beforeEach(async t => {
    if(process.platform === "darwin"){
        t.context.app = new Application({
            path: './out/rct-groundcontrol-darwin-x64/rct-groundcontrol.app/Contents/MacOS/rct-groundcontrol'
        });
    }else{
        t.context.app = new Application({
            path: './out/rct-groundcontrol-linux-x64/rct-groundcontrol'
        });
    }

    await t.context.app.start();
});

test.afterEach.always(async t => {
    await t.context.app.stop();
});

test(async t => {
    const app = t.context.app;
    await app.client.waitUntilWindowLoaded();

    const win = app.browserWindow;
    t.is(await app.client.getWindowCount(), 1);
    t.false(await win.isMinimized());
    t.false(await win.isDevToolsOpened());
    t.true(await win.isVisible());
    t.true(await win.isFocused());

    const {width, height} = await win.getBounds();
    t.true(width > 0);
    t.true(height > 0);
});


describe('when the make larger button is clicked', function () {
    it('increases the window height and width by 10 pixels', function () {
        return app.client.waitUntilWindowLoaded()
            .browserWindow.getBounds().should.eventually.have.property('width', 800)
            .browserWindow.getBounds().should.eventually.have.property('height', 400)
            .click('.btn-make-bigger')
            .browserWindow.getBounds().should.eventually.have.property('width', 810)
            .browserWindow.getBounds().should.eventually.have.property('height', 410)
    })
});

describe('when the make smaller button is clicked', function () {
    it('decreases the window height and width by 10 pixels', function () {
        return app.client.waitUntilWindowLoaded()
            .browserWindow.getBounds().should.eventually.have.property('width', 800)
            .browserWindow.getBounds().should.eventually.have.property('height', 400)
            .click('.btn-make-smaller')
            .browserWindow.getBounds().should.eventually.have.property('width', 790)
            .browserWindow.getBounds().should.eventually.have.property('height', 390)
    })
});