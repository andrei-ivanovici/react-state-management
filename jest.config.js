/* eslint-disable */
const {defaults: tsjPreset} = require('ts-jest/presets');
// jest.config.js
const {pathsToModuleNameMapper} = require('ts-jest/utils');
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const {compilerOptions} = require('./tsconfig');
// eslint-disable
module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./setup-tests.ts"],
    moduleNameMapper: {
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        ...pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
    },
    verbose: true,
    "transform": {
        ...tsjPreset.transform,
        "^.+\\.js$": "babel-jest"

    },
    "transformIgnorePatterns": [
        "<rootDir>/node_modules2/(?!lodash-es)"
    ],
    "globals": {
        "ts-jest": {
            "diagnostics": true,
            compilerOptions: {
                ...compilerOptions,
                allowJs: true
            }
        }
    }
};
