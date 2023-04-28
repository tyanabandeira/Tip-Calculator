const billAmountInput = document.getElementById("billAmount")
const tipRangeInput = document.getElementById("tipRange")
const calculateButton = document.getElementById("calculateButton").addEventListener("click", calculateBill)
const totalBill = document.querySelector(".totalBill")
const count = document.querySelector(".count")

tipRangeInput.defaultValue = 0 
count.innerText = tipRangeInput.value 
tipRangeInput.addEventListener("input", (e) => count.innerText = e.target.value)

//Calculate the bill
function calculateBill(){
const billAmount = Number(billAmountInput.value)
const tipPercentage = tipRangeInput.value / 100
const tipAmount = billAmount * tipPercentage
const totalAmount = billAmount + tipAmount 
totalBill.innerText = totalAmount
}

//Tip Range 

