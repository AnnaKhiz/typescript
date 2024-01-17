// Візьміть декоратор DeprecatedMethod і навчіть його працювати з об'єктом, який вміє приймати причину, 
// через яку його не варто використовувати, і назву методу, яким його можна замінити, якщо це можливо.
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// Створіть декоратори MinLength, MaxLength та Email.
// Використайте попередню версію декораторів і зробіть так, щоб їх можно було використовувати разом.
var User = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _set_setEmail_decorators;
    var _getName_decorators;
    return _a = /** @class */ (function () {
            function User() {
                this.name = (__runInitializers(this, _instanceExtraInitializers), 'John');
                this.surname = 'Doe';
                this._email = '';
            }
            Object.defineProperty(User.prototype, "setEmail", {
                set: function (value) {
                    this._email = value;
                },
                enumerable: false,
                configurable: true
            });
            User.prototype.getName = function () {
                console.log("".concat(this.name));
            };
            User.prototype.getFullName = function () {
                console.log("Full name: ".concat(this.name, " ").concat(this.surname));
            };
            return User;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _set_setEmail_decorators = [MinLength(10), MaxLength(20), SetEmail];
            _getName_decorators = [DeprecatedMethod('Old method', 'getFullName')];
            __esDecorate(_a, null, _set_setEmail_decorators, { kind: "setter", name: "setEmail", static: false, private: false, access: { has: function (obj) { return "setEmail" in obj; }, set: function (obj, value) { obj.setEmail = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _getName_decorators, { kind: "method", name: "getName", static: false, private: false, access: { has: function (obj) { return "getName" in obj; }, get: function (obj) { return obj.getName; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var user = new User();
user.getName();
user.getFullName();
user.setEmail = 'someemail@gmail.com';
function DeprecatedMethod(cause, replacement) {
    if (cause === void 0) { cause = ''; }
    if (replacement === void 0) { replacement = ''; }
    return function (originalMethod, context) {
        function replacementMethod() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log("Method - ".concat(String(context.name), " is deprecated. The cause: ").concat(cause, ". Use instead: ").concat(replacement));
            return originalMethod.apply(this, args);
        }
        return replacementMethod;
    };
}
function MinLength(min) {
    return function (originalMethod, context) {
        function setProperty(value) {
            if (typeof value === 'string' && value.length >= min) {
                originalMethod.call(this, value);
            }
            else {
                throw new Error("Min length should be more than - ".concat(min));
            }
        }
        return setProperty;
    };
}
function MaxLength(max) {
    return function (originalMethod, context) {
        function setProperty(value) {
            if (typeof value === 'string' && value.length <= max) {
                originalMethod.call(this, value);
            }
            else {
                throw new Error("Max length should be less than - ".concat(max));
            }
        }
        return setProperty;
    };
}
function SetEmail(originalMethod, context) {
    function setProperty(value) {
        console.log("new email = ".concat(value));
        return originalMethod.call(this, value);
    }
    return setProperty;
}
