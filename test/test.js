var test = require('tape')
var bitrate = require('../index.js')

test('basic functionality', function (t) {
	t.equal(bitrate(6000000, 150, 'bps'), 320000)
	t.equal(bitrate(6000000, 150, 'Bps'), 40000)
	t.equal(bitrate(6000000, 150, 'kbps'), 320)
	t.equal(bitrate(6000000, 150, 'KBps'), 40)
	t.equal(bitrate(6000000, 150, 'mbps'), 0.32)
	t.equal(bitrate(6000000, 150, 'MBps'), 0.04)
	t.end()
})

test('defaults to kbps', function (t) {
	t.equal(bitrate(6000000, 150), 320)
	t.equal(bitrate(6000000, 150, null), 320)
	t.equal(bitrate(6000000, 150, undefined), 320)
	t.end()
})

test('allows kb/s style format also', function (t) {
	t.equal(bitrate(6000000, 150, 'b/s'), 320000)
	t.equal(bitrate(6000000, 150, 'B/s'), 40000)
	t.equal(bitrate(6000000, 150, 'kb/s'), 320)
	t.equal(bitrate(6000000, 150, 'KB/s'), 40)
	t.equal(bitrate(6000000, 150, 'mb/s'), 0.32)
	t.equal(bitrate(6000000, 150, 'MB/s'), 0.04)
	t.end()
})

test('only allows null, undefined, or a valid string as the format argument', function (t) {
	t.doesNotThrow(function () { bitrate(6000000, 150, null) }, 'allows null')
	t.doesNotThrow(function () { bitrate(6000000, 150, undefined) }, 'allows undefined')
	t.throws(function () { bitrate(6000000, 150, 'lolwut') }, 'does not allow an invalid string')
	t.throws(function () { bitrate(6000000, 150, 123) }, 'does not allow a positive number')
	t.throws(function () { bitrate(6000000, 150, 0) }, 'does not allow a 0')
	t.throws(function () { bitrate(6000000, 150, false) }, 'does not allow false')
	t.throws(function () { bitrate(6000000, 150, {}) }, 'does not allow an object')
	t.end()
})
