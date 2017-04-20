var Application = require('spectron').Application;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var path = require('path');

chai.should();
chai.use(chaiAsPromised);

describe('application launch', function () {
    beforeEach(function () {
        if(process.platform === "darwin"){

            this.app = new Application({
                path: './out/rct-groundcontrol-darwin-x64/rct-groundcontrol.app/Contents/MacOS/rct-groundcontrol'
            });
            return this.app.start()
        }else{
            this.app = new Application({
                path: './out/rct-groundcontrol-linux-x64/rct-groundcontrol'
            });
            return this.app.start()
        }

    });

    beforeEach(function () {
        chaiAsPromised.transferPromiseness = this.app.transferPromiseness
    });

    afterEach(function () {
        if (this.app && this.app.isRunning()) {
            return this.app.stop()
        }
    });

    it('opens a window', function () {
        return this.app.client.waitUntilWindowLoaded()
            .browserWindow.focus()
            .getWindowCount().should.eventually.equal(1)
            .browserWindow.isMinimized().should.eventually.be.false
            .browserWindow.isDevToolsOpened().should.eventually.be.false
            .browserWindow.isVisible().should.eventually.be.true
            .browserWindow.isFocused().should.eventually.be.true
            .browserWindow.getBounds().should.eventually.have.property('width').and.be.above(0)
            .browserWindow.getBounds().should.eventually.have.property('height').and.be.above(0)
    });

    it('Contains text', function () {
        return this.app.client.waitUntilTextExists('button', 'Undo', 4000)
    });

});