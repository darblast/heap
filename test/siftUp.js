import { expect } from 'chai';

import * as Heap from '../dist/heap.js';

describe('sift up', function () {
  describe('cmp', function () {
    const cmp = (lhs, rhs) => lhs < rhs;

    it('one element', function () {
      const data = [42];
      Heap.siftUpCmp(data, 0, cmp);
      expect(data).to.eql([42]);
    });

    it('two elements sorted 1', function () {
      const data = [42, 50];
      Heap.siftUpCmp(data, 0, cmp);
      expect(data).to.eql([42, 50]);
    });

    it('two elements sorted 2', function () {
      const data = [42, 50];
      Heap.siftUpCmp(data, 1, cmp);
      expect(data).to.eql([42, 50]);
    });

    it('two elements unsorted 1', function () {
      const data = [50, 42];
      Heap.siftUpCmp(data, 0, cmp);
      expect(data).to.eql([50, 42]);
    });

    it('two elements unsorted 2', function () {
      const data = [50, 42];
      Heap.siftUpCmp(data, 1, cmp);
      expect(data).to.eql([42, 50]);
    });

    it('three elements sorted 1', function () {
      const data = [42, 53, 64];
      Heap.siftUpCmp(data, 0, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements sorted 2', function () {
      const data = [42, 53, 64];
      Heap.siftUpCmp(data, 1, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements sorted 3', function () {
      const data = [42, 53, 64];
      Heap.siftUpCmp(data, 2, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements unsorted 1', function () {
      const data = [42, 64, 53];
      Heap.siftUpCmp(data, 0, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements unsorted 2', function () {
      const data = [42, 64, 53];
      Heap.siftUpCmp(data, 1, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements unsorted 3', function () {
      const data = [42, 64, 53];
      Heap.siftUpCmp(data, 2, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements unsorted 4', function () {
      const data = [53, 42, 64];
      Heap.siftUpCmp(data, 0, cmp);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements unsorted 5', function () {
      const data = [53, 42, 64];
      Heap.siftUpCmp(data, 1, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements unsorted 6', function () {
      const data = [53, 42, 64];
      Heap.siftUpCmp(data, 2, cmp);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements unsorted 7', function () {
      const data = [53, 64, 42];
      Heap.siftUpCmp(data, 0, cmp);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 8', function () {
      const data = [53, 64, 42];
      Heap.siftUpCmp(data, 1, cmp);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 9', function () {
      const data = [53, 64, 42];
      Heap.siftUpCmp(data, 2, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements unsorted 10', function () {
      const data = [64, 53, 42];
      Heap.siftUpCmp(data, 0, cmp);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 11', function () {
      const data = [64, 53, 42];
      Heap.siftUpCmp(data, 1, cmp);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 12', function () {
      const data = [64, 53, 42];
      Heap.siftUpCmp(data, 2, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements unsorted 13', function () {
      const data = [64, 53, 42];
      Heap.siftUpCmp(data, 0, cmp);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 14', function () {
      const data = [64, 53, 42];
      Heap.siftUpCmp(data, 1, cmp);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 15', function () {
      const data = [64, 53, 42];
      Heap.siftUpCmp(data, 2, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('four elements 1', function () {
      const data = [42, 53, 64, 75];
      Heap.siftUpCmp(data, 3, cmp);
      expect(data).to.eql([42, 53, 64, 75]);
    });

    it('four elements 2', function () {
      const data = [42, 75, 64, 53];
      Heap.siftUpCmp(data, 3, cmp);
      expect(data).to.eql([42, 53, 64, 75]);
    });

    it('four elements 3', function () {
      const data = [53, 64, 75, 42];
      Heap.siftUpCmp(data, 3, cmp);
      expect(data).to.eql([42, 53, 75, 64]);
    });

    it('five elements 1', function () {
      const data = [42, 53, 64, 75, 80];
      Heap.siftUpCmp(data, 4, cmp);
      expect(data).to.eql([42, 53, 64, 75, 80]);
    });

    it('five elements 2', function () {
      const data = [42, 53, 64, 75, 50];
      Heap.siftUpCmp(data, 4, cmp);
      expect(data).to.eql([42, 50, 64, 75, 53]);
    });

    it('five elements 3', function () {
      const data = [42, 53, 64, 75, 40];
      Heap.siftUpCmp(data, 4, cmp);
      expect(data).to.eql([40, 42, 64, 75, 53]);
    });
  });

  describe('min', function () {
    it('one element', function () {
      const data = [42];
      Heap.siftUpMin(data, 0);
      expect(data).to.eql([42]);
    });

    it('two elements sorted 1', function () {
      const data = [42, 50];
      Heap.siftUpMin(data, 0);
      expect(data).to.eql([42, 50]);
    });

    it('two elements sorted 2', function () {
      const data = [42, 50];
      Heap.siftUpMin(data, 1);
      expect(data).to.eql([42, 50]);
    });

    it('two elements unsorted 1', function () {
      const data = [50, 42];
      Heap.siftUpMin(data, 0);
      expect(data).to.eql([50, 42]);
    });

    it('two elements unsorted 2', function () {
      const data = [50, 42];
      Heap.siftUpMin(data, 1);
      expect(data).to.eql([42, 50]);
    });

    it('three elements sorted 1', function () {
      const data = [42, 53, 64];
      Heap.siftUpMin(data, 0);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements sorted 2', function () {
      const data = [42, 53, 64];
      Heap.siftUpMin(data, 1);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements sorted 3', function () {
      const data = [42, 53, 64];
      Heap.siftUpMin(data, 2);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements unsorted 1', function () {
      const data = [42, 64, 53];
      Heap.siftUpMin(data, 0);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements unsorted 2', function () {
      const data = [42, 64, 53];
      Heap.siftUpMin(data, 1);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements unsorted 3', function () {
      const data = [42, 64, 53];
      Heap.siftUpMin(data, 2);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements unsorted 4', function () {
      const data = [53, 42, 64];
      Heap.siftUpMin(data, 0);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements unsorted 5', function () {
      const data = [53, 42, 64];
      Heap.siftUpMin(data, 1);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements unsorted 6', function () {
      const data = [53, 42, 64];
      Heap.siftUpMin(data, 2);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements unsorted 7', function () {
      const data = [53, 64, 42];
      Heap.siftUpMin(data, 0);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 8', function () {
      const data = [53, 64, 42];
      Heap.siftUpMin(data, 1);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 9', function () {
      const data = [53, 64, 42];
      Heap.siftUpMin(data, 2);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements unsorted 10', function () {
      const data = [64, 53, 42];
      Heap.siftUpMin(data, 0);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 11', function () {
      const data = [64, 53, 42];
      Heap.siftUpMin(data, 1);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 12', function () {
      const data = [64, 53, 42];
      Heap.siftUpMin(data, 2);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements unsorted 13', function () {
      const data = [64, 53, 42];
      Heap.siftUpMin(data, 0);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 14', function () {
      const data = [64, 53, 42];
      Heap.siftUpMin(data, 1);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 15', function () {
      const data = [64, 53, 42];
      Heap.siftUpMin(data, 2);
      expect(data).to.eql([42, 53, 64]);
    });

    it('four elements 1', function () {
      const data = [42, 53, 64, 75];
      Heap.siftUpMin(data, 3);
      expect(data).to.eql([42, 53, 64, 75]);
    });

    it('four elements 2', function () {
      const data = [42, 75, 64, 53];
      Heap.siftUpMin(data, 3);
      expect(data).to.eql([42, 53, 64, 75]);
    });

    it('four elements 3', function () {
      const data = [53, 64, 75, 42];
      Heap.siftUpMin(data, 3);
      expect(data).to.eql([42, 53, 75, 64]);
    });

    it('five elements 1', function () {
      const data = [42, 53, 64, 75, 80];
      Heap.siftUpMin(data, 4);
      expect(data).to.eql([42, 53, 64, 75, 80]);
    });

    it('five elements 2', function () {
      const data = [42, 53, 64, 75, 50];
      Heap.siftUpMin(data, 4);
      expect(data).to.eql([42, 50, 64, 75, 53]);
    });

    it('five elements 3', function () {
      const data = [42, 53, 64, 75, 40];
      Heap.siftUpMin(data, 4);
      expect(data).to.eql([40, 42, 64, 75, 53]);
    });
  });

  describe('max', function () {
    it('one element', function () {
      const data = [42];
      Heap.siftUpMax(data, 0);
      expect(data).to.eql([42]);
    });

    it('two elements sorted 1', function () {
      const data = [42, 50];
      Heap.siftUpMax(data, 0);
      expect(data).to.eql([42, 50]);
    });

    it('two elements sorted 2', function () {
      const data = [42, 50];
      Heap.siftUpMax(data, 1);
      expect(data).to.eql([50, 42]);
    });

    it('two elements unsorted 1', function () {
      const data = [50, 42];
      Heap.siftUpMax(data, 0);
      expect(data).to.eql([50, 42]);
    });

    it('two elements unsorted 2', function () {
      const data = [50, 42];
      Heap.siftUpMax(data, 1);
      expect(data).to.eql([50, 42]);
    });

    it('three elements sorted 1', function () {
      const data = [42, 53, 64];
      Heap.siftUpMax(data, 0);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements sorted 2', function () {
      const data = [42, 53, 64];
      Heap.siftUpMax(data, 1);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements sorted 3', function () {
      const data = [42, 53, 64];
      Heap.siftUpMax(data, 2);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 1', function () {
      const data = [42, 64, 53];
      Heap.siftUpMax(data, 0);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements unsorted 2', function () {
      const data = [42, 64, 53];
      Heap.siftUpMax(data, 1);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements unsorted 3', function () {
      const data = [42, 64, 53];
      Heap.siftUpMax(data, 2);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 4', function () {
      const data = [53, 42, 64];
      Heap.siftUpMax(data, 0);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements unsorted 5', function () {
      const data = [53, 42, 64];
      Heap.siftUpMax(data, 1);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements unsorted 6', function () {
      const data = [53, 42, 64];
      Heap.siftUpMax(data, 2);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements unsorted 7', function () {
      const data = [53, 64, 42];
      Heap.siftUpMax(data, 0);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 8', function () {
      const data = [53, 64, 42];
      Heap.siftUpMax(data, 1);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 9', function () {
      const data = [53, 64, 42];
      Heap.siftUpMax(data, 2);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements unsorted 10', function () {
      const data = [64, 53, 42];
      Heap.siftUpMax(data, 0);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 11', function () {
      const data = [64, 53, 42];
      Heap.siftUpMax(data, 1);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 12', function () {
      const data = [64, 53, 42];
      Heap.siftUpMax(data, 2);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 13', function () {
      const data = [64, 53, 42];
      Heap.siftUpMax(data, 0);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 14', function () {
      const data = [64, 53, 42];
      Heap.siftUpMax(data, 1);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements unsorted 15', function () {
      const data = [64, 53, 42];
      Heap.siftUpMax(data, 2);
      expect(data).to.eql([64, 53, 42]);
    });

    it('four elements 1', function () {
      const data = [75, 64, 53, 50];
      Heap.siftUpMax(data, 3);
      expect(data).to.eql([75, 64, 53, 50]);
    });

    it('four elements 2', function () {
      const data = [75, 64, 53, 70];
      Heap.siftUpMax(data, 3);
      expect(data).to.eql([75, 70, 53, 64]);
    });

    it('four elements 3', function () {
      const data = [75, 64, 53, 80];
      Heap.siftUpMax(data, 3);
      expect(data).to.eql([80, 75, 53, 64]);
    });

    it('five elements 1', function () {
      const data = [75, 64, 53, 42, 60];
      Heap.siftUpMax(data, 4);
      expect(data).to.eql([75, 64, 53, 42, 60]);
    });

    it('five elements 2', function () {
      const data = [75, 64, 53, 42, 70];
      Heap.siftUpMax(data, 4);
      expect(data).to.eql([75, 70, 53, 42, 64]);
    });

    it('five elements 3', function () {
      const data = [75, 64, 53, 42, 80];
      Heap.siftUpMax(data, 4);
      expect(data).to.eql([80, 75, 53, 42, 64]);
    });
  });
});
