let resu = document.getElementById("res-el")

function Add() {
    let num1 = parseFloat(document.getElementById("fnum").value)
    let num2 = parseFloat(document.getElementById("snum").value)
    resu.textContent = num1 + num2
}
function Sub() {
    let num1 = parseFloat(document.getElementById("fnum").value)
    let num2 = parseFloat(document.getElementById("snum").value)
    resu.textContent = num1 - num2
}
function Mul() {
    let num1 = parseFloat(document.getElementById("fnum").value)
    let num2 = parseFloat(document.getElementById("snum").value)
    resu.textContent = num1 * num2
}
function Div() {
    let num1 = parseFloat(document.getElementById("fnum").value)
    let num2 = parseFloat(document.getElementById("snum").value)
    resu.textContent = num1 / num2
}
