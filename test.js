'use strict';

const {URL} = require('url');

const createSymlink = require('create-symlink');
const fileUrl = require('file-url');
const isSymlinkSync = require('./');
const rmfr = require('rmfr');
const test = require('tape');

test('is-symlink-sync', async t => {
  await createSymlink('.gitignore', '__tmp_path__');

  t.equal(
    isSymlinkSync('__tmp_path__'),
    true,
    'should return true when the file is a symbolic link.'
  );

  await rmfr('__tmp_path__');

  t.equal(
    isSymlinkSync(Buffer.from(__filename)),
    false,
    'should return false when the file is not a symbolic link.'
  );

  t.equal(
    isSymlinkSync(new URL(fileUrl(__dirname))),
    false,
    'should return false when the path is a directory path.'
  );

  t.equal(
    isSymlinkSync('this/file/does/not/exist'),
    false,
    'should return false when the file doesn\'t exist.'
  );

  t.equal(
    isSymlinkSync(''),
    false,
    'should return false when it takes an empty string.'
  );

  t.equal(
    isSymlinkSync(Buffer.alloc(0)),
    false,
    'should return false when it takes an empty buffer.'
  );

  t.throws(
    () => isSymlinkSync({foo: 'bar'}),
    /^TypeError.*path must be a string or Buffer/,
    'should throw an error when the argument is not a number.'
  );

  t.throws(
    () => isSymlinkSync(),
    /^RangeError.*Expected 1 argument, but got no arguments instead\./,
    'should throw an error when it takes no arguments.'
  );

  t.throws(
    () => isSymlinkSync('1', 2),
    /^RangeError.*Expected 1 argument, but got 2 arguments instead\./,
    'should throw an error when it takes too many arguments.'
  );

  t.end();
});
