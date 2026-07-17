// 1. Reverse String
function revStr() {
    let s = document.getElementById("str").value;
    let rev = s.split("").reverse().join("");
    document.getElementById("res").innerText = rev;
}

// 2. Replace Characters
function repStr() {
    let s = document.getElementById("str").value;
    let oldC = document.getElementById("oldChar").value;
    let newC = document.getElementById("newChar").value;
    
    // Replaces all occurrences of the character
    let replaced = s.replaceAll(oldC, newC);
    document.getElementById("res").innerText = replaced;
}

// 3. Check Palindrome
function checkPal() {
    let s = document.getElementById("str").value;
    let rev = s.split("").reverse().join("");
    
    if (s === rev) {
        document.getElementById("res").innerText = "Yes, it is a Palindrome";
    } else {
        document.getElementById("res").innerText = "No, it is not a Palindrome";
    }
}
