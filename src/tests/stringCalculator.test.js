import { describe, it, expect } from 'vitest';
import { add } from '../utils/stringCalculator';

describe('String Calculator', () => {
  it('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });
});
