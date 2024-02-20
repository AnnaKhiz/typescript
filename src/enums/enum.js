"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusesEnum = exports.TaskPrioritiesEnum = exports.TaskTypesEnum = void 0;
var TaskTypesEnum;
(function (TaskTypesEnum) {
    TaskTypesEnum["STORY"] = "story";
    TaskTypesEnum["BUG"] = "bug";
    TaskTypesEnum["TASK"] = "task";
})(TaskTypesEnum || (exports.TaskTypesEnum = TaskTypesEnum = {}));
var TaskPrioritiesEnum;
(function (TaskPrioritiesEnum) {
    TaskPrioritiesEnum["LOW"] = "low";
    TaskPrioritiesEnum["MEDIUM"] = "medium";
    TaskPrioritiesEnum["HIGH"] = "high";
})(TaskPrioritiesEnum || (exports.TaskPrioritiesEnum = TaskPrioritiesEnum = {}));
var TaskStatusesEnum;
(function (TaskStatusesEnum) {
    TaskStatusesEnum["NEW"] = "new";
    TaskStatusesEnum["IN_PROGRESS"] = "in_progress";
    TaskStatusesEnum["FINISHED"] = "finished";
    TaskStatusesEnum["DELAYED"] = "delayed";
})(TaskStatusesEnum || (exports.TaskStatusesEnum = TaskStatusesEnum = {}));
