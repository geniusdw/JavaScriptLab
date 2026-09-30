let box = document.getElementById("box");

box.onmouseover = function() {
    box.style.backgroundColor = "skyblue";
};

box.onmouseout = function() {
    box.style.backgroundColor = "lightgray";
};

let nameField = document.getElementById("nameField");

nameField.onfocus = function() {
    document.body.style.backgroundColor = "lightyellow";
};

nameField.onblur = function() {
    document.body.style.backgroundColor = "white";
};
