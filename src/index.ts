// Фільтрація масиву
// Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.

enum ConditionNumberTypesEnum {
	EVEN = 'even',
	ODD = 'odd',
}

enum ConditionStringTypesEnum {
	UPPER = 'upper',
	LOWER = 'lower'
}

function filterArray<TType, TCondition>(array: Array<TType>, condition: TCondition): Array<TType> {
	if (array.every(isNumberValue)) {
		return filterNumbers(array, condition);
	} else if (array.every(isStringValue)) {
		return filterStrings(array, condition);
	}
}

function filterNumbers<TType, TCondition>(array: Array<TType>, condition: TCondition): Array<TType> {
	switch (condition) {
		case 'even':
			return array.filter((elem: TType) => elem as number % 2 === 0)
		case 'odd':
			return array.filter((elem: TType) => elem as number % 2 !== 0)
		default:
			throw new Error('no such condition')
	}
}

function filterStrings<TType, TCondition>(array: Array<TType>, condition: TCondition): Array<TType> {
	switch (condition) {
		case 'upper':
			return array.filter((elem: TType) => !(elem === (elem as string).toLowerCase()))
		case 'lower':
			return array.filter((elem: TType) => elem === (elem as string).toLowerCase())
		default:
			throw new Error('no such condition')
	}
}

function isNumberValue(value: unknown): value is 'number' {
	return typeof value === 'number'
}

function isStringValue(value: unknown): value is 'string' {
	return typeof value === 'string'
}

filterArray([1, 5, 2, 8, 9, 15, 48], ConditionNumberTypesEnum.EVEN)
filterArray([1, 5, 2, 8, 9, 15, 48], ConditionNumberTypesEnum.ODD)
filterArray(['hello', 'true', 'sun', 'SKY'], ConditionStringTypesEnum.UPPER)
filterArray(['hello', 'WORLD', 'sun', 'SKY'], ConditionStringTypesEnum.LOWER)


// 	Узагальнений стек
// Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.

interface IMethods<TItem> {
	arr: Array<TItem>;
	push(value: TItem): number;
	pop(): TItem;
	peek(): TItem;
}

class Stack<TItem> implements IMethods<TItem>{
	constructor(public arr: Array<TItem>) { }

	public push(value: TItem): number {
		return this.arr.push(value)
	};

	public pop(): TItem {
		return this.arr.pop()
	};

	public peek(): TItem {
		return this.arr.at(-1)
	};
}

const stack = new Stack([1, 2, 5, 'elem']);


// 	Узагальнений словник
// Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has. Обмежте ключі тільки валідними типами для об'єкта

type Type<TValue> = {
	a: string,
	b: TValue
}

interface IDictionaryIndex<TValue> {
	[key: string]: TValue
	| ((x?: string, y?: TValue) => any)
	| Type<TValue>;
}

class Dictionary<TValue> implements IDictionaryIndex<TValue>{
	[key: string]: TValue
	| ((x?: string, y?: TValue) => any)
	| Type<TValue>;

	private dataArray: Type<TValue>;

	constructor() {
		this.dataArray = {} as Type<TValue>;
	}

	public set(key: string, value: TValue): void {
		this.dataArray[key] = value;
		console.log(this.dataArray)
	}

	public get(key: string): TValue | any {
		return this.dataArray[key]
	}
	public has(key: string): boolean {
		return key in this.dataArray
	}
}

const dict = new Dictionary<number>()

