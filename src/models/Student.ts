/*
 * Students
 *  - classes
 **/

import Person from './Person';
export default class Student extends Person {
  private classes: string[] = [];

  // constructor(name: string, lastname: string, age: number, firstClass: string) {
  //   super(name, lastname, age);
  //   this.classes.push(firstClass);
  //   // this.name = name;
  //   // this.lastname = lastname;
  //   // this.age = age;
  // }

  addClass(className: string): void {
    this.classes.push(className);
  }

  setClasses(newClasses: string[]): void {
    this.classes = [...newClasses];
  }

  showClasses(): void {
    console.log(this.classes);
  }
}
