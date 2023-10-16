// Purpose: Type definitions for utility functions.

/**
 * Determines the element type of a readonly array.
 *
 * This type takes a generic parameter `T` which should extend a readonly array.
 * It then infers the element type of this array and returns it. If `T` isn't
 * a readonly array, it will result in the `never` type.
 *
 * @template T - A type that extends a readonly array.
 *
 * @returns Element type of the provided readonly array `T` or `never` if `T` isn't an array.
 *
 * @example
 * const numbers: ElementType<readonly number[]> = 123; // number
 * const strings: ElementType<readonly string[]> = 'hello'; // string
 */
export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never
