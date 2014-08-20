broccoli-amdclean
=================

Broccoli filter to convert AMD modules to regular javaScript

Install:
```sh
npm install --save broccoli-amdclean
```

## Usage

```js
var amdclean = require('broccoli-amdclean');
tree = amdclean(tree, options);
```

## Options

All options (except for the 'code' option, which is replaced by the tree) that AMDclean supports are supported. They can be found on the [AMDclean page.] (https://github.com/gfranko/amdclean)




