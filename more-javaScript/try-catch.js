function checkAge(){
    let ageField = document.getElementById('age');
    let ageText = ageField.value;
    console.log(ageText)
    let errorTag = document.getElementById('error')
    
    try{
        // console.log(bBaria)
        let age = parseInt(ageText);
        if(isNaN(age)){
            throw `Please enter a number`
        }
        else if(age<18){
            throw `Baccha kacca not Allow`
        }
        errorTag.innerHTML = '';
    }
    catch(err){
        console.log('Error:', err)
        errorTag.innerHTML = 'Error:' + err
    }
    finally{
        console.log('All done')
    }
    // console.log(9999) 
}