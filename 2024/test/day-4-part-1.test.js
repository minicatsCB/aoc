import { describe, expect, it } from 'vitest';
import { getCount } from '../src/day-4-part-1';
import data from "../data/day-4-part-1.json" assert { type: 'json' };

describe('getCount', () => {
    it('should return the number of matches', () => {
        expect(getCount(data.test)).toBe(18);
    });
});