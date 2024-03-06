const input = document.querySelector("input")
var equacao = ""
 
function clearInput() {
    input.value = ""
    equacao = ""
}

function append(text) {
    equacao += text 
    input.value = equacao
}

function calc() {
  try {
      var res = eval(equacao)
      input.value = res
      equacao = res
  } catch (error) {
      console.error(error)
      imput.value = "Error!!"
  }
  
}