let names = ['Sabbir','Hasan','Robin','Misu'];

let bigName = names.find(name=> name.length>4);
// console.log(bigName)


function expect(val){
    return{
       toBe: function(other){
            if(val === other){
                return true
            }
            else{
                return `Not Equal`
            }
        },
        notTobe: function(other){
            if(val !== other){
                return true;
            }
            else{
                return `Equal`
            }
        }
    }

}

let ans = expect(5).notTobe(6)
console.log(ans)