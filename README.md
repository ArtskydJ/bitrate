bitrate
=========

[![Build Status](https://travis-ci.org/ArtskydJ/bitrate.svg)](https://travis-ci.org/ArtskydJ/bitrate)
[![Dependency Status](https://david-dm.org/artskydj/bitrate.svg)](https://david-dm.org/artskydj/bitrate)
[![devDependency Status](https://david-dm.org/artskydj/bitrate/dev-status.svg)](https://david-dm.org/artskydj/bitrate#info=devDependencies)

> Calculates the bitrate given a file's size and duration

# example

```js
var bitrate = require('bitrate')

var kilobitsPerSecond = bitrate(6076940, 149) // => 326.3
var bitsPerSecond = bitrate(6076940, 149, 'bps') // => 326279
var BytesPerSecond = bitrate(6076940, 149, 'Bps') // => 40785
```

# api

```js
var bitrate = require('bitrate')
```

## `var rate = bitrate(bytes, seconds, [format])`

- `bytes` is the number in bytes
- `seconds` is the duration in seconds
- `format` is the desired format. Accepts:
	- `bps`, `b/s`; bits per second
	- `kbps`, `kb/s`; kilobits per second **default**
	- `mbps`, `mb/s`; megabits per second
	- `Bps`, `B/s`; bytes per second
	- `KBps`, `KB/s`; kilobytes per second
	- `MBps`, `MB/s`; megabytes per second
- **Returns** `rate` number

# install

With [npm](http://nodejs.org/download) do:

	npm install bitrate

# license

[VOL](http://veryopenlicense.com)
