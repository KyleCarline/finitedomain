# finitedomain [![Build Status](https://travis-ci.org/the-grid/finitedomain.svg?branch=master)](https://travis-ci.org/the-grid/finitedomain)

Finite domain [constraint solver](https://en.wikipedia.org/wiki/Constraint_logic_programming), originally based on [FD.js](https://github.com/srikumarks/FD.js/wiki/API).

This is very much a WIP.

API is bound to change, consider yourself warned.

## Installing

    npm install finitedomain

## Usage

For now, see the extensive [tests](./tests)

## Building

Use `grunt dist` (after `npm install`) to compile everything. Intermediate build files can be found in `/build`. This build is tentatively tested and afterwards a minified final build is put in `/dist/finitedomain.min.js`.

## Version

1.1.2:
- Add npm prepublish script so npm can distribute a dist build rather than from dev
- Internal update to how test target is determined

1.1.1:
- Fixed a bug where solver options were not properly passed on from `PathSolver` to its super, `Solver`

1.1.0:
- Added support for fallback var distributions so you can chain list > markov > size for var distributors
- Dropped browserify in favor of a custom concatenation technique
- Fixed the dist, made it faster and much smaller
- Internal breaking changes: some internal apis were renamed, should not affect external apis.
- Internal refactoring/restructuring
- Internal; proper use of `require` which hopefully helps tooling if nothing else

1.0.2:
- Added support for `expandVectorsWith` in Markov distribution
- Added support for `matrix[].row.boolean` to be the name of a variable, rather than the function to return this name, in Markov distributions
- Deprecating the `Solver.addVar()` option `distribute` in favor of option `distributeOptions.distribution_name`
- Fix Markov distributed variables being able to end up with invalid values (-> Added a Markov propagator, every Markov var gets one now)
- Added support for a `timeout_callback` in `Space`, which allows you to abort a search by returning `true` from a given function
- Add var distributor that prioritizes Markov variables
- Support var names to be passed on as string rather than a function to return that name, for `matrix.row` in variable distribution options
- Added `throw` distributors for variables and values which will unconditionally throw when ran. Used for testing.
- Internal refactoring/restructuring

1.0.1:
- Support legacy style of domains in Solver, will convert them to a flat array of range pairs
- Improve input domain detection for early error reporting

1.0.0: Initial release