var billAmt = document.querySelector("#bill-amt");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];
var given = cashGiven.value;
var bill = billAmt.value;

checkButton.addEventListener("click", function validBillCashAmt(){
    message.style.display = "none";
    if (billAmt.value > 0) {
        if (given >= bill) {
            var amountReturn = cashGiven.value - billAmt.value;
            calculateChange(amountReturn);
        } else {
            showMessage("Do you wanna wash plates");
        }
    }else{
        showMessage("Invalid Bill Amount");
    };
});

function calculateChange(amountReturn) {
    for (let i=0; i<availableNotes.length; i++){
        var numberOfNotes = Math.trunc(
            amountReturn / availableNotes[i]);
        if (numberOfNotes >= 0){
        amountReturn =amountReturn % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
        }else{
            showMessage("The cash provided should atleast be equal to the bill amount")
        };
};
};
function showMessage(msg) {
    message.style.display= "block";
    message.innerText = msg;
};
