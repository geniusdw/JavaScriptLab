function compareStrings() {
    let string1 = document.getElementById("str1").value;
    let string2 = document.getElementById("str2").value;

    let out = "";

    if (string1 === string2) {
        out += "Strict Equality (===): Equal<br>";
    } else {
        out += "Strict Equality (===): Not Equal<br>";
    }

    if (string1.length > string2.length) {
        out += "Length Comparison: string1 is longer<br>";
    } else if (string1.length < string2.length) {
        out += "Length Comparison: string2 is longer<br>";
    } else {
        out += "Length Comparison: Both are same length<br>";
    }

    let cmp = string1.localeCompare(string2);
    if (cmp < 0) {
        out += "localeCompare: string1 comes before string2";
    } else if (cmp > 0) {
        out += "localeCompare: string1 comes after string2";
    } else {
        out += "localeCompare: Both are equal";
    }

    document.getElementById("res").innerHTML = out;
}
