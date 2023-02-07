//problem no: 1;
//Definition:mindGame function explain how to operate operators like +,-,*,/ etc.

function mindGame(number){
    //validation;
    if(typeof(number) != "number" || number <= 0 || typeof(number)== ""){
        return "Please enter a valid number !!";
    }
    let sum = 0;
    sum = sum + (number * 3 + 10) / 2 - 5;
    return sum;
   
}

// const result  = mindGame(33);
// console.log(result);



//problem : 2;

//Definition:evenOdd function find out which string containing odd number or even number.

function evenOdd(string){
    //validation;
    if(typeof(string) !="string" || string.length ==""){
        return "Enter a valid string !!";
    }
    if(string.length % 2 == 1){
        return "Odd";
    }else{
        return "Even";
    }
}

// const result = evenOdd("chatgpt");
// console.log(result);



//problem-3:

//Definition:isLGSeven function functionality operation like -,* etc.

function isLGSeven(number){
    
    //validation;
    if(typeof(number) != "number" || typeof(number)== ""){
        return "Please enter a valid number !!";
    };

    let fixedNumber = 7;
    let difference =(number - fixedNumber);
   

    if(difference < 7){
       
        return difference =(number - fixedNumber);
        
    }else{
        
        return number * 2;
    }
    
}
 
// const result = isLGSeven(-15);
// console.log(result);



//problem-4:

//Definition:findingBadData find out data from an array.

function findingBadData(numbers) {
    
    //validation;
    if(!Array.isArray(numbers)){
        return "Please enter a valid array !!";
    };

    let goodData_count = 0;
    let badData_count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            badData_count++;
        }
        else {
            continue;
        }
            
    }

    return badData_count;
}

// const result = findingBadData([-1, -2,-3]);
// console.log(result);



//problem-5:

//Definition:gemsToDiamond function convert a unit to another unit.

function gemsToDiamond(num1,num2,num3) {
    //validation;
    if(typeof(num1 || num2 || num3) != "number" || (num1 || num2 || num3) <= 0 || typeof(num1 || num2 || num3)== ""){
        return "Please enter a valid number !!";
    };

    let firstFriendsGemNumber = num1;
    let firstFriendsConvertedDiamondNumber = firstFriendsGemNumber * 21;
    

    let secondFriendsGemNumber = num2;
    let secondFriendsConvertedDiamondNumber = secondFriendsGemNumber * 32;
    

    let thirdFriendsGemNumber = num3;
    let thirdFriendsConvertedDiamondNumber = thirdFriendsGemNumber * 43;
    

    let totalDiamondNumber = firstFriendsConvertedDiamondNumber + secondFriendsConvertedDiamondNumber + thirdFriendsConvertedDiamondNumber;
    

    if(totalDiamondNumber > 2000){
        let restDiamondNumber = totalDiamondNumber -2000;
        return restDiamondNumber;
    }
    else{
        return totalDiamondNumber;
    }
}

const result = gemsToDiamond(-1,-1,-1);
console.log(result);



