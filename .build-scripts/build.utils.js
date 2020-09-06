const path = require('path');


class PathHelper {

    constructor() {
        this._currentFolder = __dirname;
    }

    static from(currentFolder) {
        return new PathHelper(currentFolder);
    }

    fromRoot(paths) {
        return path.resolve(this._currentFolder, "..", paths);
    };

    relative(paths) {
        return path.resolve(this._currentFolder, paths);
    };
}

module.exports = new PathHelper();
