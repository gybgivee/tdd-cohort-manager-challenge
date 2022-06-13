const Student = require("../src/student.js");

describe("Student Test:", () => {
  let myStudent;

  beforeEach(() => {
    myStudent = new Student();
  });

  it("Add Student", () => {
    const expected =
      [{
          id: 1,
          name: 'Mochi foote',
          github: 'github.com/mochi',
          email: 'mochi@gmail.com'
        }]
    const result = myStudent.addStudent('Mochi', 'foote', 'github.com/mochi', 'mochi@gmail.com');
    expect(result).toEqual(expected);
  });
  it("Add Student", () => {
    const expected =
      [{
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
      }]
    myStudent.addStudent('Mochi', 'foote', 'github.com/mochi', 'mochi@gmail.com');
    const result = myStudent.addStudent('Marty', 'foote', 'github.com/Marty', 'marty@gmail.com');
    expect(result).toEqual(expected);
  });
  it("Get Student by name", () => {
    const expected =
      [{
          id: 1,
          name: 'Mochi foote',
          github: 'github.com/mochi',
          email: 'mochi@gmail.com'
        }]
    myStudent.addStudent('Mochi', 'foote', 'github.com/mochi', 'mochi@gmail.com');
    const result = myStudent.searchStudentByName('Mochi', 'foote');
    expect(result).toEqual(expected[0]);
  });
  it("Get Student by non existing name", () => {
    const expected = 'Student not found';
    const result = myStudent.searchStudentByName('Uki','Sushi');
    console.log('result non :',result);
    expect(result).toEqual(expected);
  });
  it("Remove Student by name", () => {
    const expected = 
    [{
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
    myStudent.addStudent('Mochi', 'foote', 'github.com/mochi', 'mochi@gmail.com')
    myStudent.addStudent('Marty', 'foote', 'github.com/Marty', 'marty@gmail.com')
    myStudent.addStudent('Mia', 'foote', 'github.com/mia', 'mia@gmail.com')
    myStudent.addStudent('Maew', 'foote', 'github.com/maew', 'maew@gmail.com');
    const result = myStudent.removeStudentFromName('Maew', 'foote');
    expect(result).toEqual(expected);
  });
  it("Remove Student by non existing name", () => {
    const expected ='Fail to remove : student name not found';
    const result = myStudent.removeStudentFromName('Maew', 'foote');
    console.log('Remove Student by non existing name ',result);
    expect(result).toEqual(expected);


  });


});