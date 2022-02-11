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

//Handle DEposite Button
document.getElementById('deposite-button').addEventListener('click',function(){
    //get deposite input
    const depositeAmount = getInputValue('deposite-input');
    // get current deposite
    updateTotalValue('deposite-total',depositeAmount);
    //update total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousTotalBalance + depositeAmount; 
})

// Handle Withdraw Button
document.getElementById('withdraw-button').addEventListener('click',function(){
    //get withdraw input
    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalValue('withdraw-total',withdrawAmount);
    //Update total Balance 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousTotalBalance - withdrawAmount;
})