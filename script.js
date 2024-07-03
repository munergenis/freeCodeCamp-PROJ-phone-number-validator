const inputEl = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const resultsDiv = document.getElementById("results-div")

const checkNumber = () => {
  const number = inputEl.value

  if (!number) {
    alert("Please provide a phone number")
    return
  }

  resultsDiv.textContent = validateNumber(number)
    ? `Valid US number: ${number}`
    : `Invalid US number: ${number}`
}

const validateNumber = (num) => {
  const regex = /^(1)?(\s|-)?(\(([0-9]){3}\)|([0-9]){3})(\s|-)?([0-9]){3}(\s|-)?([0-9]){4}$/

  return regex.test(num)
}

const clearUI = () => {
  inputEl.value = ""
  resultsDiv.textContent = ""
}

checkBtn.addEventListener("click", checkNumber)
clearBtn.addEventListener("click", clearUI)