'use strict';

const {join} = require('path');
const {pathToFileURL} = require('url');
const {unlink, symlink} = require('fs').promises;

const isSymlinkSync = require('.');
const test = require('tape');

test('is-symlink-sync', async t => {
	await symlink('.gitignore', join(__dirname, '__tmp_path__'));

	t.equal(
		isSymlinkSync('__tmp_path__'),
		true,
		'should return true when the file is a symbolic link.'
	);

	await unlink(join(__dirname, '__tmp_path__'));

	t.equal(
		isSymlinkSync(Buffer.from(__filename)),
		false,
		'should return false when the file is not a symbolic link.'
	);

	t.equal(
		isSymlinkSync(pathToFileURL(__dirname)),
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
		/ERR_INVALID_ARG_TYPE/u,
		'should throw an error when the argument is not a number.'
	);

	t.throws(
		() => isSymlinkSync(),
		/^RangeError: Expected 1 argument \(<string\|Buffer\|Uint8Array\|URL>\), but got no arguments\./u,
		'should throw an error when it takes no arguments.'
	);

	t.throws(
		() => isSymlinkSync('one', 'two'),
		/^RangeError: Expected 1 argument \(<string\|Buffer\|Uint8Array\|URL>\), but got 2 arguments\./u,
		'should throw an error when it takes too many arguments.'
	);

	t.end();
});
