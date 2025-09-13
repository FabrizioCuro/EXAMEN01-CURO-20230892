function calcular() {
    const num1 = document.getElementById('temperatura').value;
    const resultado = (parseInt(num1) -32)*5/9;
    return resultado;
}