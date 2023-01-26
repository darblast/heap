import { expect } from 'chai';

import * as Heap from '../dist/heap.js';

describe('push', function () {
  describe('cmp', function () {
    const cmp = (lhs, rhs) => lhs < rhs;

    it('empty', function () {
      const data = [];
      expect(() => Heap.popCmp(data, cmp)).to.throw();
    });

    it('one element', function () {
      const data = [42];
      expect(Heap.popCmp(data, cmp)).to.equal(42);
      expect(data).to.eql([]);
    });

    it('two elements', function () {
      const data = [42, 53];
      expect(Heap.popCmp(data, cmp)).to.equal(42);
      expect(data).to.eql([53]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      expect(Heap.popCmp(data, cmp)).to.equal(42);
      expect(data).to.eql([53, 64]);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      expect(Heap.popCmp(data, cmp)).to.equal(42);
      expect(data).to.eql([53, 64]);
    });

    it('four elements 1', function () {
      const data = [42, 53, 64, 75];
      expect(Heap.popCmp(data, cmp)).to.equal(42);
      expect(data).to.eql([53, 75, 64]);
    });

    it('four elements 2', function () {
      const data = [42, 64, 53, 75];
      expect(Heap.popCmp(data, cmp)).to.equal(42);
      expect(data).to.eql([53, 64, 75]);
    });
  });

  describe('min', function () {
    it('empty', function () {
      const data = [];
      expect(() => Heap.popMin(data)).to.throw();
    });

    it('one element', function () {
      const data = [42];
      expect(Heap.popMin(data)).to.equal(42);
      expect(data).to.eql([]);
    });

    it('two elements', function () {
      const data = [42, 53];
      expect(Heap.popMin(data)).to.equal(42);
      expect(data).to.eql([53]);
    });

    it('three elements 1', function () {
      const data = [42, 53, 64];
      expect(Heap.popMin(data)).to.equal(42);
      expect(data).to.eql([53, 64]);
    });

    it('three elements 2', function () {
      const data = [42, 64, 53];
      expect(Heap.popMin(data)).to.equal(42);
      expect(data).to.eql([53, 64]);
    });

    it('four elements 1', function () {
      const data = [42, 53, 64, 75];
      expect(Heap.popMin(data)).to.equal(42);
      expect(data).to.eql([53, 75, 64]);
    });

    it('four elements 2', function () {
      const data = [42, 64, 53, 75];
      expect(Heap.popMin(data)).to.equal(42);
      expect(data).to.eql([53, 64, 75]);
    });
  });

  describe('max', function () {
    it('empty', function () {
      const data = [];
      expect(() => Heap.popMax(data)).to.throw();
    });

    it('one element', function () {
      const data = [42];
      expect(Heap.popMax(data)).to.equal(42);
      expect(data).to.eql([]);
    });

    it('two elements', function () {
      const data = [53, 42];
      expect(Heap.popMax(data)).to.equal(53);
      expect(data).to.eql([42]);
    });

    it('three elements 1', function () {
      const data = [64, 53, 42];
      expect(Heap.popMax(data)).to.equal(64);
      expect(data).to.eql([53, 42]);
    });

    it('three elements 2', function () {
      const data = [64, 42, 53];
      expect(Heap.popMax(data)).to.equal(64);
      expect(data).to.eql([53, 42]);
    });

    it('four elements 1', function () {
      const data = [75, 64, 53, 42];
      expect(Heap.popMax(data)).to.equal(75);
      expect(data).to.eql([64, 42, 53]);
    });

    it('four elements 2', function () {
      const data = [75, 53, 64, 42];
      expect(Heap.popMax(data)).to.equal(75);
      expect(data).to.eql([64, 53, 42]);
    });
  });
});
