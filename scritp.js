function createFirecrackers() {
    const container = document.getElementById("fireworks-container");

    for (let i = 0; i < 50; i++) { // Number of firecrackers
        const firecracker = document.createElement("div");
        firecracker.classList.add("firecracker");
        firecracker.style.left = `${Math.random() * 100}%`;
        firecracker.style.top = `${Math.random() * 100}%`;
        firecracker.style.animationDelay = `${Math.random() * 1.5}s`; // Stagger the animations

        container.appendChild(firecracker);

        setTimeout(() => {
            firecracker.remove(); // Remove firecrackers after animation
        }, 1500); // Same as animation duration
    }
}

// Call the function to start the firecrackers
createFirecrackers();
setInterval(createFirecrackers, 2000);
const notes = [
    "Happy Birthday to the one who makes my world brighter every day. Here’s to more adventures together! 🎉💖",

    "Wishing you a day full of love, joy, and all your heart’s desires. Happy Birthday, my favorite person! 🎂✨",

    "To the person who means the world to me—Happy Birthday! May your day be as amazing as you are. 🥳💕",

    "Celebrating the love of my life today! Happy Birthday to my one and only. 🎉💫"
];


let countdown = 10;
let currentIndex = 0;
let timer;

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}



function displayNoteAndTime(index) {
    const date = new Date();
    const note = notes[index];

    const timeString = date.toLocaleTimeString();

    document.getElementById("time-display").textContent = ` ${timeString}`;

    const noteTextElement = document.getElementById("note-text");
    noteTextElement.textContent = note;
    noteTextElement.style.opacity = "0";
    noteTextElement.style.animation = "none";
    setTimeout(() => {
        noteTextElement.style.animation = "fadeInSlide 1s ease forwards";
    }, 50);
}




function updateCountdown() {
    document.getElementById("countdown-display").textContent = `HAPPY BIRTHDAY `;
    countdown--;
    if (countdown < 0) {
        countdown = 60;
        if (currentIndex < notes.length - 1) {
            currentIndex++;
            displayNoteAndTime(currentIndex);
        } else {
            clearInterval(timer);
            displayCollage();
        }
    }
}



displayNoteAndTime(currentIndex);
timer = setInterval(updateCountdown, 1000);

setInterval(createConfetti, 500);
setInterval(createBalloons, 3000);

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    audio.muted = false; // Unmute audio if allowed by the browser
});