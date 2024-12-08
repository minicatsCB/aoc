import { describe, expect, it } from 'vitest';
import { getTotalSum } from '../src/day-3-part-2';

describe('getTotalSum', () => {
    it('should return the sum of uncorrputed multiplications', () => {
        const program = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
        expect(getTotalSum(program)).toBe(48);
    });
});