document.addEventListener('DOMContentLoaded', () => {
    const typewriterElements = document.querySelectorAll(
        '.typewriter, .typewriter-paragraph, .separator img, .col img, #contact a'
    );

    let delay = 0;

    typewriterElements.forEach((el) => {
        if (el.tagName === 'IMG') {
            // Handle images and GIFs (fade in quickly)
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
            }, delay);
            delay += 500; // Quick fade-in for images/GIFs
        } else if (el.tagName === 'A') {
            // Handle links with typewriter effect
            const text = el.textContent; // Preserve text
            el.textContent = ''; // Clear text for typing animation
            el.style.display = 'inline-block'; // Ensure proper visibility during animation
            let charIndex = 0;

            setTimeout(() => {
                const interval = setInterval(() => {
                    if (charIndex < text.length) {
                        el.textContent += text.charAt(charIndex);
                        charIndex++;
                    } else {
                        clearInterval(interval);
                    }
                }, 50); // Typing speed for links
            }, delay);

            delay += text.length * 50 + 500; // Adjust delay for next element
        } else {
            // Handle text elements (typewriter effect)
            const text = el.textContent; // Preserve text
            el.textContent = ''; // Clear text for typing animation
            let charIndex = 0;

            setTimeout(() => {
                const cursorSpan = document.createElement('span');
                cursorSpan.style.borderRight = '0.15em solid #00ff00';
                cursorSpan.style.display = 'inline';
                el.appendChild(cursorSpan);

                const interval = setInterval(() => {
                    if (charIndex < text.length) {
                        el.insertBefore(document.createTextNode(text.charAt(charIndex)), cursorSpan);
                        charIndex++;
                    } else {
                        clearInterval(interval);
                        el.removeChild(cursorSpan); // Remove the cursor after typing finishes
                    }
                }, 23); // Typing speed
            }, delay);

            delay += text.length * 15; // Adjust total delay per text element
        }
    });

    const rabbitIcon = document.querySelector('img[alt="Follow the White Rabbit"]');
if (rabbitIcon) {
    setTimeout(() => {
        rabbitIcon.classList.add('visible'); // Trigger the fade-in animation
    }, delay); // Delay based on the animation sequence
}


    // Ensure "Projects" section is visible during animations
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.style.display = 'block'; // Ensure visibility
});

// MATRIX RAIN ANIMATION
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = 'deepthi';
letters = letters.split('');

var fontSize = 10,
    columns = Math.floor(canvas.width / fontSize);

var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 0;
}

var letterIndex = 0;

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < drops.length; i++) {
        var text = letters[letterIndex];
        letterIndex = (letterIndex + 1) % letters.length;

        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
    }
}

setInterval(draw, 40);

setTimeout(() => {
    clearInterval(rainInterval); 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}, 1000);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 0;
    }
});
