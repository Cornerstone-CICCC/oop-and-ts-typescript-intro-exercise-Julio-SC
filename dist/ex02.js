"use strict";
// 2. Create a function named `isPalindrome` that takes a string as a parameter.
//    The function should return `true` if the string is a palindrome (reads the same backward as forward),
//    otherwise, return `false`.
//    Use TypeScript types to ensure the parameter and return type are properly typed.
function isPalindrome(word) {
    // Convertimos la palabra a minúsculas para evitar errores de mayúsculas/minúsculas
    const normalizedWord = word.toLowerCase();
    // Comparamos la palabra con su versión invertida
    return normalizedWord === normalizedWord.split("").reverse().join("");
}
// Expected output:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Level")); // true (para probar mayúsculas)
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("TypeScript")); // false
