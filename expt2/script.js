function makeTableFor() {
    let num = document.getElementById("num").value;
    let out = "";

    for (let i = 1; i <= 10; i++) {
        out += num + " x " + i + " = " + (num * i) + "<br>";
    }

    document.getElementById("res").innerHTML = out;
}

function makeTableWhile() {
    let num = document.getElementById("num").value;
    let out = "";
    let i = 1;

    while (i <= 10) {
        out += num + " x " + i + " = " + (num * i) + "<br>";
        i++;
    }

    document.getElementById("res").innerHTML = out;
}

function makeTableDoWhile() {
    let num = document.getElementById("num").value;
    let out = "";
    let i = 1;

    do {
        out += num + " x " + i + " = " + (num * i) + "<br>";
        i++;
    } while (i <= 10);

    document.getElementById("res").innerHTML = out;
}
