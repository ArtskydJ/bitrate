bitrate
=========

> Calculates the bitrate given a file's size and duration

[![Build Status](https://travis-ci.org/ArtskydJ/bitrate.svg)](https://travis-ci.org/ArtskydJ/bitrate)

# example

```js
var bitrate = require('bitrate')

var bytes = 6076940
var seconds = 149

var kilobitsPerSecond = bitrate(bytes, seconds) // => 326.3
var bitsPerSecond = bitrate(bytes, seconds, 'bps') // => 326279
var BytesPerSecond = bitrate(bytes, seconds, 'Bps') // => 40785
```

# api

```js
var bitrate = require('bitrate')
```

## `var rate = bitrate(bytes, seconds, [format])`

- `bytes` is a number of bytes
- `seconds` is a number of the duration in seconds
- `format` is a string of the desired format. Accepts:
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
