const lights = document.querySelectorAll('.light');
function changeColor() {
    lights.forEach(light => {
        light.style.backgroundColor = getRandomColor ();
    });
}

function getRandomColor() {
  const colors = ['red', 'yellow', 'blue', 'white'];
  return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(changeColor, 500);

document.addEventListener("DOMContentLoaded", () => {
    const petals = document.querySelectorAll(".petal");
    const stem = document.querySelector(".stem");
    const center = document.querySelector(".center");

    // Animate the stem first
    setTimeout(() => {
        stem.style.opacity = "1";
        stem.style.transition = "opacity 2s";
    }, 500);

    // Animate the petals
    petals.forEach((petal, index) => {
        setTimeout(() => {
            petal.style.opacity = "1";
            petal.style.transition = "opacity 1s";
        }, index * 1000 + 2500); // Start after stem animation
    });

    // Animate the center
    setTimeout(() => {
        center.style.opacity = "1";
        center.style.transition = "opacity 1s";
    }, petals.length * 1000 + 2500); // Start after petal animation

    // Call function to create and animate the HEART
    createHeart();
});

//HEART Animation
function createHeart() {
    const container = document.getElementById('heart-container');
    container.innerHTML = ''; // Clear any existing content

    let t = 0;
    function drawNextPoint() {
        const x = 16 * Math.sin(t)**3;
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        const heartPoint = document.createElement('div');
        heartPoint.className = 'heart-point';
        heartPoint.style.left = `${x * 10 + 200}px`; // Scale and position
        heartPoint.style.top = `${-y * 10 + 200}px`; // Invert y-axis
        container.appendChild(heartPoint);

        // Add a smaller heart inside the large heart
        const smallHeart = document.createElement('div');
        smallHeart.className = 'small-heart-point';
        smallHeart.style.left = `${x * 5 + 200}px`; // Half scale and position
        smallHeart.style.top = `${-y * 5 + 200}px`; // Invert y-axis and half scale
        container.appendChild(smallHeart);

        // Add an even smaller heart inside the smaller heart
        const smallerHeart = document.createElement('div');
        smallerHeart.className = 'smaller-heart-point';
        smallerHeart.style.left = `${x * 2.5 + 200}px`; // Quarter scale and position
        smallerHeart.style.top = `${-y * 2.5 + 200}px`; // Invert y-axis and quarter scale
        container.appendChild(smallerHeart);

        // Add the smallest heart inside the even smaller heart
        const smallestHeart = document.createElement('div');
        smallestHeart.className = 'smallest-heart-point';
        smallestHeart.style.left = `${x * 1.25 + 200}px`; // Eighth scale and position
        smallestHeart.style.top = `${-y * 1.25 + 200}px`; // Invert y-axis and eighth scale
        container.appendChild(smallestHeart);

        t += 0.01;
        if (t <= 2 * Math.PI) {
            setTimeout(drawNextPoint, .1); // Adjust the interval for animation speed
        }
    }
    drawNextPoint();
}
`   `
// snowfall.js
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
    snowflake.style.opacity = Math.random();

    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

setInterval(createSnowflake, 200);

// Ensure the CSS for heart points is added dynamically
const style = document.createElement('style');
style.innerHTML = `
.heart-point {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    animation: fade-in-out 1s infinite alternate; /* Simple animation to make small hearts pulse */
}

.small-heart-point {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: green;
    border-radius: 50%;
    animation: fade-in-out 1s infinite alternate; /* Simple animation to make small hearts pulse */
}

.smaller-heart-point {
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: red;
    border-radius: 50%;
}

.smallest-heart-point {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: green;
    border-radius: 50%;
}

@keyframes fade-in-out {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0.5; transform: scale(1.5); }
}
`;
document.head.appendChild(style);