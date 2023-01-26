import { expect } from 'chai';

import * as Heap from '../dist/heap.js';

describe('sift down', function () {
  describe('cmp', function () {
    const cmp = (lhs, rhs) => lhs < rhs;

    it('one element', function () {
      const data = [42];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42]);
    });

    it('two elements sorted 1', function () {
      const data = [42, 53];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 53]);
    });

    it('two elements sorted 2', function () {
      const data = [42, 53];
      Heap.siftDownCmp(data, 1, cmp);
      expect(data).to.eql([42, 53]);
    });

    it('two elements unsorted 1', function () {
      const data = [53, 42];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 53]);
    });

    it('two elements unsorted 2', function () {
      const data = [53, 42];
      Heap.siftDownCmp(data, 1, cmp);
      expect(data).to.eql([53, 42]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 2', function () {
      const data = [42, 53, 64];
      Heap.siftDownCmp(data, 1, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 3', function () {
      const data = [42, 53, 64];
      Heap.siftDownCmp(data, 2, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 4', function () {
      const data = [42, 64, 53];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 5', function () {
      const data = [42, 64, 53];
      Heap.siftDownCmp(data, 1, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 6', function () {
      const data = [42, 64, 53];
      Heap.siftDownCmp(data, 2, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 7', function () {
      const data = [53, 42, 64];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 8', function () {
      const data = [53, 42, 64];
      Heap.siftDownCmp(data, 1, cmp);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements 9', function () {
      const data = [53, 42, 64];
      Heap.siftDownCmp(data, 2, cmp);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements 10', function () {
      const data = [53, 64, 42];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 11', function () {
      const data = [53, 64, 42];
      Heap.siftDownCmp(data, 1, cmp);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements 12', function () {
      const data = [53, 64, 42];
      Heap.siftDownCmp(data, 2, cmp);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements 13', function () {
      const data = [64, 42, 53];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 14', function () {
      const data = [64, 42, 53];
      Heap.siftDownCmp(data, 1, cmp);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 15', function () {
      const data = [64, 42, 53];
      Heap.siftDownCmp(data, 2, cmp);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 16', function () {
      const data = [64, 53, 42];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 17', function () {
      const data = [64, 53, 42];
      Heap.siftDownCmp(data, 1, cmp);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 18', function () {
      const data = [64, 53, 42];
      Heap.siftDownCmp(data, 2, cmp);
      expect(data).to.eql([64, 53, 42]);
    });

    it('four elements 1', function () {
      const data = [40, 42, 53, 64];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([40, 42, 53, 64]);
    });

    it('four elements 2', function () {
      const data = [50, 42, 53, 64];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 50, 53, 64]);
    });

    it('four elements 3', function () {
      const data = [60, 42, 53, 64];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 60, 53, 64]);
    });

    it('four elements 4', function () {
      const data = [70, 42, 53, 64];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 64, 53, 70]);
    });

    it('four elements 5', function () {
      const data = [70, 53, 42, 64];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 53, 70, 64]);
    });

    it('five elements 1', function () {
      const data = [40, 42, 53, 64, 75];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([40, 42, 53, 64, 75]);
    });

    it('five elements 2', function () {
      const data = [50, 42, 53, 64, 75];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 50, 53, 64, 75]);
    });

    it('five elements 3', function () {
      const data = [50, 53, 42, 64, 75];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 53, 50, 64, 75]);
    });

    it('five elements 4', function () {
      const data = [60, 42, 53, 64, 75];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 60, 53, 64, 75]);
    });

    it('five elements 5', function () {
      const data = [60, 53, 42, 64, 75];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 53, 60, 64, 75]);
    });

    it('five elements 6', function () {
      const data = [70, 42, 53, 64, 75];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 64, 53, 70, 75]);
    });

    it('five elements 7', function () {
      const data = [70, 53, 42, 64, 75];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 53, 70, 64, 75]);
    });

    it('five elements 8', function () {
      const data = [80, 42, 53, 64, 75];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 64, 53, 80, 75]);
    });

    it('five elements 9', function () {
      const data = [80, 53, 42, 64, 75];
      Heap.siftDownCmp(data, 0, cmp);
      expect(data).to.eql([42, 53, 80, 64, 75]);
    });
  });

  describe('min', function () {
    it('one element', function () {
      const data = [42];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42]);
    });

    it('two elements sorted 1', function () {
      const data = [42, 53];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 53]);
    });

    it('two elements sorted 2', function () {
      const data = [42, 53];
      Heap.siftDownMin(data, 1);
      expect(data).to.eql([42, 53]);
    });

    it('two elements unsorted 1', function () {
      const data = [53, 42];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 53]);
    });

    it('two elements unsorted 2', function () {
      const data = [53, 42];
      Heap.siftDownMin(data, 1);
      expect(data).to.eql([53, 42]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 2', function () {
      const data = [42, 53, 64];
      Heap.siftDownMin(data, 1);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 3', function () {
      const data = [42, 53, 64];
      Heap.siftDownMin(data, 2);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 4', function () {
      const data = [42, 64, 53];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 5', function () {
      const data = [42, 64, 53];
      Heap.siftDownMin(data, 1);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 6', function () {
      const data = [42, 64, 53];
      Heap.siftDownMin(data, 2);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 7', function () {
      const data = [53, 42, 64];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 8', function () {
      const data = [53, 42, 64];
      Heap.siftDownMin(data, 1);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements 9', function () {
      const data = [53, 42, 64];
      Heap.siftDownMin(data, 2);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements 10', function () {
      const data = [53, 64, 42];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 11', function () {
      const data = [53, 64, 42];
      Heap.siftDownMin(data, 1);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements 12', function () {
      const data = [53, 64, 42];
      Heap.siftDownMin(data, 2);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements 13', function () {
      const data = [64, 42, 53];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 14', function () {
      const data = [64, 42, 53];
      Heap.siftDownMin(data, 1);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 15', function () {
      const data = [64, 42, 53];
      Heap.siftDownMin(data, 2);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 16', function () {
      const data = [64, 53, 42];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 17', function () {
      const data = [64, 53, 42];
      Heap.siftDownMin(data, 1);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 18', function () {
      const data = [64, 53, 42];
      Heap.siftDownMin(data, 2);
      expect(data).to.eql([64, 53, 42]);
    });

    it('four elements 1', function () {
      const data = [40, 42, 53, 64];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([40, 42, 53, 64]);
    });

    it('four elements 2', function () {
      const data = [50, 42, 53, 64];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 50, 53, 64]);
    });

    it('four elements 3', function () {
      const data = [60, 42, 53, 64];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 60, 53, 64]);
    });

    it('four elements 4', function () {
      const data = [70, 42, 53, 64];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 64, 53, 70]);
    });

    it('four elements 5', function () {
      const data = [70, 53, 42, 64];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 53, 70, 64]);
    });

    it('five elements 1', function () {
      const data = [40, 42, 53, 64, 75];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([40, 42, 53, 64, 75]);
    });

    it('five elements 2', function () {
      const data = [50, 42, 53, 64, 75];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 50, 53, 64, 75]);
    });

    it('five elements 3', function () {
      const data = [50, 53, 42, 64, 75];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 53, 50, 64, 75]);
    });

    it('five elements 4', function () {
      const data = [60, 42, 53, 64, 75];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 60, 53, 64, 75]);
    });

    it('five elements 5', function () {
      const data = [60, 53, 42, 64, 75];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 53, 60, 64, 75]);
    });

    it('five elements 6', function () {
      const data = [70, 42, 53, 64, 75];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 64, 53, 70, 75]);
    });

    it('five elements 7', function () {
      const data = [70, 53, 42, 64, 75];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 53, 70, 64, 75]);
    });

    it('five elements 8', function () {
      const data = [80, 42, 53, 64, 75];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 64, 53, 80, 75]);
    });

    it('five elements 9', function () {
      const data = [80, 53, 42, 64, 75];
      Heap.siftDownMin(data, 0);
      expect(data).to.eql([42, 53, 80, 64, 75]);
    });
  });

  describe('max', function () {
    it('one element', function () {
      const data = [42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([42]);
    });

    it('two elements sorted 1', function () {
      const data = [42, 53];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([53, 42]);
    });

    it('two elements sorted 2', function () {
      const data = [42, 53];
      Heap.siftDownMax(data, 1);
      expect(data).to.eql([42, 53]);
    });

    it('two elements unsorted 1', function () {
      const data = [53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([53, 42]);
    });

    it('two elements unsorted 2', function () {
      const data = [53, 42];
      Heap.siftDownMax(data, 1);
      expect(data).to.eql([53, 42]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 2', function () {
      const data = [42, 53, 64];
      Heap.siftDownMax(data, 1);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 3', function () {
      const data = [42, 53, 64];
      Heap.siftDownMax(data, 2);
      expect(data).to.eql([42, 53, 64]);
    });

    it('three elements 4', function () {
      const data = [42, 64, 53];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 5', function () {
      const data = [42, 64, 53];
      Heap.siftDownMax(data, 1);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 6', function () {
      const data = [42, 64, 53];
      Heap.siftDownMax(data, 2);
      expect(data).to.eql([42, 64, 53]);
    });

    it('three elements 7', function () {
      const data = [53, 42, 64];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 8', function () {
      const data = [53, 42, 64];
      Heap.siftDownMax(data, 1);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements 9', function () {
      const data = [53, 42, 64];
      Heap.siftDownMax(data, 2);
      expect(data).to.eql([53, 42, 64]);
    });

    it('three elements 10', function () {
      const data = [53, 64, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 11', function () {
      const data = [53, 64, 42];
      Heap.siftDownMax(data, 1);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements 12', function () {
      const data = [53, 64, 42];
      Heap.siftDownMax(data, 2);
      expect(data).to.eql([53, 64, 42]);
    });

    it('three elements 13', function () {
      const data = [64, 42, 53];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 14', function () {
      const data = [64, 42, 53];
      Heap.siftDownMax(data, 1);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 15', function () {
      const data = [64, 42, 53];
      Heap.siftDownMax(data, 2);
      expect(data).to.eql([64, 42, 53]);
    });

    it('three elements 16', function () {
      const data = [64, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 17', function () {
      const data = [64, 53, 42];
      Heap.siftDownMax(data, 1);
      expect(data).to.eql([64, 53, 42]);
    });

    it('three elements 18', function () {
      const data = [64, 53, 42];
      Heap.siftDownMax(data, 2);
      expect(data).to.eql([64, 53, 42]);
    });

    it('four elements 1', function () {
      const data = [70, 64, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([70, 64, 53, 42]);
    });

    it('four elements 2', function () {
      const data = [60, 64, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([64, 60, 53, 42]);
    });

    it('four elements 3', function () {
      const data = [50, 64, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([64, 50, 53, 42]);
    });

    it('four elements 4', function () {
      const data = [40, 64, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([64, 42, 53, 40]);
    });

    it('four elements 5', function () {
      const data = [40, 53, 64, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([64, 53, 40, 42]);
    });

    it('five elements 1', function () {
      const data = [80, 75, 64, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([80, 75, 64, 53, 42]);
    });

    it('five elements 2', function () {
      const data = [70, 75, 64, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([75, 70, 64, 53, 42]);
    });

    it('five elements 3', function () {
      const data = [70, 64, 75, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([75, 64, 70, 53, 42]);
    });

    it('five elements 4', function () {
      const data = [60, 75, 64, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([75, 60, 64, 53, 42]);
    });

    it('five elements 5', function () {
      const data = [60, 64, 75, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([75, 64, 60, 53, 42]);
    });

    it('five elements 6', function () {
      const data = [50, 75, 64, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([75, 53, 64, 50, 42]);
    });

    it('five elements 7', function () {
      const data = [50, 64, 75, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([75, 64, 50, 53, 42]);
    });

    it('five elements 8', function () {
      const data = [40, 75, 64, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([75, 53, 64, 40, 42]);
    });

    it('five elements 9', function () {
      const data = [40, 64, 75, 53, 42];
      Heap.siftDownMax(data, 0);
      expect(data).to.eql([75, 64, 40, 53, 42]);
    });
  });
});
