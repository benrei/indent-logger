# indent-logger

[![NPM version](https://img.shields.io/npm/v/indent-logger.svg)](https://www.npmjs.com/package/indent-logger)

Console.log with indent option


## Installation

```sh
$ npm install indent-logger
```

## Usage

Using `indent`

```js
const logger = require('indent-logger');

logger.indent(2, "Some text");
logger.indent(4, "Some text two");
logger.indent(6, "Some text three");

console.log("Some text");
console.log("Some text two");
console.log("Some text three");
```

```sh
#  output
  Some text
    Some text two
      Some text three

Some text
Some text two
Some text three
```

Using `indentTimestamp`

```js
const logger = require('indent-logger');

logger.indentTimestamp(2, "Some text");
logger.indentTimestamp(4, "Some text two");

console.log("Some text");
console.log("Some text two");
```

```sh
#  output
2018-8-20 10:32:43 ->   Some text
2018-8-20 10:32:43 ->     Some text two

Some text
Some text two
```

Using `timestamp`

```js
const logger = require('indent-logger');

logger.timestamp(2, "Some text");

console.log("Some text");
```

```sh
#  output
2018-8-20 10:32:43 ->  Some text

Some text
```


That's it.<br>
Happy coding!


## License

  [MIT](LICENSE)
