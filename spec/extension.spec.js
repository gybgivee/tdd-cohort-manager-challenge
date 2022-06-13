const Student = require("../src/student.js");
const Cohort = require("../src/cohort.js");

describe("Cohort Test:", () => {
    let myStudent, myCohort;

    beforeEach(() => {
        myStudent = new Student();
        myCohort = new Cohort();
    });

    it("Set Student to Cohort", () => {
        const expected =
            {
                COHORT1: [
                    {
                        id: 1,
                        name: 'Mochi foote',
                        github: 'github.com/mochi',
                        email: 'mochi@gmail.com'
                    },
                    {
                        id: 2,
                        name: 'Marty foote',
                        github: 'github.com/Marty',
                        email: 'marty@gmail.com'
                    },
                    {
                        id: 3,
                        name: 'Mia foote',
                        github: 'github.com/mia',
                        email: 'mia@gmail.com'
                    },
                    {
                        id: 4,
                        name: 'Maew foote',
                        github: 'github.com/maew',
                        email: 'maew@gmail.com'
                    }
                ]

            }

        const cohort1 = myCohort.addCohort();
        myStudent.addStudent('Mochi', 'foote', 'github.com/mochi', 'mochi@gmail.com')
        myStudent.addStudent('Marty', 'foote', 'github.com/Marty', 'marty@gmail.com')
        myStudent.addStudent('Mia', 'foote', 'github.com/mia', 'mia@gmail.com')
        myStudent.addStudent('Maew', 'foote', 'github.com/maew', 'maew@gmail.com');
        const result = myCohort.setStudentToCohort(myStudent, cohort1[0]);
        //const updateStudentList = result.student;
        const updatedCohort = result.cohort;
        console.log('updatedCohort ', updatedCohort);

        expect(Object.assign(updatedCohort)).toEqual( jasmine.objectContaining(expected));
    });
    
    it("Remove Student from Cohort", () => {
        const expected =
        {
            COHORT1: [
                {
                    id: 1,
                    name: 'Mochi foote',
                    github: 'github.com/mochi',
                    email: 'mochi@gmail.com'
                },
                {
                    id: 2,
                    name: 'Marty foote',
                    github: 'github.com/Marty',
                    email: 'marty@gmail.com'
                },
                {
                    id: 3,
                    name: 'Mia foote',
                    github: 'github.com/mia',
                    email: 'mia@gmail.com'
                }
            ]

        }
              
        const cohort1 = myCohort.addCohort();
        myStudent.addStudent('Mochi', 'foote', 'github.com/mochi', 'mochi@gmail.com')
        myStudent.addStudent('Marty', 'foote', 'github.com/Marty', 'marty@gmail.com')
        myStudent.addStudent('Mia', 'foote', 'github.com/mia', 'mia@gmail.com')
        myStudent.addStudent('Maew', 'foote', 'github.com/maew', 'maew@gmail.com');
        myCohort.setStudentToCohort(myStudent, cohort1[0]);
        const result =myCohort.removeStudentFromCohort('Maew', 'foote')
        expect(result).toEqual(jasmine.objectContaining(expected));
    });
    it("Remove Student from student list", () => {
        const expected = 
        {list:[
            {
              id: 1,
              name: 'Mochi foote',
              github: 'github.com/mochi',
              email: 'mochi@gmail.com'
            },
            {
              id: 2,
              name: 'Marty foote',
              github: 'github.com/Marty',
              email: 'marty@gmail.com'
            },
            {
              id: 3,
              name: 'Mia foote',
              github: 'github.com/mia',
              email: 'mia@gmail.com'
            }
        ]};
        
        const cohort1 = myCohort.addCohort();
        myStudent.addStudent('Mochi', 'foote', 'github.com/mochi', 'mochi@gmail.com')
        myStudent.addStudent('Marty', 'foote', 'github.com/Marty', 'marty@gmail.com')
        myStudent.addStudent('Mia', 'foote', 'github.com/mia', 'mia@gmail.com')
        myStudent.addStudent('Maew', 'foote', 'github.com/maew', 'maew@gmail.com');
        myCohort.setStudentToCohort(myStudent, cohort1[0]);
        const result =myStudent.removeStudentFromName('Maew', 'foote');
        expect(result).toEqual(expected.list);
    });

});