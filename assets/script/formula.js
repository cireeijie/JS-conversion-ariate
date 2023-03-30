function calcSpeed(num1, num2) {
    return num1 / num2;
}

function calcDistance(num1, num2) {
    return num1 * num2;
}

function calcTime(num1, num2) {
    return num1 / num2;
}

function toKmh(mps) {
    return mps * 3.6;
}

function toMh(mps) {
    return mps * 2.237;
}

function toKm(meters) {
    return meters / 1000;
}

function toMi(meters) {
    return meters / 1609;
}

function toMinutes(sec) {
    return sec / 60;
}

function toHours(sec) {
    return sec / 3600;
}

function display() {
    let calc = document.getElementById("calculate").value;
    let inp1 = parseFloat(document.getElementById("inp1").value);
    let inp2 = parseFloat(document.getElementById("inp2").value);

    if(calc === 'Speed') {
        document.getElementById("firstInput").innerHTML = "Distance(m)";
        document.getElementById("secondInput").innerHTML = "Time(s)";

        if(isNaN(calcSpeed(inp1, inp2))) {
            document.getElementById("result").innerHTML = "0";
        }
        else {
            document.getElementById("result").innerHTML = calcSpeed(inp1, inp2).toFixed(2) + ' m/s';
        }
    }
    else if(calc === 'Distance') {
        document.getElementById("firstInput").innerHTML = "Speed(m/s)";
        document.getElementById("secondInput").innerHTML = "Time(s)";

        if(isNaN(calcDistance(inp1, inp2))) {
            document.getElementById("result").innerHTML = "0";
        }
        else {
            document.getElementById("result").innerHTML = calcDistance(inp1, inp2).toFixed(2) + ' m';
        }
    }
    else if(calc === 'Time') {
        document.getElementById("firstInput").innerHTML = "Distance(m)";
        document.getElementById("secondInput").innerHTML = "Speed(s)";

        if(isNaN(calcTime(inp1, inp2))) {
            document.getElementById("result").innerHTML = "0";
        }
        else {
            document.getElementById("result").innerHTML = calcTime(inp1, inp2).toFixed(2) + ' s';
        }
    }
    else {
        document.getElementById("result").innerHTML = "Please select unit first!";
    }
}