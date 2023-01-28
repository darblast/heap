/**
 * Comparison function used by the `Cmp` version of each algorithm.
 *
 * It must be a pure function that compares two elements and returns a boolean indicating whether
 * the left-hand side is more extreme than the right-hand side. For example, in a min-heap (lowest
 * elements on top) the comparison function returns true iff `lhs < rhs`.
 */
export type CompareFn<Element> = (lhs: Element, rhs: Element) => boolean;

function swap<Element>(data: Element[], i: number, j: number): void {
  const temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}

/**
 * Moves an element up through the heap until the heap property is restored.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param index The index of the element to move.
 * @param cmp The comparison function of the heap.
 * @returns The new index of the element.
 */
export function siftUpCmp<Element>(
  data: Element[],
  index: number,
  cmp: CompareFn<Element>
): number {
  while (index > 0) {
    const parent = (index - 1) >>> 1;
    if (cmp(data[index], data[parent])) {
      swap(data, index, parent);
      index = parent;
    } else {
      return index;
    }
  }
  return index;
}

/**
 * Moves an element up through the heap until the heap property is restored.
 *
 * Uses the < operator for comparisons, producing a min-heap.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param index The index of the element to move.
 * @returns The new index of the element.
 */
export function siftUpMin<Element>(data: Element[], index: number): number {
  while (index > 0) {
    const parent = (index - 1) >>> 1;
    if (data[index] < data[parent]) {
      swap(data, index, parent);
      index = parent;
    } else {
      return index;
    }
  }
  return index;
}

/**
 * Moves an element up through the heap until the heap property is restored.
 *
 * Uses the > operator for comparisons, producing a max-heap.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param index The index of the element to move.
 * @returns The new index of the element.
 */
export function siftUpMax<Element>(data: Element[], index: number): number {
  while (index > 0) {
    const parent = (index - 1) >>> 1;
    if (data[index] > data[parent]) {
      swap(data, index, parent);
      index = parent;
    } else {
      return index;
    }
  }
  return index;
}

/**
 * Moves an element down by one level in the heap.
 *
 * Complexity: `O(1)`.
 *
 * @param data The array representation of a binary heap.
 * @param count The number of elements in the affected range, which may be lower than `data.length`.
 * @param index The index of the element to move.
 * @param cmp The comparison function of the heap.
 * @returns The new index of the element, or -1 if the element cannot be moved.
 */
function moveDownCmp<Element>(
  data: Element[],
  count: number,
  index: number,
  cmp: CompareFn<Element>
): number {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  if (right < count) {
    if (cmp(data[right], data[left])) {
      if (cmp(data[right], data[index])) {
        swap(data, index, right);
        return right;
      } else {
        return -1;
      }
    } else if (cmp(data[left], data[index])) {
      swap(data, index, left);
      return left;
    } else {
      return -1;
    }
  } else if (left < count && cmp(data[left], data[index])) {
    swap(data, index, left);
    return left;
  } else {
    return -1;
  }
}

/**
 * Moves an element down by one level in the heap.
 *
 * Uses the < operator for comparisons, producing a min-heap.
 *
 * Complexity: `O(1)`.
 *
 * @param data The array representation of a binary heap.
 * @param count The number of elements in the affected range, which may be lower than `data.length`.
 * @param index The index of the element to move.
 * @returns The new index of the element, or -1 if the element cannot be moved.
 */
function moveDownMin<Element>(data: Element[], count: number, index: number): number {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  if (right < count) {
    if (data[right] < data[left]) {
      if (data[right] < data[index]) {
        swap(data, index, right);
        return right;
      } else {
        return -1;
      }
    } else if (data[left] < data[index]) {
      swap(data, index, left);
      return left;
    } else {
      return -1;
    }
  } else if (left < count && data[left] < data[index]) {
    swap(data, index, left);
    return left;
  } else {
    return -1;
  }
}

/**
 * Moves an element down by one level in the heap.
 *
 * Uses the > operator for comparisons, producing a max-heap.
 *
 * Complexity: `O(1)`.
 *
 * @param data The array representation of a binary heap.
 * @param count The number of elements in the affected range, which may be lower than `data.length`.
 * @param index The index of the element to move.
 * @returns The new index of the element, or -1 if the element cannot be moved.
 */
