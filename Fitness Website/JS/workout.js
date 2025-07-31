// DOMContentLoaded ensures that the page has completely loaded
document.addEventListener('DOMContentLoaded', function() { 

    const submitButton = document.getElementById('submit-button');
    const clearButton = document.getElementById('clear-button');
    const favButton = document.getElementById('fav-button');
    const printButton = document.getElementById('print');

    // Object to store workout details
    const workout = {
        workoutType: [],
        workoutDuration: [],
        caloriesBurned: [],
        workoutDate: []
    };

    // submit button click
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        LogWorkout();
    });

    // clear button click
    clearButton.addEventListener("click", function(event) {
        event.preventDefault();
        clearWorkouts();
    });

    // favorite load from session storage
    favButton.addEventListener("click", function(event) {
        event.preventDefault();
        loadFavoriteWorkout();
    });

    // print button click
    printButton.addEventListener("click", function(event) {
        event.preventDefault();
        printWorkouts();
    });

    // delete buttons click
    document.getElementById('workoutLog').addEventListener("click", function(event) {
        if (event.target.classList.contains('delete-button')) {
            deleteWorkoutEntry(event);
        } else if (event.target.classList.contains('fav-workout')) {
            saveFavoriteWorkoutEntry(event);
        }
    });

    // Function to load workout details from sessionStorage
    function loadWorkouts() {
        const storedWorkouts = JSON.parse(sessionStorage.getItem('workoutData'));
        if (storedWorkouts) {
            workout.workoutType = storedWorkouts.workoutType;
            workout.workoutDuration = storedWorkouts.workoutDuration;
            workout.caloriesBurned = storedWorkouts.caloriesBurned;
            workout.workoutDate = storedWorkouts.workoutDate;

            // Display the stored workouts
            for (let i = 0; i < workout.workoutType.length; i++) {
                displayWorkout(workout.workoutType[i], workout.workoutDuration[i], workout.caloriesBurned[i], workout.workoutDate[i]);
            }
        }
    }

    // Function to display a workout
    function displayWorkout(workoutType, workoutDuration, caloriesBurned, workoutDate) {
        let workoutDisplay = document.createElement('ul');
        workoutDisplay.classList.add('workout-entry');
        workoutDisplay.innerHTML = `
            <li>${workoutType}</li>
            <li>${workoutDuration}</li>
            <li>${caloriesBurned}</li>
            <li>${workoutDate}</li>
            <li><button class="fav-workout">♥️</button></li>
            <li><button class="delete-button" data-index="${workout.workoutType.length - 1}">Delete</button></li>`;
        
        let workoutList = document.getElementById('workoutLog');
        workoutList.appendChild(workoutDisplay);
    }

    // Function to log workout details
    function LogWorkout() {
        if (document.getElementById('workout-type').value === '' || document.getElementById('duration').value === '' || document.getElementById('calories').value === '' || document.getElementById('date').value === '') {
            alert('Please fill out all fields');
            return;
        } else {
            // Get values from form inputs

            if (document.getElementById('date').value > new Date().toISOString()) {
                alert('Please enter a valid date');
                return;
            }
            else
            {
            let workoutType = document.getElementById('workout-type').value;
            let workoutDuration = document.getElementById('duration').value;
            let caloriesBurned = document.getElementById('calories').value;
            let workoutDate = document.getElementById('date').value;
            
            // Push values to workout object
            workout.workoutType.push(workoutType);
            workout.workoutDuration.push(workoutDuration);
            workout.caloriesBurned.push(caloriesBurned);
            workout.workoutDate.push(workoutDate);

            // Save workout data to sessionStorage
            sessionStorage.setItem('workoutData', JSON.stringify(workout));

            // Display the new workout entry
            displayWorkout(workoutType, workoutDuration, caloriesBurned, workoutDate);

            document.getElementById('workout-type').value = "";
            document.getElementById('duration').value = "";
            document.getElementById('calories').value = "";
            document.getElementById('date').value = "";
            }
        }
    }

    // Function to delete a workout entry
    function deleteWorkout(index) {
        workout.workoutType.splice(index, 1);
        workout.workoutDuration.splice(index, 1);
        workout.caloriesBurned.splice(index, 1);
        workout.workoutDate.splice(index, 1);

        sessionStorage.setItem('workoutData', JSON.stringify(workout));

        document.getElementById('workoutLog').innerHTML = '';
        loadWorkouts();
    }

    // Function to save favorite workout
    function saveFavoriteWorkout(workoutType, workoutDuration, caloriesBurned, workoutDate) {
        const favoriteWorkout = {
            workoutType,
            workoutDuration,
            caloriesBurned,
            workoutDate
        };
        sessionStorage.setItem('favoriteWorkout', JSON.stringify(favoriteWorkout));
    }

    // Function to load favorite workout
    function loadFavoriteWorkout() {
        const favoriteWorkout = JSON.parse(sessionStorage.getItem('favoriteWorkout'));
        if (favoriteWorkout) {
            document.getElementById('workout-type').value = favoriteWorkout.workoutType;
            document.getElementById('duration').value = favoriteWorkout.workoutDuration;
            document.getElementById('calories').value = favoriteWorkout.caloriesBurned;
            document.getElementById('date').value = favoriteWorkout.workoutDate;
        } else {
            alert('No favorite workout saved.');
        }
    }

    // Function to clear all workout logs
    function clearWorkouts() {
        sessionStorage.removeItem('workoutData');
        workout.workoutType = [];
        workout.workoutDuration = [];
        workout.caloriesBurned = [];
        workout.workoutDate = [];
        document.getElementById('workoutLog').innerHTML = '';
    }

    // Function to handle delete button click
    function deleteWorkoutEntry(event) {
        const index = event.target.getAttribute('data-index');
        deleteWorkout(index);
    }

    // Function to handle favorite button click
    function saveFavoriteWorkoutEntry(event) {
        const workoutEntry = event.target.closest('.workout-entry');
        const workoutType = workoutEntry.children[0].textContent;
        const workoutDuration = workoutEntry.children[1].textContent;
        const caloriesBurned = workoutEntry.children[2].textContent;
        const workoutDate = workoutEntry.children[3].textContent;
        saveFavoriteWorkout(workoutType, workoutDuration, caloriesBurned, workoutDate);
        alert('Workout saved as favorite.');
    }

    // Function to print workout logs
    function printWorkouts() {
        const workoutLog = document.getElementById('workoutLog');
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print Workout Logs</title></head><body>');
        printWindow.document.write('<h1>Workout Logs</h1>');
        printWindow.document.write('<table border="1"><tr><th>Type</th><th>Duration</th><th>Calories</th><th>Date</th></tr>');

        const workoutEntries = workoutLog.getElementsByClassName('workout-entry');
        for (let entry of workoutEntries) {
            const workoutType = entry.children[0].textContent;
            const workoutDuration = entry.children[1].textContent;
            const caloriesBurned = entry.children[2].textContent;
            const workoutDate = entry.children[3].textContent;
            printWindow.document.write(`<tr><td>${workoutType}</td><td>${workoutDuration}</td><td>${caloriesBurned}</td><td>${workoutDate}</td></tr>`);
        }

        printWindow.document.write('</table></body></html>');
        printWindow.document.close();
        printWindow.print();
    }

    // Load workouts from sessionStorage
    loadWorkouts();
});
