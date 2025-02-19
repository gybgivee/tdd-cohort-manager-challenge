const Cohort = require("../src/cohort.js");
/*cohort :  [ COHORT1: {studentList:[]}, COHORT2: {studentList:[]} ] */ 
describe("Cohort Test:", () => {
    let myCohort;

    beforeEach(() => {
        myCohort = new Cohort();
    });

    it("Add Cohort", () => {
        const expected = "COHORT1"
        const result = myCohort.addCohort();
        expect(result[0]).toEqual(expected);
    });
    it("Add 2 Cohort", () => {
        const expected = "COHORT2"
        myCohort.addCohort();
        const result = myCohort.addCohort();
        expect(result[1]).toEqual(expected);
    });
    it("Get Student List by Cohort name",  () => {
      //this will return empty array because student List haven't been added to cohort 
        const expected = []
        const cohort1=myCohort.addCohort();
        const cohort2=myCohort.addCohort();
        const result = myCohort.searchCohortByName("Cohort1");
        //console.log('result In test:',result,cohort1,cohort2);
        expect(Object.values(result)).toEqual(expected);
      });
      
      it("Get Cohort by non existing name",  () => {
        const expected = 'Fail to search : cohort name not found';
        const cohort1=myCohort.addCohort();
        const cohort2=myCohort.addCohort();
        const result = myCohort.searchCohortByName("Cohort100");
      
        expect(result).toEqual(expected);
      });
      it("Remove Cohort by name",  () => {
       const expected = {}
        myCohort.addCohort();
        myCohort.addCohort();
        const result = myCohort.searchCohortByName("Cohort1");
        console.log('result In Remove Cohort by name test:',result);
        expect(result).toEqual(expected);
      });
      it("Remove Cohort by non existing name",  () => {
        const expected ='Fail to search : cohort name not found';
        myCohort.addCohort();
        myCohort.addCohort();
        const result = myCohort.searchCohortByName("Cohort100");
        console.log('result In non existing name test:',result);
        expect(result).toEqual(expected);
      });

  
});