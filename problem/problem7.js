let instructor = [
    {name :'Nodi', age:28, position:'Senior'},
    {name :'Akhi', age:26, position:'Junior'},
    {name :'Sabbir', age:30, position:'Senior'}
]

let output = instructor.filter(ins => ins.position ==='Senior').map(ins=> ins.name);
console.log(output)