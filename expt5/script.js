let timer;

function startTimer() {

    clearInterval(timer); 
    
    let timeRemaining = parseInt(document.getElementById("seconds").value);

    if (isNaN(timeRemaining) || timeRemaining <= 0) {
        document.getElementById("display").innerText = "Invalid time";
        return;
    }

    document.getElementById("display").innerText = timeRemaining;

    timer = setInterval(function() {
        timeRemaining--;
        document.getElementById("display").innerText = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            document.getElementById("display").innerText = "Time's Up!";
        }
    }, 1000);
}
