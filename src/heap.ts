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
 * @param index The index of the element to move.
 * @param cmp The comparison function of the heap.
 * @returns The new index of the element, or -1 if the element cannot be moved.
 */
function moveDownCmp<Element>(data: Element[], index: number, cmp: CompareFn<Element>): number {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  if (right < data.length) {
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
  } else if (left < data.length && cmp(data[left], data[index])) {
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
 * @param index The index of the element to move.
 * @returns The new index of the element, or -1 if the element cannot be moved.
 */
function moveDownMin<Element>(data: Element[], index: number): number {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  if (right < data.length) {
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
  } else if (left < data.length && data[left] < data[index]) {
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
 * @param index The index of the element to move.
 * @returns The new index of the element, or -1 if the element cannot be moved.
 */
function moveDownMax<Element>(data: Element[], index: number): number {
  const left = index * 2 + 1;
  const right = index * 2 + 2;
  if (right < data.length) {
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
  } else if (left < data.length && data[left] > data[index]) {
    swap(data, index, left);
    return left;
  } else {
    return -1;
  }
}

/**
 * Moves an element down through the heap until the heap property is restored.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param index The index of the element to move.
 * @param cmp The comparison function of the heap.
 * @returns The new index of the element.
 */
export function siftDownCmp<Element>(
  data: Element[],
  index: number,
  cmp: CompareFn<Element>
): number {
  let newIndex;
  while (((newIndex = moveDownCmp(data, index, cmp)), newIndex >= 0)) {
    index = newIndex;
  }
  return index;
}

/**
 * Moves an element down through the heap until the heap property is restored.
 *
 * Uses the < operator for comparisons, producing a min-heap.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param index The index of the element to move.
 * @returns The new index of the element.
 */
export function siftDownMin<Element>(data: Element[], index: number): number {
  let newIndex;
  while (((newIndex = moveDownMin(data, index)), newIndex >= 0)) {
    index = newIndex;
  }
  return index;
}

/**
 * Moves an element down through the heap until the heap property is restored.
 *
 * Uses the > operator for comparisons, producing a max-heap.
 *
 * Complexity: `O(log(N))`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param index The index of the element to move.
 * @returns The new index of the element.
 */
export function siftDownMax<Element>(data: Element[], index: number): number {
  let newIndex;
  while (((newIndex = moveDownMax(data, index)), newIndex >= 0)) {
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
    siftDownCmp(data, 0, cmp);
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
    siftDownMin(data, 0);
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
    siftDownMax(data, 0);
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
 * Complexity: `O(N)`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param cmp The comparison function of the heap.
 * @returns `true` if the heap property holds, `false` otherwise.
 */
export function isHeapCmp<Element>(data: Element[], cmp: CompareFn<Element>): boolean {
  for (let i = 1; i < data.length; i++) {
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
 * Complexity: `O(N)`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param cmp The comparison function of the heap.
 * @returns `true` if the heap property holds, `false` otherwise.
 */
export function isHeapMin<Element>(data: Element[]): boolean {
  for (let i = 1; i < data.length; i++) {
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
 * Complexity: `O(N)`, with `N = data.length`.
 *
 * @param data The array representation of a binary heap.
 * @param cmp The comparison function of the heap.
 * @returns `true` if the heap property holds, `false` otherwise.
 */
export function isHeapMax<Element>(data: Element[]): boolean {
  for (let i = 1; i < data.length; i++) {
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
 * Complexity: `O(N)`, with `N = data.length`.
 *
 * @param data The array to heapify.
 * @param cmp The comparison function of the heap.
 */
export function heapifyCmp<Element>(data: Element[], cmp: CompareFn<Element>): void {
  const max = data.length >>> 1;
  for (let i = 0; i < max; i++) {
    siftDownCmp(data, i, cmp);
  }
}

/**
 * Turns an array into a binary heap.
 *
 * The array is modified in place.
 *
 * This variant uses the < operator, resulting in a min-heap.
 *
 * Complexity: `O(N)`, with `N = data.length`.
 *
 * @param data The array to heapify.
 */
export function heapifyMin<Element>(data: Element[]): void {
  const max = data.length >>> 1;
  for (let i = 0; i < max; i++) {
    siftDownMin(data, i);
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
 */
export function heapifyMax<Element>(data: Element[]): void {
  const max = data.length >>> 1;
  for (let i = 0; i < max; i++) {
    siftDownMax(data, i);
  }
}
