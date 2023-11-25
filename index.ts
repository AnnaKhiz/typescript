class School {
    // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

    _areas: string[] = [];
    _lecturers: object[] = []; // Name, surname, position, company, experience, courses, contacts

    get areas(): string[] {
        return this._areas;
    }

    get lecturers(): object[] {
        return this._lecturers;
    }

    addArea(area: string): void {
       this._areas.push(area);
    }

    removeArea(area: string): string[] {
        return this._areas.filter((element: string):boolean => element !== area);
    }

    addLecturer(...lecturer: [string, string, string, string, string, string, string]): void {
        this._lecturers.push({
            name: lecturer[0],
            surname: lecturer[1],
            position: lecturer[2],
            company: lecturer[3],
            experience: lecturer[4],
            courses: lecturer[5],
            contacts: lecturer[6],
        })
    }

    removeLecturer(lecturer: object) {
        this._lecturers.filter((element: object):boolean =>
          Object.keys({ ...element, ...lecturer })
            .every((key: string):boolean => element[key] !== lecturer[key]))
    }
}

class Area {
    // implement getters for fields and 'add/remove level' methods
    _levels: number[] = [];
    _name: string;

    constructor(name) {
        this._name = name;
    }

    get getLevels(): number[] {
        return this._levels
    }

    get getName(): string {
        return this._name
    }

    addLevel(level: number): number {
        return this._levels.push(level)
    }

    removeLevel(level: number): number[] {
        return this._levels.filter((element: number):boolean => element !== level);
    }
}

class Level {
    // implement getters for fields and 'add/remove group' methods

    _groups: string[] = [];
    _name: string;
    _description: object;

    constructor(name: string, description: object) {
        this._name = name;
        this._description = description;
    }

    get getName(): string {
        return this._name
    }

    get getDescription(): object {
        return this._description
    }

    addGroup(group: string): void {
        this._groups.push(group)
    }

    removeGroup(group: string): string[] {
        return this._groups.filter((element: string):boolean => element !== group)
    }

}

class Group {
    // implement getters for fields and 'add/remove student' and 'set status' methods

    _area: string;
    _status: string;
    directionName: string;
    levelName: string;
    _students: object[] | any = [
        { studentFullName: 'John', rating: 5, getPerformanceRating(): number { return this.rating } },
        { studentFullName: 'Kate', rating: 3, getPerformanceRating(): number { return this.rating } },
        { studentFullName: 'Bob', rating: 4, getPerformanceRating(): number { return this.rating } },
    ]; // Modify the array so that it has a valid toSorted method*

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    get getArea(): string {
        return this._area
    }

    get getStatus(): string {
        return this._status
    }

    get getStudents(): object[] {
        return this._students
    }

    set setStatus(status: string) {
        this._status = status
    }

    addStudent(name: string, rating: number): void {
        this._students.push({studentFullName: name, rating: rating})
    }

    removeStudent(studentFullName: string): object[] {
        return this._students.filter((student):boolean => student.studentFullName !== studentFullName)
    }

    showPerformance(): object[] {
        const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
        return sortedStudents;
    }
}

class Student {
    // implement 'set grade' and 'set visit' methods

    _firstName: string;
    _lastName: string;
    _birthYear: number;

    _grades: object = {
        math: 5,
        literature: 4,
        physics: 5,
        music: 3
    }; // workName: mark

    _visits: object[] = [
        {math: 'present'},
        {literature: 'present'},
        {physics: 'present'},
        {music: 'absent'},
    ]; // lesson: present

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName(): string {
        return `${this._lastName} ${this._firstName}`;
    }

    get age(): number {
        return new Date().getFullYear() - this._birthYear;
    }

    set fullName(value: string) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    setGrade(workName: string, mark: number): void {
        this._grades[workName] = mark;
    }

    setVisit(subject: string, visit: string): void {
        this._visits.push({[subject]: visit})
    }

    getPerformanceRating(): number {
        const gradeValues = Object.values(this._grades);

        if (!gradeValues.length) return 0;

        const averageGrade = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage = (this._visits.filter(present =>
          Object.values(present).some((element:string):boolean =>
            element === 'present')).length / this._visits.length) * 100;

        return (averageGrade + attendancePercentage) / 2;
    }
}