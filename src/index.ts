//Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції. 
//Як параметр типу повинен обов'язково виступати функціональний тип.


type FuncResult<T> = T extends () => infer U ? U : never

function foo(a: number, b: number): number {
	return a + b
}

const x: FuncResult<() => number> = foo(2, 3)


//Вам потрібно створити умовний тип, який приймає функціональний тип з одним параметром (або задовільним) 
//та повертає кортеж, де перше значення - це тип, що функція повертає, а другий - тип її параметру

type FuncTuple<T> = T extends (param: infer U) => infer V ? [V, U] : never

function fooTuple(c: string): string {
	return `Hello ${c}`
}

const y: FuncTuple<(param: string) => string> = [fooTuple('John'), 'string']


//Створіть тип, який об'єднує властивості двох об'єктів тільки в тому випадку, якщо їхні значення мають 
//спільний тип. Наприклад: { a: number; b: string } та { b: string; c: boolean } => { b: string; }

type CompareProperty<T, U> = {
	[K in keyof T & keyof U]: T[K] extends U[K] ? U[K] : never
}

const obj1 = {
	name: 'John',
	age: 23
}

const obj2 = {
	name: 'John',
	isAdult: true
}

const someObj: CompareProperty<typeof obj1, typeof obj2> = { name: 'Anna' }
