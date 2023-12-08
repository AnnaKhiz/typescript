var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Rectangle_instances, _Rectangle_print, _Square_instances, _Square_print;
var Circle = /** @class */ (function () {
    function Circle() {
        this.name = 'circle';
        this.color = 'red';
    }
    Circle.prototype.calculateArea = function (r) {
        return Math.PI * Math.pow(r, 2);
    };
    ;
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        _Rectangle_instances.add(this);
        this.name = 'rectangle';
        this.color = 'green';
    }
    Rectangle.prototype.calculateArea = function (x, y) {
        __classPrivateFieldGet(this, _Rectangle_instances, "m", _Rectangle_print).call(this);
        return x * y;
    };
    ;
    ;
    return Rectangle;
}());
_Rectangle_instances = new WeakSet(), _Rectangle_print = function _Rectangle_print() {
    console.log('Rectangle area formula: S = x * y');
};
var Square = /** @class */ (function () {
    function Square() {
        _Square_instances.add(this);
        this.name = 'square';
        this.color = 'yellow';
    }
    Square.prototype.calculateArea = function (x) {
        __classPrivateFieldGet(this, _Square_instances, "m", _Square_print).call(this);
        return Math.pow(x, 2);
    };
    ;
    ;
    return Square;
}());
_Square_instances = new WeakSet(), _Square_print = function _Square_print() {
    console.log('Square area formula: S = x * x');
};
var Triangle = /** @class */ (function () {
    function Triangle() {
        this.name = 'triangle';
        this.color = 'blue';
    }
    Triangle.prototype.calculateArea = function (a, b, c) {
        var p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    };
    ;
    return Triangle;
}());
var circle = new Circle();
var rectangle = new Rectangle();
var square = new Square();
var triangle = new Triangle();
