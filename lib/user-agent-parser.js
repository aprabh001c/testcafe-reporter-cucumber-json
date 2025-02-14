"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserNameMapping = exports.getBrowserFrom = exports.extractNameAndVersion = exports.isWindows = exports.isLinux = exports.isMacOsX = exports.getDeviceFrom = exports.getPlatformFrom = void 0;
var semver = __importStar(require("semver"));
var unknownPlatform = {
    name: 'unknown',
    version: 'unknown',
};
var unknownBrowser = {
    name: 'unknown',
    version: 'unknown',
};
function getPlatformFrom(userAgent) {
    if (userAgent === undefined) {
        return __assign({}, unknownPlatform);
    }
    var sanitizedUserAgent = userAgent.replace(/\(https:.*\)/gi, '');
    var parts = sanitizedUserAgent.split('/');
    if (parts.length <= 1) {
        console.warn("testcafe-reporter-cucumber-json: cannot get the Platform name from input string '" + userAgent + "'");
        return __assign({}, unknownPlatform);
    }
    var rawPlatorm = parts.pop();
    if (rawPlatorm === undefined) {
        console.warn("testcafe-reporter-cucumber-json: cannot get the Platform name from input string '" + userAgent + "'");
        return __assign({}, unknownPlatform);
    }
    var platformInfo = extractNameAndVersion(rawPlatorm);
    if (isMacOsX(platformInfo.name)) {
        return {
            name: 'osx',
            version: platformInfo.version,
        };
    }
    if (isLinux(platformInfo.name)) {
        return {
            name: 'linux',
            version: platformInfo.version,
        };
    }
    if (isWindows(platformInfo.name)) {
        return {
            name: 'windows',
            version: platformInfo.version,
        };
    }
    console.warn("testcafe-reporter-cucumber-json: cannot get the Platform name from input string '" + userAgent + "'");
    return __assign({}, unknownPlatform);
}
exports.getPlatformFrom = getPlatformFrom;
function getDeviceFrom(userAgent) {
    if (userAgent === undefined) {
        return 'undefined';
    }
    var parts = userAgent.split('/');
    if (parts.length <= 1) {
        return 'undefined';
    }
    var rawPlatorm = parts.pop();
    if (rawPlatorm === undefined) {
        return 'undefined';
    }
    var platformInfo = extractNameAndVersion(rawPlatorm);
    return platformInfo.name;
}
exports.getDeviceFrom = getDeviceFrom;
function isMacOsX(platformName) {
    if (platformName === undefined) {
        return false;
    }
    var result = platformName.toLowerCase().includes('mac') &&
        platformName.toLowerCase().includes('os');
    return result;
}
exports.isMacOsX = isMacOsX;
function isLinux(platformName) {
    if (platformName === undefined) {
        return false;
    }
    var result = platformName.toLowerCase().includes('linux');
    return result;
}
exports.isLinux = isLinux;
function isWindows(platformName) {
    if (platformName === undefined) {
        return false;
    }
    var result = platformName.toLowerCase().includes('windows');
    return result;
}
exports.isWindows = isWindows;
function isValidVersion(version) {
    if (semver.valid(version) !== null) {
        return true;
    }
    if (version.includes('.')) {
        return true;
    }
    if (isNaN(Number(version))) {
        return false;
    }
    return true;
}
function extractNameAndVersion(input) {
    if (input === undefined || input === null) {
        return {
            name: 'unknown',
            version: 'unknown',
        };
    }
    var version = input
        .trim()
        .split(' ')
        .filter(function (item) { return isValidVersion(item); })
        .pop() || 'unknown';
    var name = input.replace(version, '').trim();
    return {
        name: name,
        version: version,
    };
}
exports.extractNameAndVersion = extractNameAndVersion;
function getBrowserFrom(userAgent) {
    if (userAgent === undefined) {
        return __assign({}, unknownBrowser);
    }
    var parts = userAgent.split('/');
    if (parts.length === 0) {
        console.warn("testcafe-reporter-cucumber-json: cannot get the Browser name from input string '" + userAgent + "'");
        return __assign({}, unknownBrowser);
    }
    var rawBrowser = parts[0];
    if (rawBrowser === undefined) {
        console.warn("testcafe-reporter-cucumber-json: cannot get the Browser name from input string '" + userAgent + "'");
        return __assign({}, unknownBrowser);
    }
    var browserInfo = extractNameAndVersion(rawBrowser);
    var browserName = exports.browserNameMapping[browserInfo.name]
        ? exports.browserNameMapping[browserInfo.name]
        : 'unknown';
    return {
        name: browserName,
        version: browserInfo.version,
    };
}
exports.getBrowserFrom = getBrowserFrom;
exports.browserNameMapping = {
    'Microsoft Edge': 'edge',
    Chrome: 'chrome',
    Edge: 'edge',
    Firefox: 'firefox',
    HeadlessChrome: 'chrome',
    IE: 'internet explorer',
    Opera: 'opera',
    Safari: 'safari',
};
//# sourceMappingURL=user-agent-parser.js.map