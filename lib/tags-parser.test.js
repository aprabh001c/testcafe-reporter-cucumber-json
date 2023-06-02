"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tags_parser_1 = require("./tags-parser");
var fs_1 = require("fs");
var path_1 = require("path");
afterAll(function () {
    fs_1.unlinkSync(path_1.join(process.cwd(), 'testcafe-reporter-cucumber-json.json'));
});
test("It should prefix tags with the '@' character", function () {
    var description = 'it should ignore yo and it but not foo and bar';
    var result = tags_parser_1.tagsFromDescription(description).map(function (tag) { return tag.name; });
    expect(result.includes('@foo')).toBe(true);
    expect(result.includes('@bar')).toBe(true);
});
test('It should ignore words with less than 3 characters', function () {
    var description = 'it should ignore yo and it but not foo and bar';
    var result = tags_parser_1.tagsFromDescription(description).map(function (tag) { return tag.name; });
    expect(result.includes('@yo')).toBe(false);
    expect(result.includes('@it')).toBe(false);
    expect(result.includes('@foo')).toBe(true);
    expect(result.includes('@bar')).toBe(true);
});
test('It should ignore noisy tags', function () {
    var description = 'scenario: it should ignore yo and it but not foo and bar';
    var result = tags_parser_1.tagsFromDescription(description).map(function (tag) { return tag.name; });
    expect(result.includes('@scenario')).toBe(false);
    expect(result.includes('@but')).toBe(false);
    expect(result.includes('@not')).toBe(false);
    expect(result.includes('@should')).toBe(false);
    expect(result.includes('@and')).toBe(false);
});
test('It should take only distinct tags', function () {
    var description = 'scenario: it should ignore yo but it should not ignore foo and bar';
    var result = tags_parser_1.tagsFromDescription(description)
        .map(function (tag) { return tag.name; })
        .filter(function (word) { return word === '@ignore'; }).length;
    expect(result).toBe(1);
});
test('It should split with separators /s|\n|\r|.|:|!|,|;/', function () {
    var description = 'foo bar.foobar:fizz!buzz,yep;nope';
    var result = tags_parser_1.tagsFromDescription(description).map(function (tag) { return tag.name; });
    expect(result.includes('@foo')).toBe(true);
    expect(result.includes('@bar')).toBe(true);
    expect(result.includes('@foobar')).toBe(true);
    expect(result.includes('@fizz')).toBe(true);
    expect(result.includes('@buzz')).toBe(true);
    expect(result.includes('@yep')).toBe(true);
    expect(result.includes('@nope')).toBe(true);
    expect(result.length).toBe(7);
});
//# sourceMappingURL=tags-parser.test.js.map