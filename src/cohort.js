class Cohort {

    constructor(cohort = [], limit = 24, id = 1) {
        this.cohort = cohort;
        this.limit = limit;
        this.id = id;
    }
    getCohort() {
        return this.cohort;
    }
    setCohort() {
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

            console.log('cohortKeys ', cohortKeys[0], 'Student in cohort', allStudent[cohortKeys[0]].length);
            console.log('cohortKeys ', cohortKeys[1], 'Student in cohort', allStudent[cohortKeys[1]]);
            for (let i = 0; i < listOfStudent.length; i++) {
                studentDistinct =true;
                const result = cohortKeys.forEach(element => {
                    //console.log('allStudent ',element, allStudent[element], typeof element);
                    const studentInCohort = allStudent[element];
                    console.log('studentInCohort ',studentInCohort);
                    for (let j = 0; j < studentInCohort.length; j++) {
                        if (studentInCohort[j].name === listOfStudent[i].name) {
                           studentDistinct=false;
                           break;
                        }
                    }
                });
                if(studentDistinct){
                    console.log('------------------------------------------------------------');
                    updateStudent.push(listOfStudent[i]);
                   
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


}
module.exports = Cohort
/*
const myCohort = new Cohort();
console.log(myCohort.setCohort());
console.log(myCohort.setCohort());
myCohort.serchCohortByName("Cohort1");
myCohort.removeCohortByName("Cohort3");
*/
