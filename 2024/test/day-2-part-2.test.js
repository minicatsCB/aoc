import { describe, expect, it } from 'vitest';
import { countSafeArrays, isDecreasing, isIncreasing } from '../src/day-2-part-2';

describe('isIncreasing', () => {
    it('should return true when all the levels are increasing', () => {
        const gaps = [1, 2, 3, 4, 5];
        expect(isIncreasing(gaps)).toBe(true);
    });

    it('should return false when NOT any two levels are equal', () => {
        const gaps = [1, 3, 5, 5, 4];
        expect(isIncreasing(gaps)).toBe(false);
    });

    it('should return false when NOT any two levels are decreasing', () => {
        const gaps = [1, 3, 8, 5, 4];
        expect(isIncreasing(gaps)).toBe(false);
    });

    it('should return false when all the levels are decreasing', () => {
        const gaps = [5, 4, 3, 2, 1];
        expect(isIncreasing(gaps)).toBe(false);
    });
});

describe('isDecreasing', () => {
    it('should return true when all the levels are decreasing', () => {
        const gaps = [5, 4, 3, 2, 1];
        expect(isDecreasing(gaps)).toBe(true);
    });

    it('should return false when NOT any two levels are equal', () => {
        const gaps = [5, 4, 3, 3, 1];
        expect(isDecreasing(gaps)).toBe(false);
    });

    it('should return false when NOT any two levels are increasing', () => {
        const gaps = [5, 4, 3, 4, 1];
        expect(isDecreasing(gaps)).toBe(false);
    });

    it('should return false when all the levels are increasing', () => {
        const gaps = [1, 2, 3, 4, 5];
        expect(isDecreasing(gaps)).toBe(false);
    });
});

describe('countSafeArrays', () => {
    it('should return the number of safe reports', () => {
        const reports = [
            [7, 6, 4, 2, 1],
            [1, 2, 7, 8, 9],
            [9, 7, 6, 2, 1],
            [1, 3, 2, 4, 5],
            [8, 6, 4, 4, 1],
            [1, 3, 6, 7, 9]
        ];
        expect(countSafeArrays(reports)).toBe(4);
    });
});