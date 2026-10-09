let arr = [];
let maxSize = 0;

function showArray() {
    document.getElementById("arrDisplay").innerText = JSON.stringify(arr);
}

// anything can be pushed: numbers, strings, arrays, objects
function readElement() {
    let text = document.getElementById("element").value;
    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}

// Step 1 & 2: accept size from user and create the array
function createArray() {
    let size = parseInt(document.getElementById("size").value);

    if (isNaN(size) || size <= 0) {
        document.getElementById("msg").innerText = "Invalid size";
        return;
    }

    maxSize = size;
    arr = new Array(size);
    arr.length = 0;

    showArray();
    document.getElementById("msg").innerText = "Array of size " + maxSize + " created";
    document.getElementById("res").innerText = "";
}

// Step 3: append an element to the array using standard methods
function pushElement() {
    if (arr.length >= maxSize) {
        document.getElementById("msg").innerText = "Array Overflow! Maximum size reached.";
        return;
    }
    arr.push(readElement());
    showArray();
    document.getElementById("msg").innerText = "Element pushed";
}

function unshiftElement() {
    if (arr.length >= maxSize) {
        document.getElementById("msg").innerText = "Array Overflow! Maximum size reached.";
        return;
    }
    arr.unshift(readElement());
    showArray();
    document.getElementById("msg").innerText = "Element added at start";
}

function popElement() {
    if (arr.length === 0) {
        document.getElementById("msg").innerText = "Array Underflow! Array is empty.";
        return;
    }
    let removed = arr.pop();
    showArray();
    document.getElementById("msg").innerText = "Popped: " + JSON.stringify(removed);
}

function shiftElement() {
    if (arr.length === 0) {
        document.getElementById("msg").innerText = "Array Underflow! Array is empty.";
        return;
    }
    let removed = arr.shift();
    showArray();
    document.getElementById("msg").innerText = "Shifted: " + JSON.stringify(removed);
}

// Step 4: check whether the object at the given index is an array
function checkIndex() {
    let index = parseInt(document.getElementById("index").value);

    if (isNaN(index) || index < 0 || index >= arr.length) {
        document.getElementById("res").innerText = "Invalid index";
        return;
    }

    if (Array.isArray(arr[index])) {
        document.getElementById("res").innerText = "The object at index " + index + " IS an Array.";
    } else {
        document.getElementById("res").innerText = "The object at index " + index + " is NOT an Array. Value: " + arr[index];
    }
}
