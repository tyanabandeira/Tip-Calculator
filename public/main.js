

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
