import { expect } from 'chai';

import * as Heap from '../dist/heap.js';

describe('push', function () {
  describe('cmp', function () {
    const cmp = (lhs, rhs) => lhs < rhs;

    it('empty', function () {
      const data = [];
      Heap.pushCmp(data, 42, cmp);
      expect(data).to.eql([42]);
    });

    it('one element 1', function () {
      const data = [53];
      Heap.pushCmp(data, 42, cmp);
      expect(data).to.eql([42, 53]);
    });

    it('one element 2', function () {
      const data = [53];
      Heap.pushCmp(data, 64, cmp);
      expect(data).to.eql([53, 64]);
    });

    it('two elements 1', function () {
      const data = [42, 53];
      Heap.pushCmp(data, 40, cmp);
      expect(data).to.eql([40, 53, 42]);
    });

    it('two elements 2', function () {
      const data = [42, 53];
      Heap.pushCmp(data, 50, cmp);
      expect(data).to.eql([42, 53, 50]);
    });

    it('two elements 3', function () {
      const data = [42, 53];
      Heap.pushCmp(data, 60, cmp);
      expect(data).to.eql([42, 53, 60]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      Heap.pushCmp(data, 40, cmp);
      expect(data).to.eql([40, 42, 64, 53]);
    });

    it('three elements 2', function () {
      const data = [42, 53, 64];
      Heap.pushCmp(data, 50, cmp);
      expect(data).to.eql([42, 50, 64, 53]);
    });

    it('three elements 3', function () {
      const data = [42, 53, 64];
      Heap.pushCmp(data, 60, cmp);
      expect(data).to.eql([42, 53, 64, 60]);
    });

    it('three elements 4', function () {
      const data = [42, 53, 64];
      Heap.pushCmp(data, 70, cmp);
      expect(data).to.eql([42, 53, 64, 70]);
    });
  });

  describe('min', function () {
    it('empty', function () {
      const data = [];
      Heap.pushMin(data, 42);
      expect(data).to.eql([42]);
    });

    it('one element 1', function () {
      const data = [53];
      Heap.pushMin(data, 42);
      expect(data).to.eql([42, 53]);
    });

    it('one element 2', function () {
      const data = [53];
      Heap.pushMin(data, 64);
      expect(data).to.eql([53, 64]);
    });

    it('two elements 1', function () {
      const data = [42, 53];
      Heap.pushMin(data, 40);
      expect(data).to.eql([40, 53, 42]);
    });

    it('two elements 2', function () {
      const data = [42, 53];
      Heap.pushMin(data, 50);
      expect(data).to.eql([42, 53, 50]);
    });

    it('two elements 3', function () {
      const data = [42, 53];
      Heap.pushMin(data, 60);
      expect(data).to.eql([42, 53, 60]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      Heap.pushMin(data, 40);
      expect(data).to.eql([40, 42, 64, 53]);
    });

    it('three elements 2', function () {
      const data = [42, 53, 64];
      Heap.pushMin(data, 50);
      expect(data).to.eql([42, 50, 64, 53]);
    });

    it('three elements 3', function () {
      const data = [42, 53, 64];
      Heap.pushMin(data, 60);
      expect(data).to.eql([42, 53, 64, 60]);
    });

    it('three elements 4', function () {
      const data = [42, 53, 64];
      Heap.pushMin(data, 70);
      expect(data).to.eql([42, 53, 64, 70]);
    });
  });

  describe('max', function () {
    it('empty', function () {
      const data = [];
      Heap.pushMax(data, 42);
      expect(data).to.eql([42]);
    });

    it('one element 1', function () {
      const data = [53];
      Heap.pushMax(data, 42);
      expect(data).to.eql([53, 42]);
    });

    it('one element 2', function () {
      const data = [53];
      Heap.pushMax(data, 64);
      expect(data).to.eql([64, 53]);
    });

    it('two elements 1', function () {
      const data = [53, 42];
      Heap.pushMax(data, 40);
      expect(data).to.eql([53, 42, 40]);
    });

    it('two elements 2', function () {
      const data = [53, 42];
      Heap.pushMax(data, 50);
      expect(data).to.eql([53, 42, 50]);
    });

    it('two elements 3', function () {
      const data = [53, 42];
      Heap.pushMax(data, 60);
      expect(data).to.eql([60, 42, 53]);
    });

    it('three elements 1', function () {
      const data = [64, 53, 42];
      Heap.pushMax(data, 40);
      expect(data).to.eql([64, 53, 42, 40]);
    });

    it('three elements 2', function () {
      const data = [64, 53, 42];
      Heap.pushMax(data, 50);
      expect(data).to.eql([64, 53, 42, 50]);
    });

    it('three elements 3', function () {
      const data = [64, 53, 42];
      Heap.pushMax(data, 60);
      expect(data).to.eql([64, 60, 42, 53]);
    });

    it('three elements 4', function () {
      const data = [64, 53, 42];
      Heap.pushMax(data, 70);
      expect(data).to.eql([70, 64, 42, 53]);
    });
  });
});
