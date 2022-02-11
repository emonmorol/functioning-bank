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


//Handle DEposite Button
document.getElementById('deposite-button').addEventListener('click',function(){
    //get deposite input
    const depositeAmount = getInputValue('deposite-input');
    
    // get current deposite
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = previousDepositeTotal + depositeAmount;

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

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    //Update total Balance 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = previousTotalBalance - withdrawAmount;

    // //Clear input field
    // withdrawInput.value = '';
})