// MathUtils.ts

/**
 * This module provides utility functions for mathematical operations.
 */

/**
 * Calculate the factorial of a number.
 * @param n - The number to calculate the factorial for.
 * @returns The factorial of the number.
 */
export function factorial(n: number): number {
    if (n < 0) throw new Error('Factorial is not defined for negative numbers.');
    return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * Calculate the greatest common divisor (GCD) of two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The GCD of the two numbers.
 */
export function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
}

/**
 * Calculate the least common multiple (LCM) of two numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The LCM of the two numbers.
 */
export function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

/**
 * Calculate the power of a number.
 * @param base - The base number.
 * @param exponent - The exponent to raise the base to.
 * @returns The result of base raised to the power of exponent.
 */
export function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}
