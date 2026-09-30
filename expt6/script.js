let items = [];

function loadArray() {
    let text = document.getElementById("arr").value;
    items = text.split(",").map(x => x.trim());
}

// ---------- Using standard array methods ----------

function removeItem() {
    loadArray();
    let val = document.getElementById("removeVal").value;

    let index = items.indexOf(val);
    if (index !== -1) {
        items.splice(index, 1);
    }

    document.getElementById("res").innerText = items.join(", ");
}

function checkItem() {
    loadArray();
    let val = document.getElementById("checkVal").value;

    if (items.includes(val)) {
        document.getElementById("res").innerText = "Array contains " + val;
    } else {
        document.getElementById("res").innerText = "Array does not contain " + val;
    }
}

function emptyArray() {
    loadArray();
    items.length = 0;
    document.getElementById("res").innerText = "Array is now: " + items.join(", ");
}

// ---------- Without using standard array methods ----------

function removeItemManual() {
    loadArray();
    let val = document.getElementById("removeVal").value;
    let newItems = [];

    for (let i = 0; i < items.length; i++) {
        if (items[i] !== val) {
            newItems[newItems.length] = items[i];
        }
    }

    items = newItems;
    document.getElementById("res").innerText = items.join(", ");
}

function checkItemManual() {
    loadArray();
    let val = document.getElementById("checkVal").value;
    let found = false;

    for (let i = 0; i < items.length; i++) {
        if (items[i] === val) {
            found = true;
            break;
        }
    }

    if (found) {
        document.getElementById("res").innerText = "Array contains " + val;
    } else {
        document.getElementById("res").innerText = "Array does not contain " + val;
    }
}

function emptyArrayManual() {
    loadArray();

    while (items[0] !== undefined) {
        delete items[items.length - 1];
        items.length = items.length - 1;
    }

    document.getElementById("res").innerText = "Array is now: " + items.join(", ");
}
