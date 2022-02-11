// function doubleIt(num){
//     const result = num * 2; 
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);


function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear input feild 
    inputField.value = '';
    return inputAmount;
}
function updateTotalValue(inputAddres,amount){
    // debugger;
    const totalElement = document.getElementById(inputAddres);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance(){
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    return previousTotalBalance;
}
function updateBalance(amount,isAdd){
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalance = getCurrentBalance();
    if(isAdd == true){
        totalBalance.innerText = previousTotalBalance + amount; 
    }
    else{
        totalBalance.innerText = previousTotalBalance - amount; 

    }
}

//Handle DEposite Button
document.getElementById('deposite-button').addEventListener('click',function(){
    const depositeAmount = getInputValue('deposite-input');
    if(depositeAmount > 0 ){
    updateTotalValue('deposite-total',depositeAmount);
    updateBalance(depositeAmount,true);
    }
})

// Handle Withdraw Button
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount <= currentBalance){
        updateTotalValue('withdraw-total',withdrawAmount);
        updateBalance(withdrawAmount,false);
    }
})