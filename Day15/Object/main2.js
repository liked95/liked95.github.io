const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]


// 1. Viết function tính thứ hạng trung bình của cả lớp

const averageGrade = (array) => {
    return array.reduce((total, student) => total + student.grade, 0)/array.length
}
console.log(averageGrade(grades))

// 2. Viết function tính thứ hạng trung bình của nam trong lớp

const averageMaleGrade = (array) => {
    return averageGrade(array.filter(student => student.sex === 'M'))
}
console.log(averageMaleGrade(grades))

// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp

const averageFemaleGrade = (array) => {
    return averageGrade(array.filter(student => student.sex === 'F'))
}
console.log(averageFemaleGrade(grades))

// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp


// Global func
var highestGrade = (array) => {
    return array.sort((student1, student2) => student2.grade-student1.grade)[0]
}



const highestMaleGrade = (array) => {
    return highestGrade(array.filter(student => student.sex === 'M'))
}
console.log(highestMaleGrade(grades))



// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp

const highestFemaleGrade = array => {
    return highestGrade(array.filter(student => student.sex === 'F'))
}
console.log(highestFemaleGrade(grades))
// 6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp

// global func

var lowestGrade = (array) => {
    return array.sort((student1, student2) => student1.grade-student2.grade)[0]
}

const lowestMaleGrade = array => {
    return lowestGrade(array.filter(student => student.sex === 'M'))
}

console.log(lowestMaleGrade(grades))
// 7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
const lowestFemaleGrade = array => {
    return lowestGrade(array.filter(student => student.sex === 'F'))
}
console.log(lowestFemaleGrade(grades))
// 8. Viết function thứ hạng cao nhất của cả lớp
console.log(highestGrade(grades))
// 9. Viết function thứ hạng thấp nhất của cả lớp
console.log(lowestGrade(grades))
// 10.Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
const filterFemale = array => {
    return array.filter(student => student.sex === 'F')
}
console.log(filterFemale(grades))
// 11.Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const ascendingNames = array => {
    return array.sort((student1, student2) => student1.name.localeCompare(student2.name, 'en'))
}

console.log(ascendingNames(grades))
// 12.Viết function sắp xếp thứ hạng học viên theo chiều giảm dần

const descGrades = array => {
    return array.sort((student1, student2) => student2.grade-student1.grade)
}
console.log(descGrades(grades))
// 13.Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const filterBySexAndInitial = (array, sex, initial) => {
    return array.filter(student => student.sex === sex).filter(student => student.name[0] === initial)
}
console.log(filterBySexAndInitial(grades, 'F', 'J'))
// 14.Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
const topGradeStudents = (array, number) => {
    return array.sort((student1, student2) => student2.grade-student1.grade).slice(0, number)
}
console.log(topGradeStudents(grades, 5))