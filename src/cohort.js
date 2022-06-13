class Cohort {

    constructor(cohort = [], limit = 24, id = 1) {
        this.cohort = cohort;
        this.limit = limit;
        this.id = id;
    }
    getCohort() {
        return this.cohort;
    }
    addCohort() {
        const key = ('COHORT' + this.id).toString();
        this.id++;
        /* this make it double array -> this is wrong
        this.cohort.push({
            key:{}
        }) */
        this.cohort[key] = {};


        const cohortName = Object.keys(this.cohort);
        console.log('cohort : ', this.cohort,Object.keys( this.cohort));


        return cohortName;
        //return this.cohort;
    }
    searchCohortByName(cohortName) {
        cohortName = cohortName.toUpperCase();
        let studentList = [];
        let currentCohort = this.cohort;
        const result = currentCohort.hasOwnProperty(cohortName);
        console.log('Result : ', result);


        if (result) {
            studentList = currentCohort[cohortName];
            console.log('studentList : ', studentList);
            return studentList;

        }
        console.log('Fail to search : cohort name not found');
        return studentList;
        //console.log('Result : ',result,studentList);


    }
    removeCohortByName(cohortName) {
        cohortName = cohortName.toUpperCase();

        const keysInCohort = Object.keys(this.cohort);
        console.log('keysInCohort ', keysInCohort, keysInCohort.length, keysInCohort[0]);

        for (let i = 0; i < keysInCohort.length; i++) {
            console.log(i, 'Am in here');
            if (keysInCohort[i] === cohortName) {
                delete this.cohort[keysInCohort[i]];
                console.log('updatedCohort ', this.cohort);
                return this.cohort;
            }

        }
        console.log('Fail to remove : cohort name not found');
        return this.cohort;

    }
    setStudentToCohort(student, cohortName) {
        cohortName = cohortName.toUpperCase();

        //check if objectempty by get a value by key name if its empty, this will return [{}]
        const isObjectEmpty = Object.values(this.cohort[cohortName]);
        const listOfStudent = student.student;
        let newStudentList = JSON.parse(JSON.stringify(listOfStudent));
        //console.log('isObjectEmpty ', isObjectEmpty);
        if (isObjectEmpty.length === 0) {
            //assign value to this cohort array by key
            this.cohort[cohortName] = listOfStudent;
            for (let i = 0; i < listOfStudent.length; i++) {
                //add new cohort to student class
                newStudentList[i].cohortName = cohortName;
            }

        } else {
            console.log('check here');
            const allStudent = this.cohort;
            const cohortKeys = Object.keys(this.cohort);
            let updateStudent = [];
         
            for (let i = 0; i < listOfStudent.length; i++) {
                const check = this.checkStudentDistinct(listOfStudent[i].name);
                if (check.studentDistinct) {

                    updateStudent.push(listOfStudent[i]);
                    console.log('updateStudent ', updateStudent);
                    //add new cohort to student class
                    newStudentList[i].cohortName = cohortName;
                }
            }

            if (updateStudent.length > 0) {
                for (const iterator of updateStudent) {
                    this.cohort[cohortName].push(iterator)
                }
            }
        }

        return { cohort: this.cohort, student: newStudentList };
    }
    removeStudentFromCohort(firstName, lastName) {
        const studentName = firstName + ' ' + lastName;

        const check = this.checkStudentDistinct(studentName);
        console.log('check ', check);
        if (!check.studentDistinct) {

            this.cohort[check.cohortName].splice(check.index, 1);
            console.log("I'm  here", this.cohort[check.cohortName]);
        }

        return this.cohort;
    }
    checkStudentDistinct(studentName) {
        console.log('*******************************************************************');
        const allStudent = this.cohort;
        const cohortKeys = Object.keys(this.cohort);
        let pointerCohort;
        let index;
        let studentDistinct = true;


        //for (let i = 0; i < listOfStudent.length; i++) {
        studentDistinct = true;
        const result = cohortKeys.forEach(element => {
            //console.log('allStudent ',element, allStudent[element], typeof element);
            const studentInCohort = allStudent[element];

            for (let j = 0; j < studentInCohort.length; j++) {
                //console.log('studentInCohort ', studentInCohort[j]);
                if (studentInCohort[j].name === studentName) {
                    studentDistinct = false;
                    pointerCohort = element;
                    index = j;

                    break;
                }
            }
        });
        return { studentDistinct: studentDistinct, cohortName: pointerCohort, index: index };
    }

}




module.exports = Cohort

const myCohort = new Cohort();
console.log(myCohort.addCohort());
console.log(myCohort.addCohort());
const result = myCohort.searchCohortByName("Cohort1");
console.log('result ', result, typeof result);
//console.log(myCohort.serchCohortByName("Cohort100"));
console.log('cohort2', myCohort.removeCohortByName("Cohort2"));
console.log('cohort100', myCohort.removeCohortByName("Cohort100"));



