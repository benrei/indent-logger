# indent-logger

[![NPM version](https://img.shields.io/npm/v/indent-logger.svg)](https://www.npmjs.com/package/indent-logger)

Console.log with indent option


## Installation

```sh
$ npm install indent-logger
```

## Usage

```js
const logger = require('indent-logger');

logger.log(2, "Some text");
logger.log(4, "Some text two");
logger.log(6, "Some text three");

console.log("Some text");
console.log("Some text two");
console.log("Some text three");
```
```js
//  output
  Some text
    Some text two
      Some text three

Some text
Some text two
Some text three
```



That's it.<br>
Happy coding!


## License

  [MIT](LICENSE)
