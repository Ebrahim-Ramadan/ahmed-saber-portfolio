import {  useTransform } from "framer-motion";

export function useRotateYValues(x, ITEMS, ITEM_WIDTH, GAP) {
    const transformFunctions = ITEMS.map((_, index) => {
      const range = [
        (-100 * (index + 1) * (ITEM_WIDTH + GAP)) / 100,
        (-100 * index * (ITEM_WIDTH + GAP)) / 100,
        (-100 * (index - 1) * (ITEM_WIDTH + GAP)) / 100,
      ];
      const nextIndex = Math.min(index + 1, ITEMS.length - 1);
      const prevIndex = Math.max(index - 1, 0);
      const outputRange = [nextIndex ? 90 : 90, 0, prevIndex ? -90 : -90];
  
      return { range, outputRange };
    });
  
    const rotateYValues = transformFunctions.map(({ range, outputRange }) =>
      useTransform(x, range, outputRange, { clamp: false })
    );
  
    return rotateYValues;
  }