document.addEventListener('DOMContentLoaded', () => {
    const typewriterElements = document.querySelectorAll('.typewriter, .typewriter-paragraph');

    let delay = 0;

    typewriterElements.forEach((el, index) => {
        const text = el.textContent;
        el.textContent = '';
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
                    el.removeChild(cursorSpan);
                }
            }, 25);
        }, delay);

        delay += 1000;
    });
});

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
