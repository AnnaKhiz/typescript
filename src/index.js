const BadgeSize = {
    single: '4x3',
    double: '4x6'
};
const Print = {
    fast: 'zpl',
    standart: 'color',
};
var BadgeTypesEnum;
(function (BadgeTypesEnum) {
    BadgeTypesEnum["COLOR"] = "color";
    BadgeTypesEnum["MONO"] = "mono";
})(BadgeTypesEnum || (BadgeTypesEnum = {}));
class Student {
    badgeTypeMap = new Map([
        ['single_fast', BadgeTypesEnum.COLOR],
        ['single_standart', BadgeTypesEnum.COLOR],
        ['double_fast', BadgeTypesEnum.MONO],
        ['double_standart', BadgeTypesEnum.MONO]
    ]);
    _firstName;
    _lastName;
    _birthYear;
    _grades = []; // Опишите, как объект у которого есть поле workName и mark(оценка может быть выполненно или нет)
    _visits = []; // Опишите, как объект у которого есть поле lesson (любое имя) и present
    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }
    set fullName(value) {
        [this._lastName, this._firstName] = value.split(' ');
    }
    get age() {
        return new Date().getFullYear() - this._birthYear;
    }
    constructor(firstName, lastName, birthYear) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    setGrade(grade) {
        this._grades.push(grade);
    }
    setVisit(visit) {
        this._visits.push(visit);
    }
    getPerformanceRating() {
        if (!this._grades.length)
            return 0;
        const averageGrade = this._grades.reduce((sum, grade) => sum + grade.mark, 0) / this._grades.length;
        const attendancePercentage = (this._visits.filter(present => present).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    }
}
