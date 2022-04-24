import { sum } from "@testing-library/react";



it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
});