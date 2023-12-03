const BadgeSize = {
	single: '4x3',
	double: '4x6'
}

const Print = {
	fast: 'zpl',
	standart: 'color',
}

enum BadgeTypesEnum {
	COLOR = 'color',
	MONO = 'mono'
}

type BadgeSizeType = keyof typeof BadgeSize;
type PrintType = keyof typeof Print;

type LiteralType = `${BadgeSizeType}_${PrintType}`;


type Grades = {
	workName: string,
	mark: 0 | 1
}

type Visits = {
	lesson: string,
	present: boolean
}

class Student {
	badgeTypeMap = new Map<LiteralType, BadgeTypesEnum>([
		['single_fast', BadgeTypesEnum.COLOR],
		['single_standart', BadgeTypesEnum.COLOR],
		['double_fast', BadgeTypesEnum.MONO],
		['double_standart', BadgeTypesEnum.MONO]
	])

	_firstName: string;
	_lastName: string;
	_birthYear: number;
	_grades: Grades[] = []; // Опишите, как объект у которого есть поле workName и mark(оценка может быть выполненно или нет)
	_visits: Visits[] = []; // Опишите, как объект у которого есть поле lesson (любое имя) и present

	get fullName(): string {
		return `${this._lastName} ${this._firstName}`;
	}
	
	set fullName(value: string) {
		[this._lastName, this._firstName] = value.split(' ');
	}

	get age(): number {
		return new Date().getFullYear() - this._birthYear;
	}

	constructor(firstName: string, lastName: string, birthYear: number) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._birthYear = birthYear;
	}

	setGrade(grade: Grades) {
		this._grades.push(grade);
	}

	setVisit(visit: Visits) {
		this._visits.push(visit);
	}

	getPerformanceRating(): number {
		if (!this._grades.length) return 0;

		const averageGrade = this._grades.reduce((sum, grade) => sum + grade.mark, 0) / this._grades.length;
		const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;

		return (averageGrade + attendancePercentage) / 2;
	}
}