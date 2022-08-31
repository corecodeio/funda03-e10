"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, lastname, age) {
        this.id = '';
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    getFullName() {
        return `${this.name} ${this.lastname}`;
    }
    print() {
        return `ID: ${this.id}`;
    }
}
exports.default = Person;
