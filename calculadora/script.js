function sumar (){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resut = parseFloat(num1) + parseFloat(num2);
    document.getElementById("result").innerHTML = `Resultado: ${resut}`;
}
function restar (){
     const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resut = parseFloat(num1) - parseFloat(num2);
    document.getElementById("result").innerHTML = `Resultado: ${resut}`;
}
 function multiplicar (){
 const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resut = parseFloat(num1) * parseFloat(num2);
    document.getElementById("result").innerHTML = `Resultado: ${resut}`;
}
