interface Student {
  name: string;
  marks: number[];
}

interface Result {
  name: string;
  avarage: number;
  status: string;
}

const getStudentResult = (student: Student): Result => {
  const marks: number[] = student.marks;
  const totalMarks: number = marks.reduce((sum, mark) => sum + mark, 0);
  const avarage: number = totalMarks / marks.length;
  const result: string = avarage >= 40 ? "Passed" : "Failed";
  return {
    name: student.name,
    avarage: avarage,
    status: result,
  };
};

const student1: Student = {
    name: "Rafi",
    marks: [80, 75, 90, 85],
  };
const student2: Student = {
    name: "Nabil",
    marks: [30, 35, 40, 25]
};
console.log(getStudentResult(student1));
console.log(getStudentResult(student2));
