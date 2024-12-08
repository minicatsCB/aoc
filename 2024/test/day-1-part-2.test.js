import { describe, expect, it } from 'vitest';
import { getSimilarityScore } from '../src/day-1-part-2';

describe('getTotalDistance', () => {
    it('should return the number of safe reports', () => {
        const lists = [
            [3, 4, 2, 1, 3, 3],
            [4, 3, 5, 3, 9, 3]
        ];
        expect(getSimilarityScore(lists[0], lists[1])).toBe(31);
    });
});