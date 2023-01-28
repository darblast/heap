import chai, { expect } from 'chai';
import deepEqualInAnyOrder from 'deep-equal-in-any-order';

chai.use(deepEqualInAnyOrder);

import { PriorityQueue } from '../dist/heap.js';

describe('PriorityQueue', function () {
  const cmp = (lhs, rhs) => lhs < rhs;
  let queue;

  beforeEach(function () {
    queue = new PriorityQueue(cmp);
  });

  it('initial state', function () {
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('push one', function () {
    queue.push(42);
    expect(queue.length).to.equal(1);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42]);
  });

  it('push two', function () {
    queue.push(42, 53);
    expect(queue.length).to.equal(2);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42, 53]);
  });

  it('push two in reverse order', function () {
    queue.push(53, 42);
    expect(queue.length).to.equal(2);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42, 53]);
  });

  it('push two separately', function () {
    queue.push(42);
    queue.push(53);
    expect(queue.length).to.equal(2);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42, 53]);
  });

  it('push two separately in reverse order', function () {
    queue.push(53);
    queue.push(42);
    expect(queue.length).to.equal(2);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42, 53]);
  });

  it('push three 1', function () {
    queue.push(42, 53, 64);
    expect(queue.length).to.equal(3);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42, 53, 64]);
  });

  it('push three 2', function () {
    queue.push(42, 64, 53);
    expect(queue.length).to.equal(3);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42, 53, 64]);
  });

  it('push three 3', function () {
    queue.push(53, 42, 64);
    expect(queue.length).to.equal(3);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42, 53, 64]);
  });

  it('push three 4', function () {
    queue.push(53, 64, 42);
    expect(queue.length).to.equal(3);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42, 53, 64]);
  });

  it('push three 5', function () {
    queue.push(64, 42, 53);
    expect(queue.length).to.equal(3);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42, 53, 64]);
  });

  it('push three 6', function () {
    queue.push(64, 53, 42);
    expect(queue.length).to.equal(3);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(42);
    expect([...queue]).to.deep.equalInAnyOrder([42, 53, 64]);
  });

  it('pop empty', function () {
    expect(() => queue.pop()).to.throw();
  });

  it('pop one from one element', function () {
    queue.push(42);
    expect(queue.pop()).to.equal(42);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('pop one from two elements 1', function () {
    queue.push(42, 53);
    expect(queue.pop()).to.equal(42);
    expect(queue.length).to.equal(1);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(53);
    expect([...queue]).to.deep.equalInAnyOrder([53]);
  });

  it('pop one from two elements 2', function () {
    queue.push(53, 42);
    expect(queue.pop()).to.equal(42);
    expect(queue.length).to.equal(1);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(53);
    expect([...queue]).to.deep.equalInAnyOrder([53]);
  });

  it('pop one from three elements 1', function () {
    queue.push(42, 53, 64);
    expect(queue.pop()).to.equal(42);
    expect(queue.length).to.equal(2);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(53);
    expect([...queue]).to.deep.equalInAnyOrder([53, 64]);
  });

  it('pop one from three elements 2', function () {
    queue.push(42, 64, 53);
    expect(queue.pop()).to.equal(42);
    expect(queue.length).to.equal(2);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(53);
    expect([...queue]).to.deep.equalInAnyOrder([53, 64]);
  });

  it('pop one from three elements 3', function () {
    queue.push(53, 42, 64);
    expect(queue.pop()).to.equal(42);
    expect(queue.length).to.equal(2);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(53);
    expect([...queue]).to.deep.equalInAnyOrder([53, 64]);
  });

  it('pop one from three elements 4', function () {
    queue.push(53, 64, 42);
    expect(queue.pop()).to.equal(42);
    expect(queue.length).to.equal(2);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(53);
    expect([...queue]).to.deep.equalInAnyOrder([53, 64]);
  });

  it('pop one from three elements 5', function () {
    queue.push(64, 42, 53);
    expect(queue.pop()).to.equal(42);
    expect(queue.length).to.equal(2);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(53);
    expect([...queue]).to.deep.equalInAnyOrder([53, 64]);
  });

  it('pop one from three elements 6', function () {
    queue.push(64, 53, 42);
    expect(queue.pop()).to.equal(42);
    expect(queue.length).to.equal(2);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(53);
    expect([...queue]).to.deep.equalInAnyOrder([53, 64]);
  });

  it('pop two from two elements 1', function () {
    queue.push(42, 53);
    expect(queue.pop()).to.equal(42);
    expect(queue.pop()).to.equal(53);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('pop two from two elements 2', function () {
    queue.push(53, 42);
    expect(queue.pop()).to.equal(42);
    expect(queue.pop()).to.equal(53);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('pop two from three elements 1', function () {
    queue.push(42, 53, 64);
    expect(queue.pop()).to.equal(42);
    expect(queue.pop()).to.equal(53);
    expect(queue.length).to.equal(1);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(64);
    expect([...queue]).to.deep.equalInAnyOrder([64]);
  });

  it('pop two from three elements 2', function () {
    queue.push(42, 64, 53);
    expect(queue.pop()).to.equal(42);
    expect(queue.pop()).to.equal(53);
    expect(queue.length).to.equal(1);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(64);
    expect([...queue]).to.deep.equalInAnyOrder([64]);
  });

  it('pop two from three elements 3', function () {
    queue.push(53, 42, 64);
    expect(queue.pop()).to.equal(42);
    expect(queue.pop()).to.equal(53);
    expect(queue.length).to.equal(1);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(64);
    expect([...queue]).to.deep.equalInAnyOrder([64]);
  });

  it('pop two from three elements 4', function () {
    queue.push(53, 64, 42);
    expect(queue.pop()).to.equal(42);
    expect(queue.pop()).to.equal(53);
    expect(queue.length).to.equal(1);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(64);
    expect([...queue]).to.deep.equalInAnyOrder([64]);
  });

  it('pop two from three elements 5', function () {
    queue.push(64, 42, 53);
    expect(queue.pop()).to.equal(42);
    expect(queue.pop()).to.equal(53);
    expect(queue.length).to.equal(1);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(64);
    expect([...queue]).to.deep.equalInAnyOrder([64]);
  });

  it('pop two from three elements 6', function () {
    queue.push(64, 53, 42);
    expect(queue.pop()).to.equal(42);
    expect(queue.pop()).to.equal(53);
    expect(queue.length).to.equal(1);
    expect(queue.empty).to.equal(false);
    expect(queue.top).to.equal(64);
    expect([...queue]).to.deep.equalInAnyOrder([64]);
  });

  it('spread empty queue', function () {
    expect([...queue.spread()]).to.eql([]);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('spread one element', function () {
    queue.push(42);
    expect([...queue.spread()]).to.eql([42]);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('spread two elements 1', function () {
    queue.push(42, 53);
    expect([...queue.spread()]).to.eql([42, 53]);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('spread two elements 2', function () {
    queue.push(53, 42);
    expect([...queue.spread()]).to.eql([42, 53]);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('spread three elements 1', function () {
    queue.push(42, 53, 64);
    expect([...queue.spread()]).to.eql([42, 53, 64]);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('spread three elements 2', function () {
    queue.push(42, 64, 53);
    expect([...queue.spread()]).to.eql([42, 53, 64]);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('spread three elements 3', function () {
    queue.push(53, 42, 64);
    expect([...queue.spread()]).to.eql([42, 53, 64]);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('spread three elements 4', function () {
    queue.push(53, 64, 42);
    expect([...queue.spread()]).to.eql([42, 53, 64]);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('spread three elements 5', function () {
    queue.push(64, 42, 53);
    expect([...queue.spread()]).to.eql([42, 53, 64]);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });

  it('spread three elements 6', function () {
    queue.push(64, 53, 42);
    expect([...queue.spread()]).to.eql([42, 53, 64]);
    expect(queue.length).to.equal(0);
    expect(queue.empty).to.equal(true);
    expect([...queue]).to.deep.equalInAnyOrder([]);
  });
});
