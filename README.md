generator-babel-es7
===================

[![Greenkeeper badge](https://badges.greenkeeper.io/jrop/generator-babel-es7.svg)](https://greenkeeper.io/)

A bare Babel project generator for Yeoman.

## Use

```
npm i -g jrop/generator-babel-es7
yo babel-es7
```

## Basic Project Layout

The project layout that this generator scaffolds is like the following:

```
src/
	main/
		(your code here)
	test/
		(your tests here)
package.json
gulpfile.js
```

After you run `gulp`, you will have a new `build/` directory with all of the built code.

## Running tests

To run mocha tests:

```
gulp test
```

To run Istanbul+mocha for code coverage:

```
gulp coverage
```

This will create a `coverage/` directory with reports in it.

## Babel

This bare project uses babel to transpile code.  Loosely speaking, it supports the most useful ES7 features.  For a full list of transformers run, see the file `app/templates/.babelrc` in this repo.

## Notes

This scaffold will not necessarily work with the version of npm that comes with Node 4.x due to the way that npm stores downloaded modules (it needs to store them in the flat directory structure).  You will need either Node 5.x, or an updated version of npm (run `npm update -g npm`).
