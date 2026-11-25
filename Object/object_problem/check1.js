let tourPackage1 ={
    willVisit :['cox','bandorban','khagrachori','kushtia'],
    duration: '3 days',
    budget: 25000,
}
let tourPackage2 ={
    willVisit :['cox','bandor','khag','kush'],
    duration: '3 days',
    budget: 25000,
}

// let packages = [tourPackage1,tourPackage2];

// for(let package of packages){
//     if(package.willVisit.includes('kushtia')){
//         console.log(`this ${package} i will go`)
//     }
// }
let packages = [
    {name:'package1', data:tourPackage1},
    {name:'package2', data:tourPackage2}
]
for(let package of packages){
    if(package.data.willVisit.includes('kushtia')){
        console.log(`${package.name} I will go`)
    }
}