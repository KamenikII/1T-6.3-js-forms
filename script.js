// task 1
    let week = document.querySelector('#week')
    let selOption = week.options[week.selectedIndex]
    console.log(`Значение выбранной опции: ${selOption.value}; текст опции: ${selOption.text}.`)
    let sundayOption = new Option("Воскресенье", "sunday")
    week.append(sundayOption)
    sundayOption.selected = true



// task 2
function calc() {
    let num1 = Number(document.querySelector("#num1").value)
    let num2 = Number(document.querySelector("#num2").value)
    let operation = document.querySelector('#operation').value

    switch(operation){
        case '+': {
            console.log(num1+num2)
            break
        }
        case '-': {
            console.log(num1-num2)
            break
        }
        case '*': {
            console.log(num1*num2)
            break
        }
        case '/': {
            console.log(num1/num2)
            break
        }
        default: console.log('Input Error')
    }
}



// task 3
    let select = document.querySelector('#week2')
    let input = document.querySelector('#input')
    select.addEventListener('change', () => {
        let selOption = select.options[select.selectedIndex]
        input.value = selOption.text
        input.text = selOption.text
    })



// task 4
let form = document.querySelector('#form')
let usersArr = []
form.addEventListener('reset', sub => {
    if (form.password.value === form.passwordRepeat.value) { /*Сверка паролей для продолжения*/
        let name = form.username.value
        let email = form.email.value
        let password = form.password.value
        usersArr.push({name, email, password})
    }
    console.log(usersArr)
})



// task 5
let textArea = document.querySelector('#textarea')
textArea.addEventListener('change', () =>{
    localStorage.setItem('text', textArea.value)
})