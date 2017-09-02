# is-symlink-sync

[![npm version](https://img.shields.io/npm/v/is-symlink-sync.svg)](https://www.npmjs.com/package/is-symlink-sync)
[![Build Status](https://travis-ci.org/shinnn/is-symlink-sync.svg?branch=master)](https://travis-ci.org/shinnn/is-symlink-sync)
[![Build status](https://ci.appveyor.com/api/projects/status/1e8sfy6cs9dxrs5j?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/is-symlink-sync)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-symlink-sync.svg)](https://coveralls.io/r/shinnn/is-symlink-sync)

Synchronously check if a file is a [symbolic link](https://en.wikipedia.org/wiki/Symbolic_link)

```javascript
const isSymlinkSync = require('is-symlink-sync');

isSymlinkSync('path/to/symlink'); //=> true
isSymlinkSync('path/to/non-symlink'); //=> false
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install is-symlink-sync
```

## API

```javascript
const isSymlinkSync = require('is-symlink-sync');
```

### isSymlinkSync(*filePath*)

*filePath*: `string`, [`Buffer`](https://nodejs.org/api/buffer.html#buffer_class_buffer) or [`URL`](https://nodejs.org/api/url.html#url_class_url)  
Return: `boolean`

It returns `true` if the file exists and is a symbolic link, otherwise `false`.

Only when the argument type is invalid, it throws an error.

```javascript
isSymlinkSync(Buffer.from('123')); // doesn't throw any errors
isSymlinkSync(123); // throws a TypeError
```

## License

Copyright (c) 2015 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
