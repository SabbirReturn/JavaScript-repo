let college = {
    name: 'Shahmokhdum College',
    location: 'Rajshahi',
    result :{
        gpa: 5,
        merit: ' Top'
    }
}
let dressCode = 'Dress';
college[dressCode] = 'White shirt, black pant';
let rest = college['result']['gpa']
rest = 6
console.log(rest)
// console.log(college)