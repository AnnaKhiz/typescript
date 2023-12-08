interface ICharacteristics {
	readonly name: string;
	readonly color: string;
	calculateArea(a: number, b?: number, c?: number): number;
	print?(): void;
}

class Circle implements ICharacteristics {
	public readonly name: string = 'circle';
	public readonly color: string = 'red';

	public calculateArea(r: number): number {
		return Math.PI * Math.pow(r, 2);
	};
}

class Rectangle implements ICharacteristics {
	public readonly name: string = 'rectangle';
	public readonly color: string = 'green';

	public calculateArea(x: number, y: number): number {
		this.#print();
		return x * y;
	};

	#print(): void {
		console.log('Rectangle area formula: S = x * y');
	};

}

class Square implements ICharacteristics {
	public readonly name: string = 'square';
	public readonly color: string = 'yellow';

	public calculateArea(x: number): number {
		this.#print();
		return Math.pow(x, 2);
	};

	#print(): void {
		console.log('Square area formula: S = x * x');
	};
}

class Triangle implements ICharacteristics {
	public readonly name: string = 'triangle';
	public readonly color: string = 'blue';

	public calculateArea(a: number, b: number, c: number): number {
		let p = (a + b + c) / 2;
		return Math.sqrt(p * (p - a) * (p - b) * (p - c));
	};

}

let circle = new Circle();
let rectangle = new Rectangle();
let square = new Square();
let triangle = new Triangle();