class student{
    constructor(student=[],id=1){

       this.student = student;
       this.id = id;


    }
    setStudent(firstName, lastName,github,email){
        const currentStudent = this.student;
        //let tempArray = [];
        currentStudent.push(
        {
            id:this.id,
            name:firstName+' '+lastName,
            github:github,
            email:email

        })
        //create student id automatically by increment id
        this.id++;
        this.student = currentStudent;

        return this.student;

    }
}

module.exports = student
const Cohort = require("../src/cohort.js");
const myCohort = new Cohort();
const cohort1=myCohort.setCohort();
console.log(myCohort.setCohort());

const myStudent = new student();
myStudent.setStudent('Mochi','foote','github.com/mochi','mochi@gmail.com')
myStudent.setStudent('Marty','foote','github.com/Marty','marty@gmail.com')
myStudent.setStudent('Mia','foote','github.com/mia','mia@gmail.com')
myStudent.setStudent('Maew','foote','github.com/maew','maew@gmail.com');
myCohort.setStudentToCohort(myStudent,cohort1);

//const myStudent2 = new student();
console.log(myStudent.setStudent('Mia','foote','github.com/mia','mia@gmail.com'));
console.log(myStudent.setStudent('A','XYZ','github.com/a','aaa@gmail.com'));
console.log(myStudent.setStudent('B','XYZ','github.com/b','bbb@gmail.com'));
console.log('cohortWithStudent ',myCohort.setStudentToCohort(myStudent,cohort1));