function moveDownMax<Element>(data: Element[], count: number, index: number): number {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  if (right < count) {
    if (data[right] > data[left]) {
      if (data[right] > data[index]) {
        swap(data, index, right);
        return right;
      } else {
        return -1;
      }
    } else if (data[left] > data[index]) {
      swap(data, index, left);
      return left;
    } else {
      return -1;
    }
  } else if (left < count && data[left] > data[index]) {
    swap(data, index, left);
    return left;
  } else {
    return -1;
  }
}

/**
 * Moves an element down through the heap until the heap property is restored.
 *
 * Complexity: `O(log(N))`, with `N = count`.
 *
 * @param data The array representation of a binary heap.
 * @param count The number of elements in the affected range, which may be lower than `data.length`.
 * @param index The index of the element to move.
 * @param cmp The comparison function of the heap.
 * @returns The new index of the element.
 */
export function siftDownCmp<Element>(
  data: Element[],
  count: number,
  index: number,
  cmp: CompareFn<Element>
): number {
  let newIndex;
  while (((newIndex = moveDownCmp(data, count, index, cmp)), newIndex >= 0)) {
    index = newIndex;
  }
  return index;
}

/**
 * Moves an element down through the heap until the heap property is restored.
 *
 * Uses the < operator for comparisons, producing a min-heap.
 *
 * Complexity: `O(log(N))`, with `N = count`.
 *
 * @param data The array representation of a binary heap.
 * @param count The number of elements in the affected range, which may be lower than `data.length`.
 * @param index The index of the element to move.
 * @returns The new index of the element.
 */
export function siftDownMin<Element>(data: Element[], count: number, index: number): number {
  let newIndex;
  while (((newIndex = moveDownMin(data, count, index)), newIndex >= 0)) {
    index = newIndex;
  }
  return index;
}

/**
 * Moves an element down through the heap until the heap property is restored.
 *
 * Uses the > operator for comparisons, producing a max-heap.
 *
 * Complexity: `O(log(N))`, with `N = count`.
 *
 * @param data The array representation of a binary heap.
 * @param count The number of elements in the affected range, which may be lower than `data.length`.
 * @param index The index of the element to move.
 * @returns The new index of the element.
 */
export function siftDownMax<Element>(data: Element[], count: number, index: number): number {
  let newIndex;
  while (((newIndex = moveDownMax(data, count, index)), newIndex >= 0)) {
    index = newIndex;
  }
  return index;
}

/**
 * Inserts an element in the heap.
 *
 * This function works by pushing the element at the end of the array and calling {@link siftUpCmp}
 * to restore the heap property.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param element The element to insert.
 * @param cmp The comparison function of the heap.
 */
export function pushCmp<Element>(data: Element[], element: Element, cmp: CompareFn<Element>): void {
  data.push(element);
  siftUpCmp(data, data.length - 1, cmp);
}

/**
 * Inserts an element in the heap.
 *
 * Uses the < operator for comparisons, producing a min-heap.
 *
 * This function works by pushing the element at the end of the array and calling {@link siftUpMin}
 * to restore the heap property.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param element The element to insert.
 */
export function pushMin<Element>(data: Element[], element: Element): void {
  data.push(element);
  siftUpMin(data, data.length - 1);
}

/**
 * Inserts an element in the heap.
 *
 * Uses the > operator for comparisons, producing a max-heap.
 *
 * This function works by pushing the element at the end of the array and calling {@link siftUpMax}
 * to restore the heap property.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param element The element to insert.
 */
export function pushMax<Element>(data: Element[], element: Element): void {
  data.push(element);
  siftUpMax(data, data.length - 1);
}

/**
 * Removes an element from the heap.
 *
 * This function removes the element at the top of the heap, i.e. `data[0]`. It throws an exception
 * if `data` is empty.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param cmp The comparison function of the heap.
 * @returns
 * @throws If `data` is empty.
 */
export function popCmp<Element>(data: Element[], cmp: CompareFn<Element>): Element {
  if (data.length > 1) {
    const element = data[0];
    data[0] = data[data.length - 1];
    data.pop();
    siftDownCmp(data, data.length, 0, cmp);
    return element;
  } else if (data.length > 0) {
    return data.pop()!;
  } else {
    throw new Error('cannot extract from an empty heap');
  }
}

/**
 * Removes an element from the heap.
 *
 * This variant uses the < operator, so it's suitable for min-heaps.
 *
 * This function removes the element at the top of the heap, i.e. `data[0]`. It throws an exception
 * if `data` is empty.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param cmp The comparison function of the heap.
 * @returns
 * @throws If `data` is empty.
 */
