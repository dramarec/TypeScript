/*
 * Generics (обобщения, обобщённые типы, дженерики)
 *  Думайте о дженериках как о аргументе функции, в котором вы указываете тип других аргументов
 *
 * - [Обобщённые типы](https://canonium.com/articles/typescript-generics)
 */

/*
 * Дженерик-функции с одним параметром
 *  - any[] и потеря типизации очень плохо!
 *  - Добавляем дженерик для аргумент-типа <T>
 *  - Как ТС выводит типы и как указать явно foo<тип>()
 */
//-----------------------------------------------------
const reverse = <T>(array: T[]) => {
    return [...array].reverse();
};

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse(["Mango", "Poly", "Ajax", "Kiwi"]));
console.log(reverse([{ a: 1 }, { b: 2 }, { c: 3 }]));
//-----------------------------------------------------
/*
 * Дженерик-функции с N параметрами
 */

const isEqual = <T, Y>(a: T, b: Y) => {
    // Метод Object.is() определяет, являются ли два значения одинаковыми значениями
    return Object.is(a, b);
};

console.log(isEqual(3, 3));
console.log(isEqual(3, "3"));

//-----------------------------------------------------
function declarationFunc<T, Y>(a: T, b: Y) {
    return [a, b]
}
declarationFunc(2, '1')
//-----------------------------------------------------

const makeArray = <T, Y>(a: T, b: Y) => {
    return [a, b];
};

console.log(makeArray(2, "3"));
console.log(makeArray("Mango", "Poly"));
console.log(makeArray(true, 5));

//-----------------------------------------------------

// ! with ...rest
const foo = <N, T>(mult: N, ...rest: T[]) => { };
// const foo = (mult: number, ...rest: number[]) => { };

console.log(foo(2, [1, 2, 3]));
console.log(foo(3, [1, 2, 3]));
// console.log(foo("mango", ["a", "b", "c"]));

export { };
