"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Teacher_1 = __importDefault(require("./Teacher"));
class Main {
    start() {
        const t1 = new Teacher_1.default('Loenardo', 'Lorem', 21, 'Javascript');
        t1.showSalary();
        console.log(t1.print());
    }
}
exports.default = Main;
