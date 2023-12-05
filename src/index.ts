
//1. Реализовала 2 варианта 1 задания, поскольку не уверена правильно ли я поняла задание.
// Второй закомментирован ниже.

// Через класс

interface ICalculator {
	sum(a: number, b: number): number;
	subtraction(a: number, b:number): number;
	division(a: number, b:number): number | string;
	multiplication(a: number, b:number): number;
}

class Calculation implements ICalculator {

	sum(a: number, b: number): number {
		return a + b;
	};

	subtraction(a: number, b:number): number {
		return a - b;
	};

	division(a: number, b:number): number | string {
		if (b === 0) {
			return 'Dividing by 0 is not allowed';
		} else {
			return a / b;
		}
	};

	multiplication(a: number, b:number): number {
		return a * b
	};

}

let sum = new Calculation;
sum.sum(1,2);
sum.subtraction(4,2);
sum.multiplication(8,4);
sum.division(10, 2);

//Через функции

// interface ICalculator {
// 	(a: number, b: number): number | string;
// }
//
// const sum = function(a: number, b: number): number {
// 	return a + b;
// }
// const subtraction: ICalculator = function (a: number, b: number): number {
// 	return a - b;
// }
//
// const division: ICalculator = function (a: number, b: number): number | string {
// 	if (b === 0) {
// 		return 'You can not div 0';
// 	} else {
// 		return a / b;
// 	}
// }
//
// const multiplication: ICalculator = function (a: number, b: number): number {
// 	return a * b;
// }
//
// sum(1, 2);
// subtraction(4,2);
// division(8,2);
// multiplication(5,3);


// Задание 2
interface IAuthor {
	name: string;
	age: number;
	country: string;
	isAlive: boolean;
}

interface IBook extends IAuthor {
	idBook: number;
	title: string;
	pages: number;
	binding: string;
	language: string;
	isIllustrated: boolean;
}

interface IBookService extends IBook {
	getAuthorInfo(name: string): IAuthor;
	checkAuthorIsAlive(name: string, country: string): boolean;
	getBookTitle(idBook: number): string;
	checkIllustration(idBook: number, title: string): boolean;
}

class BookService implements IBookService {
	idBook: number;
	title: string;
	pages: number;
	binding: string;
	language: string;
	isIllustrated: boolean;
	name: string;
	age: number;
	country: string;
	isAlive: boolean;

	constructor(idBook: number, title: string, pages: number, binding: string, language: string, isIllustrated: boolean, name: string,
							age: number, country: string, isAlive: boolean) {
		this.idBook = idBook;
		this.title = title;
		this.pages = pages;
		this.binding = binding;
		this.language = language;
		this.isIllustrated = isIllustrated;
		this.name = name;
		this.age = age;
		this.country = country;
		this.isAlive = isAlive;
	}

	getAuthorInfo(name: string): IAuthor {
		return {
			name: this.name,
			age: this.age,
			country: this.country,
			isAlive: this.isAlive,
		}
	}
	checkAuthorIsAlive(name: string, country: string): boolean {
		return this.isAlive;
	}
	getBookTitle(idBook: number): string {
		return this.title;
	}
	checkIllustration(idBook: number, title: string): boolean {
		return this.isIllustrated;
	}
}

let bookStore = new BookService(125478, 'Carrie', 232, 'hard cover', 'en', true, 'Stephen King',76, 'USA', true);
bookStore.getBookTitle(125478);
bookStore.checkAuthorIsAlive('Stephen King', 'USA');
bookStore.checkIllustration(125478, 'Carrie');
bookStore.getAuthorInfo('Stephen King');