export function popMin<Element>(data: Element[]): Element {
  if (data.length > 1) {
    const element = data[0];
    data[0] = data[data.length - 1];
    data.pop();
    siftDownMin(data, data.length, 0);
    return element;
  } else if (data.length > 0) {
    return data.pop()!;
  } else {
    throw new Error('cannot extract from an empty heap');
  }
}

/**
 * Removes an element from the heap.
 *
 * This variant uses the > operator, so it's suitable for max-heaps.
 *
 * This function removes the element at the top of the heap, i.e. `data[0]`. It throws an exception
 * if `data` is empty.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param cmp The comparison function of the heap.
 * @returns
 * @throws If `data` is empty.
 */
export function popMax<Element>(data: Element[]): Element {
  if (data.length > 1) {
    const element = data[0];
    data[0] = data[data.length - 1];
    data.pop();
    siftDownMax(data, data.length, 0);
    return element;
  } else if (data.length > 0) {
    return data.pop()!;
  } else {
    throw new Error('cannot extract from an empty heap');
  }
}

/**
 * Checks the heap property on the provided array.
 *
 * Complexity: `O(N)`, with `N = count`.
 *
 * @param data The array representation of a binary heap.
 * @param count The number of elements in the relevant range, which may be lower than `data.length`.
 * @param cmp The comparison function of the heap.
 * @returns `true` if the heap property holds, `false` otherwise.
 */
export function isHeapCmp<Element>(
  data: Element[],
  count: number,
  cmp: CompareFn<Element>
): boolean {
  for (let i = 1; i < count; i++) {
    const parent = (i - 1) >>> 1;
    if (cmp(data[i], data[parent])) {
      return false;
    }
  }
  return true;
}

/**
 * Checks the heap property on the provided array.
 *
 * This variant uses the < operator, so if checks if the provided array is a min-heap.
 *
 * Complexity: `O(N)`, with `N = count`.
 *
 * @param data The array representation of a binary heap.
 * @param count The number of elements in the relevant range, which may be lower than `data.length`.
 * @param cmp The comparison function of the heap.
 * @returns `true` if the heap property holds, `false` otherwise.
 */
export function isHeapMin<Element>(data: Element[], count: number): boolean {
  for (let i = 1; i < count; i++) {
    const parent = (i - 1) >>> 1;
    if (data[i] < data[parent]) {
      return false;
    }
  }
  return true;
}

/**
 * Checks the heap property on the provided array.
 *
 * This variant uses the > operator, so if checks if the provided array is a max-heap.
 *
 * Complexity: `O(N)`, with `N = count`.
 *
 * @param data The array representation of a binary heap.
 * @param count The number of elements in the relevant range, which may be lower than `data.length`.
 * @param cmp The comparison function of the heap.
 * @returns `true` if the heap property holds, `false` otherwise.
 */
export function isHeapMax<Element>(data: Element[], count: number): boolean {
  for (let i = 1; i < count; i++) {
    const parent = (i - 1) >>> 1;
    if (data[i] > data[parent]) {
      return false;
    }
  }
  return true;
}

/**
 * Turns an array into a binary heap.
 *
 * The array is modified in place.
 *
 * Complexity: `O(N)`, with `N = count`.
 *
 * @param data The array to heapify.
 * @param count The number of elements in the affected range, which may be lower than `data.length`.
 * @param cmp The comparison function of the heap.
 */
export function heapifyCmp<Element>(data: Element[], count: number, cmp: CompareFn<Element>): void {
  for (let i = count >>> 1; i >= 0; i--) {
    siftDownCmp(data, count, i, cmp);
  }
}

/**
 * Turns an array into a binary heap.
 *
 * The array is modified in place.
 *
 * This variant uses the < operator, resulting in a min-heap.
 *
 * Complexity: `O(N)`, with `N = count`.
 *
 * @param data The array to heapify.
 * @param count The number of elements in the affected range, which may be lower than `data.length`.
 */
export function heapifyMin<Element>(data: Element[], count: number): void {
  for (let i = count >>> 1; i >= 0; i--) {
    siftDownMin(data, count, i);
  }
}

/**
 * Turns an array into a binary heap.
 *
 * The array is modified in place.
 *
 * This variant uses the > operator, resulting in a max-heap.
 *
 * Complexity: `O(N)`, with `N = data.length`.
 *
 * @param data The array to heapify.
 * @param count The number of elements in the affected range, which may be lower than `data.length`.
 */
