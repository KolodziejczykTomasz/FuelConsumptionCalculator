const btn = document.getElementById('btn');
const btnReset = document.getElementById('btnReset');
const display = document.getElementById('display');


function consumption() {
    const kmInput = parseFloat((document.getElementById('kmInput').value).replace(',', '.'))
    const fuelInput = parseFloat((document.getElementById('fuelInput').value).replace(',', '.'))
    const result = (((fuelInput / kmInput) * 100).toFixed(2)).replace(".", ",")

    if (kmInput > 0 && fuelInput > 0) {
        result
        document.getElementById('display').innerHTML = result + " l/100km";
    }

    else {
        alert("Enter the missing data or the value entered is not a number");
        document.getElementById('display').innerHTML = "Result";
    }

}

function reset() {
    kmInput.value = "";
    fuelInput.value = "";
    document.getElementById('display').innerHTML = "Result";
}

btn.addEventListener('click', consumption);
btnReset.addEventListener('click', reset);