function add(a: number, b: number): number {
  return a + b;
}

function addWithGuard(a: number | string, b: number | string): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return parseFloat(a) + parseFloat(b);
  } else {
      return 0; // Handle the case of mixed types or non-numeric values
  }
}

let result1 = addWithGuard(10, 20); // Works as expected
let result2 = addWithGuard("10", "20"); // Handles string input
let result3 = addWithGuard(10, "20"); // Handles mixed types
let result4 = addWithGuard("hello", 20); //Handles mixed types