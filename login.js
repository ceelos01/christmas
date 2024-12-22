// login.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'sandra' && password === 'sigma') {
            playSound('wow-sound-effect.mp3');
            alert('WOOOOW YOU GOT IT RIGHT! Ojala te gusta!');
            window.location.href = 'index1.html'; // Redirect to the main content page
        } else {
            alert('Incorrect input. Think');
        }
    });
});

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}
