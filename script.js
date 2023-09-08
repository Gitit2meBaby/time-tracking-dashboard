const dailyButton = document.querySelector('#dailyButton');
const weeklyButton = document.querySelector('#weeklyButton');
const monthlyButton = document.querySelector('#monthlyButton');

const workTimeDisplay = document.querySelector('#workTimeDisplay');
const playTimeDisplay = document.querySelector('#playTimeDisplay');
const studyTimeDisplay = document.querySelector('#studyTimeDisplay');
const exerciseTimeDisplay = document.querySelector('#exerciseTimeDisplay');
const socialTimeDisplay = document.querySelector('#socialTimeDisplay');
const selfCareTimeDisplay = document.querySelector('#selfCareTimeDisplay');

const workPreviousTime = document.querySelector('#workPreviousTime');
const playPreviousTime = document.querySelector('#playPreviousTime');
const studyPreviousTime = document.querySelector('#studyPreviousTime');
const exercisePreviousTime = document.querySelector('#exercisePreviousTime');
const socialPreviousTime = document.querySelector('#socialPreviousTime');
const selfCarePreviousTime = document.querySelector('#selfCarePreviousTime');



// Function to fetch Daily JSON data from a file
function fetchDataDaily() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            updateContentDaily(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function updateContentDaily(data) {
    workTimeDisplay.textContent = data[0].timeframes.daily.current + "hrs";
    workPreviousTime.textContent = data[0].timeframes.daily.previous
    playTimeDisplay.textContent = data[1].timeframes.daily.current + "hrs";
    playPreviousTime.textContent = data[1].timeframes.daily.previous
    studyTimeDisplay.textContent = data[2].timeframes.daily.current + "hrs";
    studyPreviousTime.textContent = data[2].timeframes.daily.previous
    exerciseTimeDisplay.textContent = data[3].timeframes.daily.current + "hrs";
    exercisePreviousTime.textContent = data[3].timeframes.daily.previous
    socialTimeDisplay.textContent = data[4].timeframes.daily.current + "hrs";
    socialPreviousTime.textContent = data[4].timeframes.daily.previous
    selfCareTimeDisplay.textContent = data[5].timeframes.daily.current + "hrs";
    selfCarePreviousTime.textContent = data[5].timeframes.daily.previous
}


// Function to fetch Weekly JSON data from a file

function fetchDataWeekly() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            updateContentWeekly(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function updateContentWeekly(data) {
    workTimeDisplay.textContent = data[0].timeframes.weekly.current + "hrs";
    workPreviousTime.textContent = data[0].timeframes.weekly.previous;
    playTimeDisplay.textContent = data[1].timeframes.weekly.current + "hrs";
    playPreviousTime.textContent = data[1].timeframes.weekly.previous;
    studyTimeDisplay.textContent = data[2].timeframes.weekly.current + "hrs";
    studyPreviousTime.textContent = data[2].timeframes.weekly.previous;
    exerciseTimeDisplay.textContent = data[3].timeframes.weekly.current + "hrs";
    exercisePreviousTime.textContent = data[3].timeframes.weekly.previous;
    socialTimeDisplay.textContent = data[4].timeframes.weekly.current + "hrs";
    socialPreviousTime.textContent = data[4].timeframes.weekly.previous;
    selfCareTimeDisplay.textContent = data[5].timeframes.weekly.current + "hrs";
    selfCarePreviousTime.textContent = data[5].timeframes.weekly.previous;
}

// Function to fetch Weekly JSON data from a file

function fetchDataMonthly() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            updateContentMonthly(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function updateContentMonthly(data) {
    workTimeDisplay.textContent = data[0].timeframes.monthly.current + "hrs";
    workPreviousTime.textContent = data[0].timeframes.monthly.previous;
    playTimeDisplay.textContent = data[1].timeframes.monthly.current + "hrs";
    playPreviousTime.textContent = data[1].timeframes.monthly.previous;
    studyTimeDisplay.textContent = data[2].timeframes.monthly.current + "hrs";
    studyPreviousTime.textContent = data[2].timeframes.monthly.previous;
    exerciseTimeDisplay.textContent = data[3].timeframes.monthly.current + "hrs";
    exercisePreviousTime.textContent = data[3].timeframes.monthly.previous;
    socialTimeDisplay.textContent = data[4].timeframes.monthly.current + "hrs";
    socialPreviousTime.textContent = data[4].timeframes.monthly.previous;
    selfCareTimeDisplay.textContent = data[5].timeframes.monthly.current + "hrs";
    selfCarePreviousTime.textContent = data[5].timeframes.monthly.previous;
}


// Event listeners for the timeframe buttons
dailyButton.addEventListener('click', () => {
    dailyButton.classList.add('active')
    weeklyButton.classList.remove('active')
    monthlyButton.classList.remove('active')
    fetchDataDaily();
});

weeklyButton.addEventListener('click', () => {
    weeklyButton.classList.add('active')
    dailyButton.classList.remove('active')
    monthlyButton.classList.remove('active')
    fetchDataWeekly();
});

monthlyButton.addEventListener('click', () => {
    monthlyButton.classList.add('active')
    dailyButton.classList.remove('active')
    weeklyButton.classList.remove('active')
    fetchDataMonthly();
});

// Initial content update (default to 'daily' when the page loads)
fetchDataDaily();
