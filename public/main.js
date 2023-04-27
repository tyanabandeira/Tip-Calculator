const billAmountInput = document.getElementById("billAmount")
const tipRangeInput = document.getElementById("tipRange")
const calculateButton = document.getElementById("calculateButton").addEventListener("click", calculateBill)
const totalBill = document.querySelector(".totalBill")

//calculateBill function 
function calculateBill(){
const billAmount = parseFloat(billAmountInput.value)
const tipPercentage = parseFloat(tipRangeInput.value)
}

