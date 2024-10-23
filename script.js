// Write your code here
const lightbulbs = document.querySelectorAll('.lightbulb');

// Initialize click counter
let clickCount = 0;

// Select the subtitle to update click count
const subtitle = document.querySelector('.subtitle');

// Add click event listeners to each lightbulb
lightbulbs.forEach(bulb => {
    bulb.addEventListener('click', function() {
        // Toggle the "active" class
        this.classList.toggle('active');

        // Increment and update click count
        clickCount += 1;
        subtitle.textContent = `You've clicked the lights ${clickCount} times`;
    });
    
});