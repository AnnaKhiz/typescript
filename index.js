var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var School = /** @class */ (function () {
    function School() {
        // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods
        this._areas = [];
        this._lecturers = []; // Name, surname, position, company, experience, courses, contacts
    }
    Object.defineProperty(School.prototype, "areas", {
        get: function () {
            return this._areas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(School.prototype, "lecturers", {
        get: function () {
            return this._lecturers;
        },
        enumerable: false,
        configurable: true
    });
    School.prototype.addArea = function (area) {
        this._areas.push(area);
    };
    School.prototype.removeArea = function (area) {
        return this._areas.filter(function (element) { return element !== area; });
    };
    School.prototype.addLecturer = function () {
        var lecturer = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            lecturer[_i] = arguments[_i];
        }
        this._lecturers.push({
            name: lecturer[0],
            surname: lecturer[1],
            position: lecturer[2],
            company: lecturer[3],
            experience: lecturer[4],
            courses: lecturer[5],
            contacts: lecturer[6],
        });
    };
    School.prototype.removeLecturer = function (lecturer) {
        this._lecturers.filter(function (element) {
            return Object.keys(__assign(__assign({}, element), lecturer))
                .every(function (key) { return element[key] !== lecturer[key]; });
        });
    };
    return School;
}());
var Area = /** @class */ (function () {
    function Area(name) {
        // implement getters for fields and 'add/remove level' methods
        this._levels = [];
        this._name = name;
    }
    Object.defineProperty(Area.prototype, "getLevels", {
        get: function () {
            return this._levels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Area.prototype.addLevel = function (level) {
        return this._levels.push(level);
    };
    Area.prototype.removeLevel = function (level) {
        return this._levels.filter(function (element) { return element !== level; });
    };
    return Area;
}());
var Level = /** @class */ (function () {
    function Level(name, description) {
        // implement getters for fields and 'add/remove group' methods
        this._groups = [];
        this._name = name;
        this._description = description;
    }
    Object.defineProperty(Level.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "getDescription", {
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this._groups.push(group);
    };
    Level.prototype.removeGroup = function (group) {
        return this._groups.filter(function (element) { return element !== group; });
    };
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._students = [
            { studentFullName: 'John', rating: 5, getPerformanceRating: function () { return this.rating; } },
            { studentFullName: 'Kate', rating: 3, getPerformanceRating: function () { return this.rating; } },
            { studentFullName: 'Bob', rating: 4, getPerformanceRating: function () { return this.rating; } },
        ]; // Modify the array so that it has a valid toSorted method*
        this.directionName = directionName;
        this.levelName = levelName;
    }
    Object.defineProperty(Group.prototype, "getArea", {
        get: function () {
            return this._area;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "getStatus", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "getStudents", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "setStatus", {
        set: function (status) {
            this._status = status;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (name, rating) {
        this._students.push({ studentFullName: name, rating: rating });
    };
    Group.prototype.removeStudent = function (studentFullName) {
        return this._students.filter(function (student) { return student.studentFullName !== studentFullName; });
    };
    Group.prototype.showPerformance = function () {
        var sortedStudents = this._students.toSorted(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    return Group;
}());
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this._grades = {
            math: 5,
            literature: 4,
            physics: 5,
            music: 3
        }; // workName: mark
        this._visits = [
            { math: 'present' },
            { literature: 'present' },
            { physics: 'present' },
            { music: 'absent' },
        ]; // lesson: present
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this._lastName, " ").concat(this._firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(' '), this._lastName = _a[0], this._firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this._birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setGrade = function (workName, mark) {
        this._grades[workName] = mark;
    };
    Student.prototype.setVisit = function (subject, visit) {
        var _a;
        this._visits.push((_a = {}, _a[subject] = visit, _a));
    };
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this._grades);
        if (!gradeValues.length)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this._visits.filter(function (present) {
            return Object.values(present).some(function (element) {
                return element === 'present';
            });
        }).length / this._visits.length) * 100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
