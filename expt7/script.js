let arr = [];

// Step 1 & 2: accept size and create array of that size using standard methods
function createArray() {
    let size = parseInt(document.getElementById("size").value);
    arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(0);
    }

    document.getElementById("res").innerText = "Array created: " + arr.join(", ");
}

// Step 3: append an object to an existing array using standard array methods
function pushItem() {
    let item = document.getElementById("newItem").value;
    arr.push(item);
    document.getElementById("res").innerText = "After push: " + arr.join(", ");
}

function unshiftItem() {
    let item = document.getElementById("newItem").value;
    arr.unshift(item);
    document.getElementById("res").innerText = "After unshift: " + arr.join(", ");
}

function popItem() {
    let removed = arr.pop();
    document.getElementById("res").innerText = "Removed " + removed + " -> " + arr.join(", ");
}

function shiftItem() {
    let removed = arr.shift();
    document.getElementById("res").innerText = "Removed " + removed + " -> " + arr.join(", ");
}

// Step 4: check whether the array (with the appended object) is an array
function checkArray() {
    document.getElementById("res").innerText = "Is Array: " + Array.isArray(arr);
}
