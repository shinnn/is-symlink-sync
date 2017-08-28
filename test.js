'use strong';

const createSymlink = require('create-symlink');
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
    isSymlinkSync(__filename),
    false,
    'should return false when the file is not a symbolic link.'
  );

  t.equal(
    isSymlinkSync(__dirname),
    false,
    'should return false when the path is a directory path.'
  );

  t.equal(
    isSymlinkSync('this/file/does/not/exist'),
    false,
    'should return false when the file doesn\'t exist.'
  );

  t.throws(
    () => isSymlinkSync({foo: 'bar'}),
    / is not a string\. Argument to is-symlink-sync must be a file path\./,
    'should throw a type error when the argument is not a number.'
  );

  t.end();
});
