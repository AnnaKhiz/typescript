// Візьміть декоратор DeprecatedMethod і навчіть його працювати з об'єктом, який вміє приймати причину, 
// через яку його не варто використовувати, і назву методу, яким його можна замінити, якщо це можливо.

// Створіть декоратори поля MinLength, MaxLength та Email.

// Використайте попередню версію декораторів і зробіть так, щоб їх можно було використовувати разом.

class User {
	public name: string = 'John';
	public surname: string = 'Doe';

	@MinLength(10)
	@MaxLength(20)
	@SetEmail
	public email: string = 'someemail@gmail.com';

	@DeprecatedMethod('Old method', 'getFullName')
	public getName(): void {
		console.log(`${this.name}`)
	}
	public getFullName(): void {
		console.log(`Full name: ${this.name} ${this.surname}`)
	}
}

const user = new User();
user.getName();

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
		originalProperty: undefined,
		context: ClassFieldDecoratorContext<T, V>
	): any {
		function setProperty(this: T, originalValue: V): V {
			if (String(originalValue).length >= min) {
				return originalValue
			} else {
				throw new Error(`Min length should be more than - ${min}`)
			}
		}
		return setProperty
	}
}

function MaxLength(max: number) {
	return function <T, V>(
		originalProperty: undefined,
		context: ClassFieldDecoratorContext<T, V>
	): any {
		function setProperty(this: T, originalValue: V): V {
			if (String(originalValue).length <= max) {
				return originalValue
			} else {
				throw new Error(`Max length should be less than - ${max}`)
			}
		}
		return setProperty
	}
}

function SetEmail<T, V>(
	originalProperty: undefined,
	context: ClassFieldDecoratorContext<T, V>
): any {
	function setProperty(this: T, originalValue: V): V {
		if (String(originalValue).includes('@')) {
			console.log(`Email: ${originalValue}`)
			return originalValue
		} else {
			throw new Error(`Email must include "@"`)
		}
	}
	return setProperty
}

