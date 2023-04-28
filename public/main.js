
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
console.log(tipRangeInput.value)
const tipPercentage = tipRangeInput.value / 100
const tipAmount = billAmount * tipPercentage
const totalAmount = billAmount + tipAmount 
totalBill.innerText = totalAmount
}

//Tip Range 




const tip =  document.querySelector('#tip')
const displayText = document.querySelector('.current-number')
displayText.innerText = tip.value
document.querySelector('.btn').addEventListener('click', calculatebtn)
tip.addEventListener('input', (e) => displayText.innerText = e.target.value)


function calculatebtn(){
const total = document.querySelector('.total')
const billAmount = Number(document.querySelector('.form-control').value)
if(!billAmount){
  total.innerText = 'Enter bill amount'
  return 
}

const newTip = Number(tip.value)

console.log({billAmount, newTip})
  // billAmount * tip 
  total.innerText = `Total  ${billAmount + (billAmount * (newTip/100))}`

}

