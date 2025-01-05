// tests/mathy.test.ts
import { describe, it, expect } from 'vitest';
import Mathy from '../mathy'; // Import the Mathy class

describe('Mathy class', () => {
  let mathy: Mathy;

  // Before each test, create a new instance of the Mathy class
  beforeEach(() => {
    mathy = new Mathy();
  });

  it('should add two positive numbers correctly', () => {
    expect(mathy.add(2, 3)).toBe(5);
  });

  it('should add a positive and a negative number correctly', () => {
    expect(mathy.add(2, -3)).toBe(-1);
  });

  it('should add two negative numbers correctly', () => {
    expect(mathy.add(-2, -3)).toBe(-5);
  });

  it('should return the same number when adding zero', () => {
    expect(mathy.add(0, 5)).toBe(5);
    expect(mathy.add(5, 0)).toBe(5);
  });

  it('should return zero when adding two zeros', () => {
    expect(mathy.add(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(mathy.add(1000000, 2000000)).toBe(3000000);
  });

  it('should handle decimal numbers correctly', () => {
    expect(mathy.add(2.5, 3.5)).toBe(6);
  });

  it('should handle adding a number and a string that can be converted to a number', () => {
    // This should be treated as adding 2 + 3
    expect(mathy.add(2, 3)).toBe(5);
  });

  it('should handle adding NaN correctly', () => {
    expect(mathy.add(NaN, 5)).toBeNaN();
    expect(mathy.add(5, NaN)).toBeNaN();
  });
});