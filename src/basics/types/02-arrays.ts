/*
 * Массивы
 *  - Нотации `тип[]` и `Array<тип>`
 *  - `(тип | тип)[]`
 *  - `readonly` и `ReadonlyArray<тип>`
 *  - Tuple `[тип, тип]`, например массив координат
 */

const temps: readonly number[] = [30, 31, 27, 28, 32]; //!readonly только для чтения
// const temps: number[] = [30, 31, 27, 28, 32];
// const temps: Array<number> = [30, 31, 27, 28, 32,]; 
// const temps: (number | string | boolean)[] = [30, 31, 27, 28, 32, 'Hello', false];

// temps.push(5);

// const coords: [number, number] = [50.4501, 30.5234];
const coords: [number, string] = [50.4501, 'Hello'];
const rgb: [number, number, number] = [255, 0, 100];

const arrA = [1, 2, 3, 4, 'Hello'];
const arrB = [...arrA];

console.log(temps, coords, rgb, arrB,);

export { };
