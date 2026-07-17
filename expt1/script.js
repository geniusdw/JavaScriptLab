function AreaOfCircle(){ 
    let radius = parseFloat(document.getElementById("radius").value); 
    if(!isNaN(radius)) {
        let area = 3.14 * radius * radius; 
        document.getElementById("resultCircle").value = area; 
    }
} 

function AreaOfRectangle(){ 
    let length = parseFloat(document.getElementById("length").value); 
    let width = parseFloat(document.getElementById("width").value); 
    if(!isNaN(length) && !isNaN(width)) {
        let area = length * width; 
        document.getElementById("resultRectangle").value = area; 
    }
} 

function AreaOfTriangle(){ 
    let side1 = parseFloat(document.getElementById("side1").value); 
    let side2 = parseFloat(document.getElementById("side2").value); 
    let side3 = parseFloat(document.getElementById("side3").value); 
    
    if(!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {
        let s = (side1 + side2 + side3) / 2; 
        let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)); 
        
        if(isNaN(area)) {
            document.getElementById("resultTriangle").value = "Invalid Sides";
        } else {
            document.getElementById("resultTriangle").value = area; 
        }
    }
}
