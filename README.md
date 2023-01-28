## `@darblast/heap`

[![](https://img.shields.io/npm/v/@darblast/heap)](https://www.npmjs.com/package/@darblast/heap)
[![License: MIT](https://img.shields.io/github/license/darblast/heap)](https://github.com/darblast/heap/blob/master/LICENSE)
[![Node.js CI](https://github.com/darblast/heap/actions/workflows/node.js.yml/badge.svg)](https://github.com/darblast/heap/actions/workflows/node.js.yml)

Provides algorithms to manipulate binary heap arrays.

See https://en.wikipedia.org/wiki/Binary_heap for more information.

Three versions of each function are provided:

- the ones suffixed with `Cmp` take an arbitrary comparison function;
- the ones suffixed with `Min` use the `<` operator and result in a min-heap;
- the ones suffixed with `Max` use the `>` operator and result in a max-heap.

The comparison function must be the same across calls to different algorithms on the same array,
otherwise the results will be inconsistent. It has the following signature:

```ts
export type CompareFn<Element> = (lhs: Element, rhs: Element) => boolean;
```
