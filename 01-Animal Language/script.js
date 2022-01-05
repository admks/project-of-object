//Convert any text to whale language! 

let input = "turpentine and turtles";
let arr = input.toUpperCase().split("");
let emptyArr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "I" || arr[i] === "E" || arr[i] === "O" || arr[i] === "A" || arr[i] === "U" || arr[i] === "Y")  {
        emptyArr.push(arr[i])

        if (arr[i] ==="E" || arr[i] === "U") {
            emptyArr.push(arr[i])
            
        }

    }

}

console.log(emptyArr.join(""))


