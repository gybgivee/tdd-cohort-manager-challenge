class Student {
    constructor(student = [], id = 1) {

        this.student = student;
        this.id = id;


    }
    setStudent(firstName, lastName, github, email) {
        const currentStudent = this.student;
        const name = firstName + ' ' + lastName;
        //let tempArray = [];
        const studentDistinct = currentStudent.some(element => element.name === name);
        if (!studentDistinct) {
            currentStudent.push(
                {
                    id: this.id,
                    name: name,
                    github: github,
                    email: email

                })
            //create student id automatically by increment id
            this.id++;
            this.student = currentStudent;
        } else {
            console.log('This student has already been added');
        }


        return this.student;

    }
    searchStudentByName(firstName, lastName) {
        const name = firstName + ' ' + lastName;
        const currentStudent = this.student;
        let result;
        result = currentStudent.find(element => element.name === name);
        if (result === null || result === undefined) {
            console.log('Student not found');
            result=[];
            return result;
        }
    
        return result;
    }
   
}

module.exports = Student
const Cohort = require("../src/cohort.js");
const myCohort = new Cohort();
const cohort1 = myCohort.addCohort();
console.log(myCohort.addCohort());

const myStudent = new Student();
myStudent.setStudent('Mochi', 'foote', 'github.com/mochi', 'mochi@gmail.com')
myStudent.setStudent('Marty', 'foote', 'github.com/Marty', 'marty@gmail.com')
myStudent.setStudent('Mia', 'foote', 'github.com/mia', 'mia@gmail.com')
myStudent.setStudent('Maew', 'foote', 'github.com/maew', 'maew@gmail.com');
const result = myCohort.setStudentToCohort(myStudent, cohort1);
const updateStudentList = result.student;
const updatedCohort = result.cohort;
console.log(updatedCohort);
console.log('--------------------------------------');
console.log(updateStudentList);
/*
const myStudent2 = new Student();
console.log(myStudent2.setStudent('Mia', 'foote', 'github.com/mia', 'mia@gmail.com'));
console.log(myStudent2.setStudent('A', 'XYZ', 'github.com/a', 'aaa@gmail.com'));
console.log(myStudent2.setStudent('B', 'XYZ', 'github.com/b', 'bbb@gmail.com'));
console.log('cohortWithStudent ', myCohort.setStudentToCohort(myStudent2, cohort1));
*/

//console.log(myStudent.searchStudentByName('uki', 'sushi'));
//console.log('Remove : ',myCohort.removeStudentFromCohort('A', 'XYZ'));



