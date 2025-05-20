# Sorting Algorithms

## What is Sorting?
Sorting is the process of arranging items in a collection (like an array) in a specific order - typically in ascending or descending order.

## Why Learn Sorting Algorithms?
- Sorting is a fundamental concept in computer science
- Different algorithms have different time/space complexity tradeoffs
- Understanding these helps choose the right algorithm for specific use cases
- Commonly asked in technical interviews
- Used extensively in real-world applications

## Common Sorting Algorithms

### Elementary Sorts
- Bubble Sort
- Selection Sort 
- Insertion Sort

### More Advanced Sorts
- Merge Sort
- Quick Sort
- Radix Sort

## Classification of Sorting Algorithms

### By Time Complexity
- O(n²) - Bubble, Selection, Insertion Sort
- O(n log n) - Merge Sort, Quick Sort
- O(n) - Radix Sort (for integers)

### By Space Requirements
- In-place sorting (O(1) extra space) - Bubble, Selection, Insertion Sort
- Out-of-place sorting (O(n) extra space) - Merge Sort

### By Stability
- Stable sorts - maintain relative order of equal elements
- Unstable sorts - may change relative order of equal elements

## When to Use What?
- Small datasets: Elementary sorts may be sufficient
- Large datasets: Advanced sorts like Merge/Quick Sort
- Limited memory: In-place sorting algorithms
- Need stability: Stable sorting algorithms