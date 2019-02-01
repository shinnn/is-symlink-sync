# is-symlink-sync

[![npm version](https://img.shields.io/npm/v/is-symlink-sync.svg)](https://www.npmjs.com/package/is-symlink-sync)
[![Build Status](https://travis-ci.com/shinnn/is-symlink-sync.svg?branch=master)](https://travis-ci.com/shinnn/is-symlink-sync)
[![Build status](https://ci.appveyor.com/api/projects/status/1e8sfy6cs9dxrs5j?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/is-symlink-sync)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-symlink-sync.svg)](https://coveralls.io/r/shinnn/is-symlink-sync)

A [Node.js](https://nodejs.org) module to check if a path is a [symbolic link](https://en.wikipedia.org/wiki/Symbolic_link)

```javascript
const isSymlinkSync = require('is-symlink-sync');

isSymlinkSync('path/to/symlink'); //=> true
isSymlinkSync('path/to/non-symlink'); //=> false
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install is-symlink-sync
```

## API

```javascript
const isSymlinkSync = require('is-symlink-sync');
```

### isSymlinkSync(*path*)

*path*: `string` `Buffer` `Uint8Array` `URL`  
Return: `boolean`

It returns `true` if the file exists and is a symbolic link, otherwise `false`.

## License

Copyright (c) 2015 - 2019 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
