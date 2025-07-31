// Timer variables
let timerInterval;
let remainingTime = 0;

// Function to start the countdown timer
function startTimer() {
    const duration = parseInt(document.getElementById('duration').value);
    const selectedDate = new Date(document.getElementById('date').value);
    const now = new Date();
    
    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid duration first.");
        return;
    }
    
    if (isNaN(selectedDate.getTime())) {
        alert("Please select a valid date first.");
        return;
    }
    
    clearInterval(timerInterval);
    
    // Calculate end time based on selected date and duration
    const endTime = new Date(selectedDate.getTime() + duration * 60000);

    timerInterval = setInterval(() => {
        const now = new Date();
        remainingTime = Math.floor((endTime - now) / 1000);
        
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer-display').textContent = '00:00';
            alert("Workout complete! Great job!");
            return;
        }
        
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        document.getElementById('timer-display').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// Event listener for start timer button
document.getElementById('start-timer').addEventListener('click', startTimer);