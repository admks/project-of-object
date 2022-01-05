
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
const special = "* $ & %".split(" ");
let alphaArr=alpha.split(" ");
let yeniDizi=[...numeric,...alphaArr];
console.log(yeniDizi);

//STEP-1
function userId(params) {
    let user = "";
    for (let i = 0; i <params; i++) {
        
    let rndm=Math.floor(Math.random() * yeniDizi.length);
    user +=yeniDizi[rndm];
    if (typeof yeniDizi[rndm] == "number") {
        user +="-";
        i++
        
    }if (user.charAt(params)==="-") {
      user
    }

    }
return user;
    
}

console.log(userId(10));

//STEP 2







//STEP 3




//STEP 4
givenUnwanted = "3 , * , j , q , z"


