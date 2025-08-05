import { describe, it, expect } from 'vitest';
import { add } from '../utils/stringCalculator';

describe('String Calculator', () => {
  it('returns 1 for "1"', () => {
    expect(add("1")).toBe(1);
  });

  it('returns 6 for "1,5"', () => {
    expect(add("1,5")).toBe(6);
  });

  it('returns 10 for "1,2,3,4"', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  it('returns 6 for "1\\n2,3"', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it('returns sum for custom delimiter ";"', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it('returns sum for custom delimiter "|"', () => {
    expect(add("//|\n4|5|6")).toBe(15);
  });

  it('returns sum for custom delimiter "."', () => {
    expect(add("//.\n1.2.3")).toBe(6);
  });

  it('returns sum for numeric delimiter "1"', () => {
    expect(add("//1\n2112")).toBe(4); // splits as "2", "1", "2"
  });

  it('returns sum for space delimiter', () => {
    expect(add("// \n3 4 5")).toBe(12);
  });

  it('returns sum for multi-character delimiter "sep"', () => {
    expect(add("//sep\n10sep20sep30")).toBe(60);
  });

  it('falls back to default delimiters if custom delimiter is missing', () => {
    expect(add("//\n1,2,3")).toBe(6);
  });

  it('throws error for single negative number', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
  });

  it('throws error for multiple negative numbers', () => {
    expect(() => add("4,-1,-5,6")).toThrow("negative numbers not allowed -1,-5");
  });

  it('throws error for negative numbers with custom delimiter', () => {
    expect(() => add("//;\n-1;2;-3")).toThrow("negative numbers not allowed -1,-3");
  });

  it('throws error for negative numbers with newline delimiter', () => {
    expect(() => add("1\n-2\n-3")).toThrow("negative numbers not allowed -2,-3");
  });
});
