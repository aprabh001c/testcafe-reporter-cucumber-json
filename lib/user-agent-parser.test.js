"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_agent_parser_1 = require("./user-agent-parser");
test('It should get Windows platform', function () {
    var userAgent = 'Chrome 75.0.3770 / Windows 10.0.0';
    var result = user_agent_parser_1.getPlatformFrom(userAgent);
    expect(result.name).toBe('windows');
});
test('It should get Windows platform on Browserstack', function () {
    var userAgent = 'Chrome 75.0.3770 / Windows 10.0.0 (https://automate.browserstack.com/builds/1f90795f6e1078f0dca1b94929a8d372c60970d5/sessions/98a8e7718381c14a5c6c64afe26babb7063cf7d3)';
    var result = user_agent_parser_1.getPlatformFrom(userAgent);
    expect(result.name).toBe('windows');
    expect(result.version).toBe('10.0.0');
});
test('It should get OSX platform', function () {
    var userAgent = 'Chrome 80.0.3987.132 / macOS 10.15.3';
    var result = user_agent_parser_1.getPlatformFrom(userAgent);
    expect(result.name).toBe('osx');
    expect(result.version).toBe('10.15.3');
});
test('It should get Linux platform', function () {
    var userAgent = 'Chrome 80.0.3987.132 / Linux 0.0';
    var result = user_agent_parser_1.getPlatformFrom(userAgent);
    expect(result.name).toBe('linux');
    expect(result.version).toBe('0.0');
});
test('It should get Windows platform on Windows 10', function () {
    var userAgent = 'Chrome 80.0.3987.149 / Windows 10';
    var result = user_agent_parser_1.getPlatformFrom(userAgent);
    expect(result.name).toBe('windows');
    expect(result.version).toBe('10');
});
test('It should get browser from Chrome 80.0.3987.149', function () {
    var userAgent = 'Chrome 80.0.3987.149 / Windows 10';
    var result = user_agent_parser_1.getBrowserFrom(userAgent);
    expect(result.name).toBe('chrome');
    expect(result.version).toBe('80.0.3987.149');
});
test('It should get browser from Microsoft Edge 83.0.478.58 / macOS 10.15.5', function () {
    var userAgent = 'Microsoft Edge 83.0.478.58 / macOS 10.15.5';
    var result = user_agent_parser_1.getBrowserFrom(userAgent);
    expect(result.name).toBe('edge');
    expect(result.version).toBe('83.0.478.58');
});
//# sourceMappingURL=user-agent-parser.test.js.map