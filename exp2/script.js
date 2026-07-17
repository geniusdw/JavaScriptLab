function makeTable() {
    let num = document.getElementById("num").value;
    let out = "";
    
    for (let i = 1; i <= 10; i++) {
        out += num + " x " + i + " = " + (num * i) + "<br>";
    }
    
    document.getElementById("res").innerHTML = out;
}
