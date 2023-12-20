// Напишіть функцію isString, яка перевірятиме, чи є передане значення рядком.
// Потім використовуйте її для звуження типу змінної.

function changeString(value: unknown): void {
	if (isString(value)) {
		value.toLowerCase();
	} else {
		throw new Error('Incorrect value type');
	}
}

function isString(value: unknown): value is string {
	return typeof value === 'string';
}

// У вас є масив з елементами різних типів. Напишіть функцію, яка приймає цей масив
// і фільтрує його так, щоб у підсумку в ньому залишилися тільки рядки.
// Використовуйте захисника типу для цього завдання.

function findString(value: unknown): void {
	if (isStringInArray(value)) {
		value.filter(elem => typeof elem === 'string');
	} else {
		throw new Error('Incorrect value type');
	}
}
function isStringInArray(value: unknown): value is any[] {
	return value instanceof Array;
}

// У вас є об'єкт, який може містити довільні властивості.
// Напишіть функцію, яка приймає цей об'єкт і повертає значення однієї з
// властивостей, якщо воно існує і має певний тип.

interface IUser {
	name: string;
	age: number;
	sex: string;
}

const user: IUser = {
	name: 'John',
	age: 33,
	sex: 'male',
}

function getUserInfo(user: unknown): string {
	if (isUserObject(user)) {
		return `User is ${user.sex}, his name is ${user.name}, ${user.age} years old.`
	} else {
		throw new Error('Incorrect value type');
	}
}

function isUserObject(value: unknown): value is IUser {
	return (typeof value === 'object'
		&& 'age' in value
		&& 'name' in value
		&& 'sex' in value
		&& typeof 'sex' === 'string'
	);
}

// Створіть кілька захисників типу, кожен з яких перевіряє певний аспект об'єкта
// (наприклад, наявність певної властивості або її тип). Потім напишіть функцію, яка
// використовує цих захисників у комбінації для звуження типу об'єкта до більш конкретного типу.

interface IPerson {
	name: string;
	age: number;
}

interface IStudent extends IPerson {
	marks: {
		math: string;
		music: string;
	};
	study(): void;
}

interface ITeacher extends IPerson {
	work(): void;
}

class Student implements IStudent {
	name: string = 'Bob';
	age: number = 32;
	marks: {
		math: 'good',
		music: 'excellent'
	};
	study(): void { };
}

class Teacher implements ITeacher {
	name: string = 'Bob';
	age: number = 32;
	work(): void { };
}

function getName(value: any): value is Student {
	return (
		'name' in value && typeof 'name' === 'string'
	);
}

function getMarks(value: any): value is Student {
	return (
		'marks' in value && typeof 'marks' === 'object'
	);
}

function getAction(object: Student | Teacher): void {
	if (getName(object) && getMarks(object)) {
		object.study();
	} else {
		object.work();
	}
}

// У вас є змінна, яка може бути одного з декількох типів (наприклад, рядок або число).
// Напишіть функцію, яка приймає цю змінну і виконує довільні операції, специфічні для кожного з типів.

type Value = string | number;

function makeAction(param: Value): Value {
	if (typeof param === 'string') {
		return param.toUpperCase();
	} else {
		return ++param;
	}
}


// Створіть захисник типу, який перевірятиме, чи є передане значення функцією. Потім напишіть функцію,
// яка використовує цей гард для звуження типу змінної і викликає передану функцію, якщо вона існує.

class SomeClass { };
const instClass = new SomeClass();

function isFunction(value: unknown): value is Function {
	return value instanceof Function;
}

function checkFunction(value: unknown): void {
	if (isFunction(value)) {
		value.apply(instClass, [1, 2, 3]);
	} else {
		throw new Error('The object is not a function');
	}
}


// Створіть класи з ієрархією успадкування і потім напишіть функцію, яка використовує захисник
// типу для звуження типу об'єктів, що базуються на цій ієрархії.

class Cat {
	eat(): void { };
	color: string;
}

class Brit extends Cat {
	name: string;
}

function isBrit(value: any): value is Brit {
	return (
		'name' in value
	);
}

function getCat(cat: Cat | Brit): string {
	if (isBrit(cat)) {
		return `Cat ${cat.name}`;
	} else {
		return `Cat ${cat.color}`;
	}
}