var School = /** @class */ (function () {
    function School() {
        this.directions = [];
    }
    Object.defineProperty(School.prototype, "addDirection", {
        set: function (direction) {
            this.directions.push(direction);
        },
        enumerable: false,
        configurable: true
    });
    return School;
}());
var Direction = /** @class */ (function () {
    function Direction(name) {
        this.levels = [];
        this._name = name;
    }
    Object.defineProperty(Direction.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direction.prototype, "addLevel", {
        set: function (level) {
            this.levels.push(level);
        },
        enumerable: false,
        configurable: true
    });
    return Direction;
}());
var Level = /** @class */ (function () {
    function Level(name, program) {
        this.groups = [];
        this._name = name;
        this._program = program;
    }
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "program", {
        get: function () {
            return this._program;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "addGroup", {
        set: function (group) {
            this.groups.push(group);
        },
        enumerable: false,
        configurable: true
    });
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._students = [];
        this.directionName = directionName;
        this.levelName = levelName;
    }
    Object.defineProperty(Group.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "addStudent", {
        set: function (student) {
            this._students.push(student);
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.getPerformanceRating = function () {
        return this.levelName;
    };
    Group.prototype.showPerformance = function () {
        return this.students.sort(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
    };
    return Group;
}());
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this.grades = {};
        this.attendance = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this.lastName, " ").concat(this.firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(" "), this.lastName = _a[0], this.firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this.birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setGrade = function (subject, grade) {
        this.grades[subject] = grade;
    };
    Object.defineProperty(Student.prototype, "markAttendance", {
        set: function (present) {
            this.attendance.push(present);
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this.grades);
        if (gradeValues.length === 0)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this.attendance.filter(function (present) { return present; }).length /
            this.attendance.length) *
            100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
