function Student(name, surname, birthDate, assessments = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.assessments = assessments;
    // this.attendance = new Array(25).fill(true);
    this.attendance = [];
}

Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthDate;
}

Student.prototype.getAverage = function () {
    if (this.assessments.length === 0) {
        return 0;
    }
    const total = this.assessments.reduce((sum, mark) => sum + mark, 0);
    return total / this.assessments.length;
}

Student.prototype.present = function () {
    if (this.attendance.length < 25) {
        this.attendance.push(true);
    } else {
        console.log('Ліміт відміток відвідувань перевищено!');
    }
    return this;
}

Student.prototype.absent = function () {
    if (this.attendance.length < 25) {
        this.attendance.push(false);
    } else {
        console.log('Ліміт відміток відвідувань перевищено!');
    }
    return this;
}

Student.prototype.summary = function () {
    const averageGrade = this.getAverage();
    const attendanceCount = this.attendance.filter(status => status === true).length;
    const attendanceRate = attendanceCount / this.attendance.filter(status => status !== true).length;

    if (averageGrade > 90 && attendanceRate > 0.9) {
        return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
        return "Добре, але можна краще";
    } else {
        return "Редиска";
    }
}

const student1 = new Student('exampleName1', 'exampleSurname1', 1999, [100, 100, 100, 100]);
const student2 = new Student('exampleName2', 'exampleSurname2', 1998, [0, 2]);

student1.present().absent().present()
console.log(student1.summary());


console.log(student2.summary()); 

for (let i = 0; i < 30; i++) {
    student2.absent();
}
console.log(student2.attendance);