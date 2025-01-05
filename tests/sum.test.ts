import { describe, it, expect } from 'vitest';

// Example function to test
function sum(a: number, b: number): number {
  return a + b;
}

describe('sum function', () => {
  it('should return the correct sum', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('should return 0 when adding 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});