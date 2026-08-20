"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentResult = (student) => {
    const marks = student.marks;
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const avarage = totalMarks / marks.length;
    const result = avarage >= 40 ? "Passed" : "Failed";
    return {
        name: student.name,
        avarage: avarage,
        status: result,
    };
};
const student1 = {
    name: "Rafi",
    marks: [80, 75, 90, 85],
};
const student2 = {
    name: "Nabil",
    marks: [30, 35, 40, 25]
};
console.log(getStudentResult(student1));
console.log(getStudentResult(student2));
//# sourceMappingURL=getStudentResult.js.map