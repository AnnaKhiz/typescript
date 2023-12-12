interface IShape {
	readonly name: string;
	readonly color: string;
	calculateArea(a: number, b?: number, c?: number): number;
}

abstract class GeometryShape implements IShape {
	public abstract name: string;
	public abstract color: string;

	public abstract calculateArea(a: number, b?: number, c?: number): number;
}


class Circle extends GeometryShape {
	public readonly name: string = 'circle';
	public readonly color: string = 'red';

	public calculateArea(r: number): number {
		return Math.PI * Math.pow(r, 2);
	};
}

class Rectangle extends GeometryShape {
	public readonly name: string = 'rectangle';
	public readonly color: string = 'green';

	#print(): void {
		console.log('Rectangle area formula: S = x * y');
	};

	public calculateArea(x: number, y: number): number {
		this.#print();
		return x * y;
	};
}

class Square extends GeometryShape {
	public readonly name: string = 'square';
	public readonly color: string = 'yellow';

	#print(): void {
		console.log('Square area formula: S = x * x');
	};

	public calculateArea(x: number): number {
		this.#print();
		return Math.pow(x, 2);
	};
}

class Triangle extends GeometryShape {
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