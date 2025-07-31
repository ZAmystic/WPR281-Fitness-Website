const goalSelect = document.getElementById('goalSelect');
const progressInput = document.getElementById('progressInput');
const addProgressBtn = document.getElementById('addProgressBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const motivationalMessage = document.getElementById('motivationalMessage');
const completedGoalsList = document.getElementById('completedGoalsList');
const goalsTableBody = document.getElementById('goalsTableBody');

let goal = {
    type: '',
    target: 0,
    currentProgress: 0
};

// Initialize the goal when the page loads
goalSelect.dispatchEvent(new Event('change'));

goalSelect.addEventListener('change', () => {
    if (goalSelect.value === 'run') {
        goal = { type: 'Run 10 miles in a week', target: 10, currentProgress: 0 };
    } else if (goalSelect.value === 'burn') {
        goal = { type: 'Burn 3000 calories in a month', target: 3000, currentProgress: 0 };
    }
    resetProgress();
    updateGoalsTable();
});

addProgressBtn.addEventListener('click', () => {
    const progress = parseFloat(progressInput.value);
    if (!isNaN(progress) && progress > 0) {
        goal.currentProgress += progress;
        updateProgress();
        progressInput.value = '';
        updateGoalsTable();
    }
});

function updateProgress() {
    const percentage = (goal.currentProgress / goal.target) * 100;
    progressBar.style.width = percentage + '%';
    progressText.textContent = Math.min(percentage, 100).toFixed(2) + '% completed';

    if (percentage >= 100) {
        completeGoal();
    } else if (percentage >= 50) {
        motivationalMessage.textContent = "Great job! You're halfway to your goal!";
    } else {
        motivationalMessage.textContent = ''; // Clear message if below 50%
    }
}

function completeGoal() {
    // Add the completed goal to the completed goals list
    const listItem = document.createElement('li');
    listItem.textContent = `${goal.type} - Completed!`;
    completedGoalsList.appendChild(listItem);

    // Reset the goal
    resetProgress();
}

function resetProgress() {
    goal.currentProgress = 0;
    progressBar.style.width = '0%';
    progressText.textContent = '0% completed';
    motivationalMessage.textContent = ''; // Clear motivational message
}

function updateGoalsTable() {
    // Clear the current table body
    goalsTableBody.innerHTML = '';

    // Create a new row for the current goal
    const row = document.createElement('tr');
    const goalCell = document.createElement('td');
    const targetCell = document.createElement('td');
    const progressCell = document.createElement('td');

    goalCell.textContent = goal.type;
    targetCell.textContent = goal.target;
    progressCell.textContent = goal.currentProgress;

    row.appendChild(goalCell);
    row.appendChild(targetCell);
    row.appendChild(progressCell);
    goalsTableBody.appendChild(row);
}