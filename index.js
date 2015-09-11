var divisors = {
	bps: 0.125,
	kbps: 125,
	mbps: 125000,
	Bps: 1,
	KBps: 1000,
	MBps: 1000000
}

module.exports = function bitrate(bytes, seconds, format) {
	if (format === undefined || format === null) format = 'kbps'
	if (typeof format !== 'string') throw new TypeError('Expected \'format\' to be a string')
	var divisor = divisors[format.replace('/', 'p')]
	if (!divisor) throw new Error('\'format\' is an invalid string')
	return bytes/seconds/divisor
}
