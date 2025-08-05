import { describe, it, expect } from 'vitest';
import { add } from '../utils/stringCalculator';

describe('String Calculator', () => {
  it('returns 1 for "1"', () => {
    expect(add("1")).toBe(1);
  });

  it('returns 6 for "1,5"', () => {
    expect(add("1,5")).toBe(6);
  });
});
