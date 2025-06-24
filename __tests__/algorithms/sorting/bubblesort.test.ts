import { test } from "@jest/globals";
import { bubbleSort } from "../../../app/algorithms/sorting";

test("Bubble Sort should sort an array of number in ascending order", () => {
  //   const array: number[] = ;

  expect(bubbleSort([2, 1, 4, 5, 3])).toEqual([1, 2, 3, 4, 5]);
});
