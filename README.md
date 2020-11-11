React-Select
============

This repo is a fork of https://github.com/JedWatson/react-select frozen in time at `v1.0.0-rc.10` (Sept 13, 2017). The state of the code at this version tag can be browsed [here](https://github.com/JedWatson/react-select/tree/546403ad6894c2082b20fa63af514d68891dcf2e).

## Why

We fell behind on versions, and the upgrade from a v1 release candidate to v3 includes major non-trivial changes (v2 was also a very significant upgrade with breaking changes). In the meantime, React `16.9` introduced [deprecations for a number of lifecycle methods](https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#renaming-unsafe-lifecycle-methods), so `react-select` is throwing a bunch of deprecation warnings in the console.

This fork will allow us to:

1. Edit the source code to remove the deprecated lifecycle methods to in turn remove the warnings.
2. Use v1 and v3 of `react-select` simultaneously while we upgreade each consumer (since this fork is referenced as `react-select-legacy` in `package.json` in our other repos, it will not collide with `react-select`).

## Updating

If additional updates are needed to this source code, the process is:

1. Create a branch against this repo
2. Make the necessary changes to the code
3. Run `npm run build` (this will transpile `/src` into `/lib` via Babel)
4. Commit all the changes
5. Issue a PR & merge
6. Create a new GitHub Release, incrementing the version number  (e.g. `v1.0.0-rc.10` --> `v1.0.0-rc11`). This can be done by clicking "Draft a new release" on the [Releases page](https://github.com/ThriveTRM/react-select/releases).
7. In the repo consuming this forked package, update `package.json` to point to the updated release version. `"react-select-legacy": "https://github.com/ThriveTrm/react-select#v1.0.0-rc.11"`, then `yarn install`

If you need to test your in-progress-changes via the consumer repos, you can do so by pointing the consumer's `package.json` directly at a branch of this repo rather than a release version: `"react-select-legacy": "https://github.com/ThriveTrm/react-select#branch-name-here"`, then `yarn install`
