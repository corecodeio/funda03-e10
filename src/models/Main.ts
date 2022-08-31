import Student from './Student';
import Teacher from './Teacher';
export default class Main {
  start(): void {
    // STUDENT
    // const s1 = new Student('Yosef', 'Maldonado', 26);
    // console.log(s1.getFullName());
    // console.log(s1.age);
    // s1.addClass('Math');
    // s1.showClasses();
    // s1.setClasses(['Music', 'Java', 'Typescript']);
    // TEACHER
    const t1 = new Teacher('Loenardo', 'Lorem', 21, 'Javascript');
    // console.log(t1.getFullName());
    // console.log(t1.age);
    t1.showSalary();
    console.log(t1.print());
    // console.log(t1.id);
  }
}
