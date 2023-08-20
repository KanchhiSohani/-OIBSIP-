function tempConvert() {
    let inputDegree = document.getElementById('degree');
    let type1 = document.getElementById('inputTemp');
    let type2 = document.getElementById('outputTemp');
    let result = document.getElementById('result');
    let string = "";

    inputVal = inputDegree.value;

    if (type1.value == "Celcius" && type2.value == "Celcius") {
        let cel = (parseFloat(Number(inputVal)) * 1).toFixed(3) + '\u00B0C';
        result.value = cel;

    }

    else if (type1.value == "Celcius" && type2.value == "Fahrenheit") {
        let fah = (parseFloat((Number(inputVal) * 9 / 5) + 32)).toFixed(3)+'\u00B0F';
        result.value = fah;


    }
    else if (type1.value == "Celcius" && type2.value == "Kelvin") {
        let kel = (parseFloat(Number(inputVal) + 273.15)).toFixed(3)+'K';
        result.value = kel;


    }
    else if (type1.value == "Fahrenheit" && type2.value == "Fahrenheit") {
        let fah = (parseFloat(Number(inputVal)) * 1).toFixed(3)+'\u00B0F';
        result.value = fah;


    }
    else if (type1.value == "Fahrenheit" && type2.value == "Celcius") {
        let cel = (parseFloat(((Number(inputVal)) - 32) * 5 / 9)).toFixed(3)+'\u00B0C';
        result.value = cel;

    }
    else if (type1.value == "Fahrenheit" && type2.value == "Kelvin") {
        let kel = (parseFloat(((Number(inputVal)) - 32) * 5 / 9 + 273.15)).toFixed(3)+'K';
        result.value = kel;

    }
    else if (type1.value == "Kelvin" && type2.value == "Kelvin") {
        let kel = (parseFloat((Number(inputVal))) * 1).toFixed(3)+'K';
        result.value = kel;
    }

    else if (type1.value == "Kelvin" && type2.value == "Celcius") {
        let cel = (parseFloat((Number(inputVal)) - 273.15)).toFixed(3)+'\u00B0C';
        result.value = cel;

    }
    else if (type1.value == "Kelvin" && type2.value == "Fahrenheit") {
        let fah = (parseFloat(((Number(inputVal)) - 273.15) * 9 / 5 + 32)).toFixed(3)+'\u00B0F';
        result.value = fah;

    }
    else {
        alert("Enter Valid Data");
    }



}


function reset() {
    let inputDegree = document.getElementById('degree');
    let result = document.getElementById('result');
    inputDegree.value = 0;
    result.value = "Converted Temperature";
}