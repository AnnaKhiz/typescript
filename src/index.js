//1. Реализовала 2 варианта 1 задания, поскольку не уверена правильно ли я поняла задание.
// Второй закомментирован ниже.
var Calculation = /** @class */ (function () {
    function Calculation() {
    }
    Calculation.prototype.sum = function (a, b) {
        return a + b;
    };
    ;
    Calculation.prototype.subtraction = function (a, b) {
        return a - b;
    };
    ;
    Calculation.prototype.division = function (a, b) {
        if (b === 0) {
            return 'Dividing by 0 is not allowed';
        }
        else {
            return a / b;
        }
    };
    ;
    Calculation.prototype.multiplication = function (a, b) {
        return a * b;
    };
    ;
    return Calculation;
}());
var sum = new Calculation;
sum.sum(1, 2);
sum.subtraction(4, 2);
sum.multiplication(8, 4);
sum.division(10, 2);
var BookService = /** @class */ (function () {
    function BookService(idBook, title, pages, binding, language, isIllustrated, name, age, country, isAlive) {
        this.idBook = idBook;
        this.title = title;
        this.pages = pages;
        this.binding = binding;
        this.language = language;
        this.isIllustrated = isIllustrated;
        this.name = name;
        this.age = age;
        this.country = country;
        this.isAlive = isAlive;
    }
    BookService.prototype.getAuthorInfo = function (name) {
        return {
            name: this.name,
            age: this.age,
            country: this.country,
            isAlive: this.isAlive,
        };
    };
    BookService.prototype.checkAuthorIsAlive = function (name, country) {
        return this.isAlive;
    };
    BookService.prototype.getBookTitle = function (idBook) {
        return this.title;
    };
    BookService.prototype.checkIllustration = function (idBook, title) {
        return this.isIllustrated;
    };
    return BookService;
}());
var bookStore = new BookService(125478, 'Carrie', 232, 'hard cover', 'en', true, 'Stephen King', 76, 'USA', true);
bookStore.getBookTitle(125478);
bookStore.checkAuthorIsAlive('Stephen King', 'USA');
bookStore.checkIllustration(125478, 'Carrie');
bookStore.getAuthorInfo('Stephen King');
