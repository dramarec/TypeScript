/*
 * Функции
 *  - Типизация параметров и возвращаемого значения
 *  - Необязательные параметры
 *  - rest-параметры
 *  - Функция без явного возврата: тип void
 *  - Типизация подписи функции
 *    - черерз тип
 *    - через интерфейс
 *  - Типизация методов объекта в интерфейсе
 *    - ключ: () => тип; старый метод
 *    - ключ() : тип; новый метов
 *  - Необязательные методы в интерфейсе
 */

interface IAddFn {
    (a: number, b: number): number;
}
type AddFn = (a: number, b: number) => number;

const addExpression: IAddFn = function (x, y) {
    return x + y;
};
const addArrow: AddFn = (x, y) => {
    return x + y;
};

addExpression(2, 3);
addArrow(2, 3);
//-----------------------------------------------
type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number;

const fn: Fn = (a, b, c, ...restParams) => {
    return 5;
};

fn(1, 2, 3, 5, 6, 7, 5, 9);

type LogFn = (m: string) => number | void;

const log: LogFn = (message) => {
    console.log(message);
};

log("hello");
//------------------------------------------------
enum PizzaSize {
    Small = "s",
    Medium = "m",
    Large = "l",
}
type Size = PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;

interface IPizza {
    size: Size;
    toppings: string[];
    // logSize?:() => void;
    logSize?(): void;
    getSize(): string;
    addTopping(topping: string): void;
}

const pizza: IPizza = {
    size: PizzaSize.Small,
    toppings: ["sause", "mushrooms"],
    logSize() {
        console.log(this.size);
    },
    getSize() {
        return this.size;
    },
    addTopping(topping) {
        this.toppings.push(topping);
    },
};

console.log(pizza);

// 1----------------------------------------------
// function add(x: number, y: number): number {
//     return x + y;
// }

// const sum: number = add(1, 2);

// console.log(sum);
// 2----------------------------------------------
// let myAdd = function (x: number, y: number): number {
//     return x + y;
// };

// const total: number = myAdd(1, 2);

// console.log(total);
// ? 3----------------------------------------------
// type f = (baseValue: number, increment: number) => number;

// let increase = <f>function increase(x: number, y: number): number {
//     return x + y;
// };

// const updatedValue: number = increase(3, 1);

// console.log(updatedValue);
// 4----------------------------------------------
// function buildName(firstName: string, lastName?: string) {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }

// let result1 = buildName('Oliver');
// let result2 = buildName('Oliver', 'Black');

// console.log(result1);
// console.log(result2);

// 5----------------------------------------------
// function buildLetters(firstLetter: string, ...restOfLetters: [string, string, string]) {
//     return firstLetter + ' ' + restOfLetters.join(' ');
// }

// let letters = buildLetters('a', 'b', 'c', 'd');

// console.log(letters);

// 6----------------------------------------------
// const run: (this: void, n: number) => void = function (n) {
//     // this.n = n;
//     console.log(n);
// };

// run(1);
// 7----------------------------------------------
// function show(n: number): any {
//     if (n < 5) {
//         return 'Good';
//     } else {
//         return 100;
//     }
// }

// const myValue = show(5);

// console.log(myValue);
// 8----------------------------------------------
// {
//     const f = (a: number, b: number): number => a + b;

//     type FType = (a: number, b: number) => number;

//     const sum: FType = f;
// }
// * =======
type TFn = (a: number, b: number) => number

interface IFn {
    (a: number, b: number): number
}

const expressionFunc: TFn = function (a, b) {
    return a + b;
}
// function declarationFunc(a: number, b: number): number {
// function declarationFunc(a, b): IFn {
//     return a + b;
// }

const arrowFunc: IFn = (a, b) => {
    return a + b;
}
console.log("{*} ===> declarationFunc(2 + 2)", expressionFunc(2, 2));
// console.log("{*} ===> declarationFunc(2 + 2)", declarationFunc(2, 2));
console.log("{*} ===> arrowFunc ===> arrowFunc", arrowFunc(5, 5));


export { };