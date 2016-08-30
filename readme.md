# crip-pad

[![Build Status](https://travis-ci.org/johnie/crip-pad.svg?branch=master)](https://travis-ci.org/johnie/crip-pad)


## Install

```
$ npm install --save crip-pad
```


## Usage

```js
const cripPad = require('crip-pad');

cripPad('TIMMAAYY', 6);
//=> '♿♿️️TIMMAAYY'
```


## API

### cripPad(input, length)

Pads `input` with crips on the left side if it's shorter than `length`. Padding crips are truncated if they exceed `length`.

#### input

Type: `string`

String to pad.

#### length

Type: `number`<br>
Default: `0`

Padding length.


## License

MIT © [Johnie Hjelm](https://johnie.com)
