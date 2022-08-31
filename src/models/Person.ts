/**
 * Person
 *  - name
 *  - lastname
 *  - age
 * */

export default class Person {
  public name: string;
  public lastname: string;
  public age: number;
  protected id: string = '';

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  getFullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  print(): string {
    return `ID: ${this.id}`;
  }
}
