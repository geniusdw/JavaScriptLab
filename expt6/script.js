let arr = [];

function showArray() {
    let text = "[ ";
    for (let i = 0; i < arr.length; i++) {
        text += arr[i] + " ";
    }
    text += "]";
    document.getElementById("arrDisplay").innerText = text;
}

// 1st parameter: array length
function createArray() {
    let length = parseInt(document.getElementById("length").value);

    if (isNaN(length) || length < 0) {
        document.getElementById("res").innerText = "Invalid length";
        return;
    }

    arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = i + 1;
    }

    showArray();
    document.getElementById("res").innerText = "Array of length " + length + " created";
}

// ---------- Using standard array methods ----------

// 2nd parameter: element to be deleted
function removeItem() {
    let val = parseInt(document.getElementById("removeVal").value);
    let index = arr.indexOf(val);

    if (index === -1) {
        document.getElementById("res").innerText = val + " not found in array";
    } else {
        arr.splice(index, 1);
        document.getElementById("res").innerText = val + " deleted from array";
    }
    showArray();
}

// 3rd parameter: value to check
function checkItem() {
    let val = parseInt(document.getElementById("checkVal").value);

    if (arr.includes(val)) {
        document.getElementById("res").innerText = val + " is present in array";
    } else {
        document.getElementById("res").innerText = val + " is not present in array";
    }
}

// Empty array
function emptyArray() {
    arr.length = 0;
    showArray();
    document.getElementById("res").innerText = "Array emptied";
}

// ---------- Without using standard array methods ----------

function removeItemManual() {
    let val = parseInt(document.getElementById("removeVal").value);
    let newArr = [];
    let count = 0;
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val && !found) {
            found = true;
        } else {
            newArr[count] = arr[i];
            count++;
        }
    }

    arr = newArr;
    showArray();

    if (found) {
        document.getElementById("res").innerText = val + " deleted from array";
    } else {
        document.getElementById("res").innerText = val + " not found in array";
    }
}

function checkItemManual() {
    let val = parseInt(document.getElementById("checkVal").value);
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            found = true;
            break;
        }
    }

    if (found) {
        document.getElementById("res").innerText = val + " is present in array";
    } else {
        document.getElementById("res").innerText = val + " is not present in array";
    }
}

function emptyArrayManual() {
    arr = [];
    showArray();
    document.getElementById("res").innerText = "Array emptied";
}
