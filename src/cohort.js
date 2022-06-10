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
        //console.log('cohortName ', cohortName);


        return cohortName[0];
    }
    serchCohortByName(cohortName) {
        cohortName = cohortName.toUpperCase();
        let studentList = [];
        const result = this.cohort.hasOwnProperty(cohortName);
        console.log('Result : ', result);

        if (result) {
            studentList = this.cohort[cohortName];
            console.log('   studentList  ', studentList);
            return studentList;
        }
        console.log('Fail to search : cohort name not found');
        return studentList;
        //console.log('Result : ',result,studentList);


    }
    removeCohortByName(cohortName) {
        cohortName = cohortName.toUpperCase();

        //const keysInCohort = Object.keys(this.cohort);
        //console.log('keysInCohort ', keysInCohort);
        for (let i = 0; i < this.cohort.length; i++) {

            const key = Object.keys(this.cohort[i]);
            if (key === cohortName) {
                this.cohort.splice(i, 1);

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
        //console.log('isObjectEmpty ', isObjectEmpty);
        if (isObjectEmpty.length === 0) {
            //assign value to this cohort array by key
            this.cohort[cohortName] = listOfStudent;

        } else {
            console.log('check here');
            const allStudent = this.cohort;
            const cohortKeys = Object.keys(this.cohort);
            let updateStudent = [];
            let studentDistinct = true;

            for (let i = 0; i < listOfStudent.length; i++) {
                const check = this.checkStudentDistinct(listOfStudent[i].name);
                if (check.studentDistinct) {
                    console.log('------------------------------------------------------------');

                    updateStudent.push(listOfStudent[i]);
                    console.log('updateStudent ',updateStudent);
                }             
            }
           
            if (updateStudent.length > 0) {
                for (const iterator of updateStudent) {
                    this.cohort[cohortName].push(iterator)
                }
            } 
        }

        return this.cohort;
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
/*
const myCohort = new Cohort();
console.log(myCohort.addCohort());
console.log(myCohort.addCohort());
myCohort.serchCohortByName("Cohort1");
myCohort.removeCohortByName("Cohort3");
*/
