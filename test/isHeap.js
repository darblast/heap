import { expect } from 'chai';

import * as Heap from '../dist/heap.js';

describe('push', function () {
  describe('cmp', function () {
    const cmp = (lhs, rhs) => lhs < rhs;

    it('empty', function () {
      const data = [];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(true);
    });

    it('one element', function () {
      const data = [42];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(true);
    });

    it('two elements 1', function () {
      const data = [42, 53];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(true);
    });

    it('two elements 2', function () {
      const data = [53, 42];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(false);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(true);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(true);
    });

    it('three elements 3', function () {
      const data = [53, 42, 64];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(false);
    });

    it('three elements 4', function () {
      const data = [53, 64, 42];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(false);
    });

    it('three elements 5', function () {
      const data = [64, 42, 53];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(false);
    });

    it('three elements 6', function () {
      const data = [64, 53, 42];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(false);
    });

    it('three levels 1', function () {
      const data = [1, 2, 3, 4, 5, 6, 7];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(true);
    });

    it('three levels 2', function () {
      const data = [1, 3, 2, 4, 5, 6, 7];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(true);
    });

    it('three levels 3', function () {
      const data = [1, 2, 3, 7, 6, 5, 4];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(true);
    });

    it('three levels 4', function () {
      const data = [1, 7, 6, 2, 3, 4, 5];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(false);
    });

    it('three levels 5', function () {
      const data = [7, 6, 5, 4, 3, 2, 1];
      expect(Heap.isHeapCmp(data, data.length, cmp)).to.equal(false);
    });
  });

  describe('min', function () {
    it('empty', function () {
      const data = [];
      expect(Heap.isHeapMin(data, data.length)).to.equal(true);
    });

    it('one element', function () {
      const data = [42];
      expect(Heap.isHeapMin(data, data.length)).to.equal(true);
    });

    it('two elements 1', function () {
      const data = [42, 53];
      expect(Heap.isHeapMin(data, data.length)).to.equal(true);
    });

    it('two elements 2', function () {
      const data = [53, 42];
      expect(Heap.isHeapMin(data, data.length)).to.equal(false);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      expect(Heap.isHeapMin(data, data.length)).to.equal(true);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      expect(Heap.isHeapMin(data, data.length)).to.equal(true);
    });

    it('three elements 3', function () {
      const data = [53, 42, 64];
      expect(Heap.isHeapMin(data, data.length)).to.equal(false);
    });

    it('three elements 4', function () {
      const data = [53, 64, 42];
      expect(Heap.isHeapMin(data, data.length)).to.equal(false);
    });

    it('three elements 5', function () {
      const data = [64, 42, 53];
      expect(Heap.isHeapMin(data, data.length)).to.equal(false);
    });

    it('three elements 6', function () {
      const data = [64, 53, 42];
      expect(Heap.isHeapMin(data, data.length)).to.equal(false);
    });

    it('three levels 1', function () {
      const data = [1, 2, 3, 4, 5, 6, 7];
      expect(Heap.isHeapMin(data, data.length)).to.equal(true);
    });

    it('three levels 2', function () {
      const data = [1, 3, 2, 4, 5, 6, 7];
      expect(Heap.isHeapMin(data, data.length)).to.equal(true);
    });

    it('three levels 3', function () {
      const data = [1, 2, 3, 7, 6, 5, 4];
      expect(Heap.isHeapMin(data, data.length)).to.equal(true);
    });

    it('three levels 4', function () {
      const data = [1, 7, 6, 2, 3, 4, 5];
      expect(Heap.isHeapMin(data, data.length)).to.equal(false);
    });

    it('three levels 5', function () {
      const data = [7, 6, 5, 4, 3, 2, 1];
      expect(Heap.isHeapMin(data, data.length)).to.equal(false);
    });
  });

  describe('max', function () {
    it('empty', function () {
      const data = [];
      expect(Heap.isHeapMax(data, data.length)).to.equal(true);
    });

    it('one element', function () {
      const data = [42];
      expect(Heap.isHeapMax(data, data.length)).to.equal(true);
    });

    it('two elements 1', function () {
      const data = [53, 42];
      expect(Heap.isHeapMax(data, data.length)).to.equal(true);
    });

    it('two elements 2', function () {
      const data = [42, 53];
      expect(Heap.isHeapMax(data, data.length)).to.equal(false);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      expect(Heap.isHeapMax(data, data.length)).to.equal(false);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      expect(Heap.isHeapMax(data, data.length)).to.equal(false);
    });

    it('three elements 3', function () {
      const data = [53, 42, 64];
      expect(Heap.isHeapMax(data, data.length)).to.equal(false);
    });

    it('three elements 4', function () {
      const data = [53, 64, 42];
      expect(Heap.isHeapMax(data, data.length)).to.equal(false);
    });

    it('three elements 5', function () {
      const data = [64, 42, 53];
      expect(Heap.isHeapMax(data, data.length)).to.equal(true);
    });

    it('three elements 6', function () {
      const data = [64, 53, 42];
      expect(Heap.isHeapMax(data, data.length)).to.equal(true);
    });

    it('three levels 1', function () {
      const data = [7, 6, 5, 4, 3, 2, 1];
      expect(Heap.isHeapMax(data, data.length)).to.equal(true);
    });

    it('three levels 2', function () {
      const data = [7, 5, 6, 4, 3, 2, 1];
      expect(Heap.isHeapMax(data, data.length)).to.equal(true);
    });

    it('three levels 3', function () {
      const data = [7, 6, 5, 1, 2, 3, 4];
      expect(Heap.isHeapMax(data, data.length)).to.equal(true);
    });

    it('three levels 4', function () {
      const data = [7, 4, 3, 6, 5, 2, 1];
      expect(Heap.isHeapMax(data, data.length)).to.equal(false);
    });

    it('three levels 5', function () {
      const data = [1, 2, 3, 4, 5, 6, 7];
      expect(Heap.isHeapMax(data, data.length)).to.equal(false);
    });
  });
});
