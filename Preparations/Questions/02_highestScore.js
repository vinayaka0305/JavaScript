// function highPerformers(students){
  
//     const studentsWithAverage = students.map(mapToStudentsWithAverage)

//     // console.log(studentsWithAverage)

//     const highestScores = studentsWithAverage.filter(isHighScorer)

//     return highestScores;
// }

// const calculateAverage = (scores)=>{
//     const total = scores.reduce((acc,int)=>{
//         return acc + int;
//     })

//     return total / scores.length;
// }

// const mapToStudentsWithAverage = (student)=>{
//     const average = calculateAverage(student.scores)
//     return {name:student.name, average : average}
// }

// const isHighScorer = (student)=>{
//   return student.average > 90
// }

let students = [
    { name: "Ram", scores: [80, 95, 60] },
    { name: "Mohan", scores: [85, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [95, 90, 94] },
  ];
  
function highPerformers(students){
    let calAverage = students.map(student=>{
        console.log(student);
        let average = student.scores.reduce((acc,int)=>acc+int,0) / student.scores.length;
        console.log(average);
        return {name: student.name, average :average};
    })
    // console.log(calAverage)
    const highestScore = calAverage.filter((student)=>{
        return student.average > 90;
    })
    console.log(highestScore)
    return highestScore;
}

let ans = highPerformers(students)
ans.forEach((student)=>{
    console.log(student.name);
    console.log(student.average);
})