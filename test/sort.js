import { expect } from 'chai';

import * as Heap from '../dist/heap.js';

import { range, shuffle } from '@darblast/utils';

describe('sort', function () {
  describe('cmp', function () {
    const cmp = (lhs, rhs) => lhs < rhs;

    it('empty', function () {
      const data = [];
      Heap.sortCmp(data, cmp);
      expect(data).to.eql([]);
    });

    it('one element', function () {
      const data = [42];
      Heap.sortCmp(data, cmp);
      expect(data).to.eql([42]);
    });

    it('two elements 1', function () {
      const data = [42, 53];
      Heap.sortCmp(data, cmp);
      expect(data).to.eql([42, 53]);
    });

    it('two elements 2', function () {
      const data = [53, 42];
      Heap.sortCmp(data, cmp);
      expect(data).to.eql([42, 53]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      Heap.sortCmp(data, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      Heap.sortCmp(data, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 3', function () {
      const data = [53, 42, 64];
      Heap.sortCmp(data, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 4', function () {
      const data = [53, 64, 42];
      Heap.sortCmp(data, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 5', function () {
      const data = [64, 42, 53];
      Heap.sortCmp(data, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 6', function () {
      const data = [64, 53, 42];
      Heap.sortCmp(data, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('random', function () {
      const data = range(100);
      shuffle(data);
      const expected = data.slice().sort((lhs, rhs) => lhs - rhs);
      Heap.sortCmp(data, cmp);
      expect(data).to.eql(expected);
    });
  });

  describe('asc', function () {
    it('empty', function () {
      const data = [];
      Heap.sortAsc(data);
      expect(data).to.eql([]);
    });

    it('one element', function () {
      const data = [42];
      Heap.sortAsc(data);
      expect(data).to.eql([42]);
    });

    it('two elements 1', function () {
      const data = [42, 53];
      Heap.sortAsc(data);
      expect(data).to.eql([42, 53]);
    });

    it('two elements 2', function () {
      const data = [53, 42];
      Heap.sortAsc(data);
      expect(data).to.eql([42, 53]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      Heap.sortAsc(data);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      Heap.sortAsc(data);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 3', function () {
      const data = [53, 42, 64];
      Heap.sortAsc(data);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 4', function () {
      const data = [53, 64, 42];
      Heap.sortAsc(data);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 5', function () {
      const data = [64, 42, 53];
      Heap.sortAsc(data);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 6', function () {
      const data = [64, 53, 42];
      Heap.sortAsc(data);
      expect(data).to.eql([42, 53, 64]);
    });

    it('random', function () {
      const data = range(100);
      shuffle(data);
      const expected = data.slice().sort((lhs, rhs) => lhs - rhs);
      Heap.sortAsc(data);
      expect(data).to.eql(expected);
    });
  });

  describe('desc', function () {
    it('empty', function () {
      const data = [];
      Heap.sortDesc(data);
      expect(data).to.eql([]);
    });

    it('one element', function () {
      const data = [42];
      Heap.sortDesc(data);
      expect(data).to.eql([42]);
    });

    it('two elements 1', function () {
      const data = [42, 53];
      Heap.sortDesc(data);
      expect(data).to.eql([53, 42]);
    });

    it('two elements 2', function () {
      const data = [53, 42];
      Heap.sortDesc(data);
      expect(data).to.eql([53, 42]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      Heap.sortDesc(data);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      Heap.sortDesc(data);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 3', function () {
      const data = [53, 42, 64];
      Heap.sortDesc(data);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 4', function () {
      const data = [53, 64, 42];
      Heap.sortDesc(data);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 5', function () {
      const data = [64, 42, 53];
      Heap.sortDesc(data);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 6', function () {
      const data = [64, 53, 42];
      Heap.sortDesc(data);
      expect(data).to.eql([64, 53, 42]);
    });

    it('random', function () {
      const data = range(100);
      shuffle(data);
      const expected = data.slice().sort((lhs, rhs) => rhs - lhs);
      Heap.sortDesc(data);
      expect(data).to.eql(expected);
    });
  });
});
