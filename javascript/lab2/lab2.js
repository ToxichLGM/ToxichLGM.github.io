'use strict';
/**
 * Вычисляет степень числа
 * @param {number} x аргумент 
 * @param {number} n степень 
 * @returns {number} x^n
 */
function pow(x, n) {
    //Функция возвращает x в степени n
    let result = x ** n;
    return result;//возвращаем х в степени n
}
/**
 * Вычисляет сумму чисел от 1 до n включительно
 * @param {number} n конечное число 
 * @returns {number} sum(1,n)
 */
function sumTo(n) {
    //вычисляет сумму чисел от 1 до n включительно
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;//возвращаем сумму
}

/**
 * Возвращает факториал числа n 
 * @param {number} n аргумент
 * @returns {BigInt} n!
 */
function factorial(n) {
    //возвращает факториал числа n 
    if (n <= 1) return 1n;
    else {
        res = BigInt(n) * factorial(n - 1)
        return res;
    }
}
/**
 * Возвращает n-е число Фибоначчи
 * @param {number} n аргумент
 * @returns {BigInt} n-e число Фибоначчи
 */
function fib(n) {
    //функция возвращает n-е число Фибоначчи
    a = 1n; // первое число Фиббоначи
    b = 1n; //второе число Фиббоначи
    if (n == 0) {
        return 0n; //возвращаем ноль при n=0
    }
    else {
        for (i = BigInt(3); i <= n; i++) //алгоритм фибоначчи
        {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}

//функция принимает целочисленное значение x и возвращает анонимную функцию. Анонимная функция возвращает результат сравнения значений y и x
/**
 * Функция принимает целочисленное значение x и возвращает анонимную функцию. Анонимная функция возвращает результат сравнения значений y и x
 * @param {number} x целочисленное значение
 * @param {number} y для сравнения
 * @returns {number} анонимная функция
 */
function compare(x) {
    return function (y) {
        if (y > x) return true;
        else if (y < x) return false;
        else if (y == x) return null;
    }
}

//функция возвращает сумму всех своих аргументов.
/**
 * функция возвращает сумму всех своих аргументов
 * @param {number} i аргумент
 * @returns {number} сумма всех аргументов
 */
function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    return result;
}

