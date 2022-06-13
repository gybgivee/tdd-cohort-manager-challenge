class Student {
    constructor(student = [], id = 1) {

        this.student = student;
        this.id = id;


    }
    //update Student list after add cohort
    updateStudent(student) {
        this.student = student;
        return this.student;
    }
    addStudent(firstName, lastName, github, email) {
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
            result='Student not found';
            return result;
        }

        return result;
    }
    //remove student list : student quite
    removeStudentFromName(firstName, lastName) {

        const name = firstName + ' ' + lastName;
        const currentStudent = this.student;
    
        for (let i = 0; i < currentStudent.length; i++) {

            if (currentStudent[i].name === name) {
                currentStudent.splice(i, 1);
                this.student = currentStudent;
                console.log('updatedStudent ', this.student);
                return this.student;

            }

        }

        console.log('Fail to remove : student name not found');
        return 'Fail to remove : student name not found';
    }

}

module.exports = Student
const Cohort = require("../src/cohort.js");
const myCohort = new Cohort();
const cohort1 = myCohort.addCohort();
console.log(myCohort.addCohort());

const myStudent = new Student();
myStudent.addStudent('Mochi', 'foote', 'github.com/mochi', 'mochi@gmail.com')
myStudent.addStudent('Marty', 'foote', 'github.com/Marty', 'marty@gmail.com')
myStudent.addStudent('Mia', 'foote', 'github.com/mia', 'mia@gmail.com')
myStudent.addStudent('Maew', 'foote', 'github.com/maew', 'maew@gmail.com');
const result = myCohort.setStudentToCohort(myStudent, cohort1[0]);
const updateStudentList = result.student;
const updatedCohort = result.cohort;
console.log(updatedCohort);
console.log('--------------------------------------');
console.log(updateStudentList);
myStudent.updateStudent(updateStudentList);
console.log(myStudent.searchStudentByName('Mochi', 'foote'));

console.log('Remove : ', myCohort.removeStudentFromCohort('Maew', 'foote'));
myStudent.removeStudentFromName('Maew', 'foote');
/*
const myStudent2 = new Student();
console.log(myStudent2.addStudent('Mia', 'foote', 'github.com/mia', 'mia@gmail.com'));
console.log(myStudent2.addStudent('A', 'XYZ', 'github.com/a', 'aaa@gmail.com'));
console.log(myStudent2.addStudent('B', 'XYZ', 'github.com/b', 'bbb@gmail.com'));
console.log('cohortWithStudent ', myCohort.setStudentToCohort(myStudent2, cohort1));
*/

//console.log(myStudent.searchStudentByName('uki', 'sushi'));
//console.log('Remove : ',myCohort.removeStudentFromCohort('A', 'XYZ'));



