"use strict";
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
var SUT = __importStar(require("./remove-common-first-lines"));
test('It should remove when there is at least 3 common lines', function () {
    var reference = "A\n  B\n  C\n  Z\n  ";
    var content = "A\n  B\n  C\n  D\n  E\n  ";
    var result = SUT.removeCommonFirstLines(reference, content);
    var expected = "\n  D\n  E\n  ";
    expect(result).toBe(expected);
});
test('It should not remove when there is less than least 3 common lines', function () {
    var reference = "A\n  B\n  Z\n  ";
    var content = "A\n  B\n  C\n  D\n  E\n  ";
    var result = SUT.removeCommonFirstLines(reference, content);
    expect(result).toBe(content);
});
test('It should remove - use case 2', function () {
    var reference = "\n  Z\n  A\n  B\n  C\n  ";
    var content = "\n  A\n  B\n  D\n  ";
    var result = SUT.removeCommonFirstLines(reference, content);
    var expected = "\n  D\n  ";
    expect(result).toBe(expected);
});
test('It should remove - real world', function () {
    var reference = "1) - Error in fixture.beforeEach hook -\n   A request to \"https://devexpress.github.io/testcafe/example\" has failed.\n   Use quarantine mode to perform additional attempts to execute this test.\n   You can find troubleshooting information for this issue at \"https://go.devexpress.com/TestCafe_FAQ_ARequestHasFailed.aspx\".\n\n   Error details:\n   Failed to find a DNS-record for the resource at \"https://devexpress.github.io/testcafe/example\".\n\n   Browser: Firefox 78.0 / macOS 10.15\n   Screenshot: /Users/HDO/VSCodeProjects/testcafe-starter/screenshots/2020-07-10_20-15-54/test-3/Firefox_78.0_macOS_10.15/errors/1.png\n\n      11 |   const config: Config = getCurrentConfig(t);\n      12 | \n      13 |   // eslint-disable-next-line @typescript-eslint/no-use-before-define\n      14 |   ensureEnvIsSetupInConfigurationFile(config);\n      15 |   if (config && config.env) {\n   --------------------------------------------\n    \u2192 16 |     await t.navigateTo(config.env.url);\n   --------------------------------------------\n      17 |   }\n      18 | };\n      19 | \n      20 | function ensureEnvIsSetupInConfigurationFile(config: Config): void {\n      21 |   if (config && config.env && config.env.url) {\n\n      at (anonymous) (/Users/HDO/VSCodeProjects/testcafe-starter/steps/i-navigate-to-the-testcafe-sample-page.ts:16:13)\n      at (anonymous) (/Users/HDO/VSCodeProjects/testcafe-starter/steps/i-navigate-to-the-testcafe-sample-page.ts:8:71)\n      at __awaiter (/Users/HDO/VSCodeProjects/testcafe-starter/steps/i-navigate-to-the-testcafe-sample-page.ts:4:12)\n      at exports.default (/Users/HDO/VSCodeProjects/testcafe-starter/steps/i-navigate-to-the-testcafe-sample-page.ts:9:42)\n";
    var content = "A request to \"https://devexpress.github.io/testcafe/example\" has failed.\n   Use quarantine mode to perform additional attempts to execute this test.\n   You can find troubleshooting information for this issue at \"https://go.devexpress.com/TestCafe_FAQ_ARequestHasFailed.aspx\".\n\n   Error details:\n   Failed to find a DNS-record for the resource at \"https://devexpress.github.io/testcafe/example\".\n\n   Browser: Firefox 78.0 / macOS 10.15\n   Screenshot: /Users/HDO/VSCodeProjects/testcafe-starter/screenshots/2020-07-10_20-15-54/test-3/Firefox_78.0_macOS_10.15/errors/1.png\n\n      47 |     return;\n      48 |   }\n      49 | \n      50 |   const foundStep = stepMappings[stepName];\n      51 |   if (typeof foundStep === 'function') {\n   --------------------------------------------\n    \u2192 52 |     await foundStep(stepName as string);\n   --------------------------------------------\n      53 |     showSuccess(stepName, stepLabel);\n      54 |     return;\n      55 |   }\n      56 | \n      57 |   throw new Error('Step stepName is not mapped to an executable code.');\n\n      at (anonymous) (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:52:11)\n      at (anonymous) (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:8:71)\n      at __awaiter (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:4:12)\n      at executeStep (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:38:12)\n      at Object.(anonymous) (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:60:9)\n      at (anonymous) (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:8:71)\n      at __awaiter (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:4:12)\n      at Object.given (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:52:12)\n";
    var result = SUT.removeCommonFirstLines(reference, content);
    var expected = "\n      47 |     return;\n      48 |   }\n      49 | \n      50 |   const foundStep = stepMappings[stepName];\n      51 |   if (typeof foundStep === 'function') {\n   --------------------------------------------\n    \u2192 52 |     await foundStep(stepName as string);\n   --------------------------------------------\n      53 |     showSuccess(stepName, stepLabel);\n      54 |     return;\n      55 |   }\n      56 | \n      57 |   throw new Error('Step stepName is not mapped to an executable code.');\n\n      at (anonymous) (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:52:11)\n      at (anonymous) (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:8:71)\n      at __awaiter (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:4:12)\n      at executeStep (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:38:12)\n      at Object.(anonymous) (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:60:9)\n      at (anonymous) (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:8:71)\n      at __awaiter (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:4:12)\n      at Object.given (/Users/HDO/VSCodeProjects/testcafe-starter/step-runner.ts:52:12)\n";
    expect(result).toBe(expected);
});
test('It should remove - real world - use case 2', function () {
    var reference = '1) - Error in fixture.beforeEach hook -\n   A request to "http://devexpress.github.io/testcafe/example" has failed.\n   Use quarantine mode to perform additional attempts to execute this test.\n   You can find troubleshooting information for this issue at "https://go.devexpress.com/TestCafe_FAQ_ARequestHasFailed.aspx".\n\n   Error details:\n   Failed to find a DNS-record for the resource at "http://devexpress.github.io/testcafe/example".\n\n   Browser: Chrome 83.0.4103.116 / macOS 10.15.5\n\n      11 |   const config: Config = getCurrentConfig(t);\n      12 | \n      13 |   // eslint-disable-next-line @typescript-eslint/no-use-before-define\n      14 |   ensureEnvIsSetupInConfigurationFile(config);\n      15 |   if (config && config.env) {\n   --------------------------------------------\n    &rarr; 16 |     await t.navigateTo(config.env.url);\n   --------------------------------------------\n      17 |   }\n      18 | };\n      19 | \n      20 | function ensureEnvIsSetupInConfigurationFile(config: Config): void {\n      21 |   if (config && config.env && config.env.url) {\n\n      at <anonymous> (/Users/HDO/VSCodeProjects/testcafe-starter/steps/i-navigate-to-the-testcafe-sample-page.ts:16:13)\n      at <anonymous> (/Users/HDO/VSCodeProjects/testcafe-starter/steps/i-navigate-to-the-testcafe-sample-page.ts:8:71)\n';
    var content = '1) - Error in fixture.beforeEach hook -\n   A request to "http://devexpress.github.io/testcafe/example" has failed.\n   Use quarantine mode to perform additional attempts to execute this test.\n   You can find troubleshooting information for this issue at "https://go.devexpress.com/TestCafe_FAQ_ARequestHasFailed.aspx".\n\n   Error details:\n   Failed to find a DNS-record for the resource at "http://devexpress.github.io/testcafe/example".\n\n   Browser: Chrome 83.0.4103.116 / macOS 10.15.5';
    var result = SUT.removeCommonFirstLines(reference, content);
    var expected = '';
    expect(result).toBe(expected);
});
//# sourceMappingURL=remove-common-first-lines.test.js.map