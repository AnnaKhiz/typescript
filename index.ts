class School {
    directions: any = [];

    set addDirection(direction: string) {
        this.directions.push(direction);
    }
}

class Direction {

    levels: any = [];
    _name: string;
    
    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set addLevel(level: number) {
        this.levels.push(level);
    }
}

class Level {
    groups: any = [];
    _name: string;
    _program: string;

    constructor(name: string, program: string) {
        this._name = name;
        this._program = program;
    }

    get name(): string {
        return this._name;
    }

    get program(): string {
        return this._program;
    }

    set addGroup(group: string) {
        this.groups.push(group);
    }
}

class Group {
    _students: any = [];
    directionName: string;
    levelName: string;

    get students(): any {
        return this._students;
    }

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    set addStudent(student: string) {
        this._students.push(student);
    }

    showPerformance(): any {
        return this.students.toSorted(
          (a: { getPerformanceRating: () => number }, b: { getPerformanceRating: () => number }) =>
                        b.getPerformanceRating() - a.getPerformanceRating()
        );
    }
}


class Student {
    grades: any = {};
    attendance: any = [];
    firstName: string;
    lastName: string;
    birthYear: number;

    constructor(firstName: string, lastName: string, birthYear: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    get fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value: string) {
        [this.lastName, this.firstName] = value.split(" ");
    }

    get age(): number {
        return new Date().getFullYear() - this.birthYear;
    }

    setGrade(subject: string, grade: number) {
        this.grades[subject] = grade;
    }

    set markAttendance(present: boolean) {
        this.attendance.push(present);
    }

    getPerformanceRating(): number  {
        const gradeValues: any = Object.values(this.grades);

        if (gradeValues.length === 0) return 0;

        const averageGrade: number =
            gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

        const attendancePercentage: number =
            (this.attendance.filter((present: boolean) => present).length /
                this.attendance.length) *
            100;

        return (averageGrade + attendancePercentage) / 2;
    }
}
