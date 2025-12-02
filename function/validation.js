function fullName(name1,name2){
    if(typeof name1 !=='string' && typeof name2 !=='string'){
        return `Please Submit a name`
    }
    return `${name1} ${name2}`
}

let name  = fullName('Sabbir','Hasan');
console.log(name)