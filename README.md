# Markdown to JSON Files

A Node promise function the converts a directory of markdown files into a directory of JSON files.

## Usage

```js
const mdToJson = require('markdown-to-json-files')
mdToJson('./src', './out')
	.then(() => console.log('Done!'))
	.catch(console.error)
```
