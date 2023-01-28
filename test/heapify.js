import { expect } from 'chai';

import {
  heapifyCmp,
  heapifyMin,
  heapifyMax,
  isHeapCmp,
  isHeapMin,
  isHeapMax,
} from '../dist/heap.js';

import { range, shuffle } from '@darblast/utils';

describe('heapify', function () {
  const cmp = (lhs, rhs) => lhs < rhs;

  describe('cmp', function () {
    it('empty', function () {
      const data = [];
      heapifyCmp(data, 0, cmp);
      expect(data).to.eql([]);
    });

    it('one element', function () {
      const data = [42];
      heapifyCmp(data, 1, cmp);
      expect(data).to.eql([42]);
    });

    it('two elements 1', function () {
      const data = [42, 53];
      heapifyCmp(data, 2, cmp);
      expect(data).to.eql([42, 53]);
    });

    it('two elements 2', function () {
      const data = [53, 42];
      heapifyCmp(data, 2, cmp);
      expect(data).to.eql([42, 53]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      heapifyCmp(data, 3, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      heapifyCmp(data, 3, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 3', function () {
      const data = [42, 53, 64];
      heapifyCmp(data, 3, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 4', function () {
      const data = [53, 42, 64];
      heapifyCmp(data, 3, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 5', function () {
      const data = [53, 64, 42];
      heapifyCmp(data, 3, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 6', function () {
      const data = [64, 53, 42];
      heapifyCmp(data, 3, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('random', function () {
      const data = range(100);
      shuffle(data);
      heapifyCmp(data, data.length, cmp);
      expect(isHeapCmp(data, data.length, cmp)).to.equal(true);
    });
  });

  describe('min', function () {
    it('empty', function () {
      const data = [];
      heapifyMin(data, 0);
      expect(data).to.eql([]);
    });

    it('one element', function () {
      const data = [42];
      heapifyMin(data, 1);
      expect(data).to.eql([42]);
    });

    it('two elements 1', function () {
      const data = [42, 53];
      heapifyMin(data, 2);
      expect(data).to.eql([42, 53]);
    });

    it('two elements 2', function () {
      const data = [53, 42];
      heapifyMin(data, 2);
      expect(data).to.eql([42, 53]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      heapifyMin(data, 3);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      heapifyMin(data, 3);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 3', function () {
      const data = [42, 53, 64];
      heapifyMin(data, 3);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 4', function () {
      const data = [53, 42, 64];
      heapifyMin(data, 3);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 5', function () {
      const data = [53, 64, 42];
      heapifyMin(data, 3);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 6', function () {
      const data = [64, 53, 42];
      heapifyMin(data, 3);
      expect(data).to.eql([42, 53, 64]);
    });

    it('random', function () {
      const data = range(100);
      shuffle(data);
      heapifyMin(data, data.length);
      expect(isHeapMin(data, data.length)).to.equal(true);
    });
  });

  describe('max', function () {
    it('empty', function () {
      const data = [];
      heapifyMax(data, 0);
      expect(data).to.eql([]);
    });

    it('one element', function () {
      const data = [42];
      heapifyMax(data, 1);
      expect(data).to.eql([42]);
    });

    it('two elements 1', function () {
      const data = [42, 53];
      heapifyMax(data, 2);
      expect(data).to.eql([53, 42]);
    });

    it('two elements 2', function () {
      const data = [53, 42];
      heapifyMax(data, 2);
      expect(data).to.eql([53, 42]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      heapifyMax(data, 3);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      heapifyMax(data, 3);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 3', function () {
      const data = [42, 53, 64];
      heapifyMax(data, 3);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 4', function () {
      const data = [53, 42, 64];
      heapifyMax(data, 3);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 5', function () {
      const data = [53, 64, 42];
      heapifyMax(data, 3);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 6', function () {
      const data = [64, 53, 42];
      heapifyMax(data, 3);
      expect(data).to.eql([64, 53, 42]);
    });

    it('random', function () {
      const data = range(100);
      shuffle(data);
      heapifyMax(data, data.length);
      expect(isHeapMax(data, data.length)).to.equal(true);
    });
  });
});
