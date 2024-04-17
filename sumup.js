
let result = document.getElementById('result')
let display = document.getElementById('display')
let  input1= document.getElementById('input1')

let c = Math.random()* 10
let h = Math.ceil(c)
 
result.style.display = 'none'

result.innerHTML = h
display.innerHTML = input1.value

function random1() {
    result.style.display = 'block'  
    display.innerHTML = input1.value

    if (input1.value == h)  {
        alert('win')
    }
    else{
        alert('you lose')
    }
}

