// Візьміть декоратор DeprecatedMethod і навчіть його працювати з об'єктом, який вміє приймати причину, 
// через яку його не варто використовувати, і назву методу, яким його можна замінити, якщо це можливо.

// Створіть декоратори MinLength, MaxLength та Email.

// Використайте попередню версію декораторів і зробіть так, щоб їх можно було використовувати разом.

class User {
	public name: string = 'John';
	public surname: string = 'Doe';

	private _email: string = '';

	@MinLength(10)
	@MaxLength(20)
	@SetEmail
	public set setEmail(value: string) {
		this._email = value;
	}

	@DeprecatedMethod('Old method', 'getFullName')
	public getName(): void {
		console.log(`${this.name}`)
	}
	public getFullName(): void {
		console.log(`Full name: ${this.name} ${this.surname}`)
	}
}

const user = new User();
user.getName()
user.setEmail = 'someemail@gmail.com'


function DeprecatedMethod(cause = '', replacement = '') {
	return function <T, A extends any[], R>(
		originalMethod: (...args: A) => R,
		context: ClassMethodDecoratorContext
	): any {
		function replacementMethod(this: T, ...args: A): R {
			console.log(`Method - ${String(context.name)} is deprecated. The cause: ${cause}. Use instead: ${replacement}`)
			return originalMethod.apply(this, args)
		}
		return replacementMethod
	}
}

function MinLength(min: number) {
	return function <T, V>(
		originalMethod: (value: V) => void,
		context: ClassSetterDecoratorContext<T, V>
	): any {
		function setProperty(this: T, value: V): void {
			if (typeof value === 'string' && value.length >= min) {
				originalMethod.call(this, value)
			} else {
				throw new Error(`Min length should be more than - ${min}`)
			}
		}
		return setProperty
	}
}

function MaxLength(max: number) {
	return function <T, V>(
		originalMethod: (value: V) => void,
		context: ClassSetterDecoratorContext<T, V>
	): any {
		function setProperty(this: T, value: V): void {
			if (typeof value === 'string' && value.length <= max) {
				originalMethod.call(this, value)
			} else {
				throw new Error(`Max length should be less than - ${max}`)
			}
		}
		return setProperty
	}
}

function SetEmail<T>(
	originalMethod: (value: string) => void,
	context: ClassSetterDecoratorContext<T, string>
) {
	function setProperty(value: string): void {
		console.log(`new email = ${value}`)
		return originalMethod.call(this, value)
	}
	return setProperty
}
