// 4. Create a function named `findMax` that takes an array of numbers as a parameter.
//    The function should return the largest number in the array.
//    Ensure the parameter and return type are typed.

function findMax(numbers: number[]): number | null {
    return numbers.length > 0 ? Math.max(...numbers) : null;
}
// Expected output:
console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([7, 2, 10, 4]));   // 10