export function heapifyMax<Element>(data: Element[], count: number): void {
  for (let i = count >>> 1; i >= 0; i--) {
    siftDownMax(data, count, i);
  }
}

/**
 * Sorts an array in-place using the heapsort algorithm.
 *
 * The algorithm is unstable, meaning that it may swap elements that compare equal.
 *
 * The array will be sorted in ascending order relative to the `cmp` function. For example, if `cmp`
 * simply runs the < operator on the operands the array will be sorted in ascending order.
 *
 * @param data The array to sort.
 * @param cmp The comparison function.
 */
export function sortCmp<Element>(data: Element[], cmp: CompareFn<Element>): void {
  const invertedCmp = (lhs: Element, rhs: Element) => cmp(rhs, lhs);
  heapifyCmp(data, data.length, invertedCmp);
  for (let i = data.length - 1; i >= 0; i--) {
    swap(data, 0, i);
    siftDownCmp(data, i, 0, invertedCmp);
  }
}

/**
 * Sorts an array in-place using the heapsort algorithm.
 *
 * The algorithm is unstable, meaning that it may swap elements that compare equal.
 *
 * This variant uses the > operator for the comparisons, meaning that it will build a max-heap and
 * sort the array in *ascending* order.
 *
 * @param data The array to sort.
 */
export function sortAsc<Element>(data: Element[]): void {
  heapifyMax(data, data.length);
  for (let i = data.length - 1; i >= 0; i--) {
    swap(data, 0, i);
    siftDownMax(data, i, 0);
  }
}

/**
 * Sorts an array in-place using the heapsort algorithm.
 *
 * The algorithm is unstable, meaning that it may swap elements that compare equal.
 *
 * This variant uses the < operator for the comparisons, meaning that it will build a min-heap and
 * sort the array in *descending* order.
 *
 * @param data The array to sort.
 */
export function sortDesc<Element>(data: Element[]): void {
  heapifyMin(data, data.length);
  for (let i = data.length - 1; i >= 0; i--) {
    swap(data, 0, i);
    siftDownMin(data, i, 0);
  }
}

/**
 * Generic priority queue implementation based on a binary heap.
 */
export class PriorityQueue<Element> {
  private readonly _data: Element[] = [];

  /**
   * Constructs a PriorityQueue.
   *
   * @param _compare The comparison function that establishes the total order relationship over the
   *                 elements. It must be a pure function (i.e. it must not keep state and return
   *                 consistent values).
   */
  public constructor(private readonly _compare: CompareFn<Element>) {}

  /**
   * Current length of the queue.
   *
   * Complexity: `O(1)`.
   */
  public get length(): number {
    return this._data.length;
  }

  /**
   * `true` iff the queue is empty.
   *
   * Complexity: `O(1)`.
   */
  public get empty(): boolean {
    return !this._data.length;
  }

  /**
   * Refers to the top of the queue. Undefined behavior if the queue is empty.
   *
   * Complexity: `O(1)`.
   */
  public get top(): Element {
    return this._data[0];
  }

  /**
   * Adds an element to the queue.
   *
   * Complexity: `O(M * log(N))`, with M = number of elements being pushed and N = number of
   * elements in the queue.
   */
  public push(...elements: Element[]): void {
    for (const element of elements) {
      pushCmp(this._data, element, this._compare);
    }
  }

  /**
   * Removes the element at the top of the queue.
   *
   * Complexity: `O(log(N))`.
   *
   * @returns The removed element.
   * @throws If the queue is empty.
   */
  public pop(): Element {
    return popCmp(this._data, this._compare);
  }

  /**
   * Iterates through the elements of the queue in an undefined order.
   *
   * Does not mutate the queue. Undefined behavior if new elements are pushed during an iteration.
   */
  public *[Symbol.iterator](): Iterator<Element> {
    for (const element of this._data) {
      yield element;
    }
  }

  /**
   * Returns an iterator that repeatedly pops the elements in the queue. As a result, the elements
   * are returned in the order defined by the comparison function.
   *
   * You can use it with the spread operator to extract all elements. Example:
   *
   * ```js
   * const queue = new PriorityQueue(cmp);
   * const array = [...queue.spread()];
   * ```
   *
   * WARNING: this method modifies the queue and eventually empties it.
   *
   * Complexity: `O(1)` for the initial call, `O(log(N))` for each yield, `O(N * log(N))` for the
   * entire enumeration.
   */
  public *spread(): Iterator<Element> {
    while (this._data.length > 0) {
      yield popCmp(this._data, this._compare);
    }
  }
}
