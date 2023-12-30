// Вам потрібно створити тип DeepReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів.

interface IUser {
	name: string;
	surname: string;
	age: number;
	additional: {
		isAdmin: boolean;
		gender: string;
		address: {
			city: string;
			country: string;
		}
	}
}

type DeepReadonly<T> = {
	readonly [K in keyof T]: T[K] | DeepReadonly<T[K]>;
}

const user: DeepReadonly<IUser> = {
	name: 'Petr',
	surname: 'Petrov',
	age: 33,
	additional: {
		isAdmin: false,
		gender: 'male',
		address: {
			city: 'Odessa',
			country: 'Ukraine',
		}
	}
};

// Вам потрібно створити тип DeepRequireReadonly який буде робити доступними тільки для читання навіть властивості вкладених обʼєктів та ще й робити їх обовʼязковими.

interface IAnimal {
	name: string;
	color: string;
	additional: {
		race: string;
		birthYear: number;
	}
}

type DeepRequireReadonly<T> = {
	readonly [K in keyof T]?: T[K] | DeepRequireReadonly<T[K]>;
}

const animal: DeepRequireReadonly<IAnimal> = {
	name: 'Bob',
	color: 'black',
	additional: {
		race: 'brit',
		birthYear: 2020,
	}
}


// Вам потрібно сворити тип UpperCaseKeys, який буде приводити всі ключи до верхнього регістру.

interface ISeason {
	name: string;
	isWarm: boolean;
}

type UpperCaseKeys<T> = {
	[K in keyof T & string as Capitalize<K>]: T[K]
}

const season: UpperCaseKeys<ISeason> = {
	Name: 'summer',
	IsWarm: true
}

// І саме цікаве. Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний обʼєкт на обʼєкт де кожне value є дескриптором.

interface IPerson {
	name: string;
	age: number;
	country: string;
}

type ObjectToPropertyDescriptor<T> = {
	[K in keyof T]: PropertyDescriptor
}

const someObject: IPerson = {
	name: 'John',
	age: 22,
	country: 'USA'
}

const someDescriptionObject: ObjectToPropertyDescriptor<typeof someObject> = {
	name: { value: 'John', configurable: false, enumerable: false, writable: true },
	age: { value: 22, configurable: false, enumerable: false, writable: false },
	country: { value: 'USA', configurable: false, enumerable: false, writable: false }
}
