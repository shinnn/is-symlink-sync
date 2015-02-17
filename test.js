'use strict';

var fs = require('graceful-fs');
var isSymlinkSync = require('./');
var test = require('tape');

test('is-symlink-sync', function(t) {
  t.plan(6);

  t.equal(isSymlinkSync.name, 'isSymlinkSync', 'should have a function name.');

  fs.symlinkSync('.gitignore', '__tmp_path__');

  t.strictEqual(
    isSymlinkSync('__tmp_path__'),
    true,
    'should return true when the file is a symbolic link.'
  );

  fs.unlinkSync('__tmp_path__');

  t.strictEqual(
    isSymlinkSync(__filename),
    false,
    'should return false when the file is not a symbolic link.'
  );

  t.strictEqual(
    isSymlinkSync(__dirname),
    false,
    'should return false when the path is a directory path.'
  );

  t.strictEqual(
    isSymlinkSync('this/file/does/not/exist'),
    false,
    'should return false when the file doesn\'t exist.'
  );

  t.throws(
    isSymlinkSync.bind(null, {foo: 'bar'}),
    / is not a function\. Argument to is-symlink-sync must be a file path\./,
    'should throw a type error when the argument is not a number.'
  );
});
