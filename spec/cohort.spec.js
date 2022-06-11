const Cohort = require("../src/cohort.js");

describe("Cohort Test:", () => {
    let myCohort;

    beforeEach(() => {
        myCohort = new Cohort();
    });

    it("Add Cohort", () => {
        const expected = "COHORT1"
        const result = myCohort.addCohort();
        expect(result).toEqual(expected);
    });
    it("Add 2 Cohort", () => {
        const expected = "COHORT2"
        myCohort.addCohort();
        const result = myCohort.addCohort();
        expect(result).toEqual(expected);
    });
    it("Get Cohort by name",  () => {
        const expected = "   studentList   {}"
        myCohort.addCohort();
        myCohort.addCohort();
        const result = myCohort.serchCohortByName("Cohort1");
        expect(result).toEqual(expected);
      });
      it("Get Cohort by non existing name",  () => {
        const expected = "[]"
        myCohort.addCohort();
        myCohort.addCohort();
        const result = myCohort.serchCohortByName("Cohort100");
        expect(result).toEqual(expected);
      });
      it("Remove Cohort by name",  () => {
        const expected = "[ COHORT1: {} ]"
        myCohort.addCohort();
        myCohort.addCohort();
        const result = myCohort.serchCohortByName("Cohort1");
        expect(result).toEqual(expected);
      });
      it("Remove Cohort by non existing name",  () => {
        const expected = "[ COHORT1: {}, COHORT2: {} ]";
        myCohort.addCohort();
        myCohort.addCohort();
        const result = myCohort.serchCohortByName("Cohort100");
        expect(result).toEqual(expected);
      });

  
});