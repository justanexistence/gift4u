const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hero = document.getElementById("hero");
const celebration = document.getElementById("celebration");
const loveSection = document.getElementById("loveSection");
const popup = document.getElementById("popup");
const memoryBtn = document.getElementById("memoryBtn");
const closePopup = document.getElementById("closePopup");

function moveNoButton() {
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
    if (navigator.vibrate) {
        navigator.vibrate(80);
    }

    hero.classList.add("hidden");
    celebration.classList.remove("hidden");
    launchConfetti();

    setTimeout(() => {
        celebration.classList.add("hidden");
        loveSection.classList.remove("hidden");
    }, 4000);
});

memoryBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
});

function launchConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let hearts = [];

    for (let i = 0; i < 50; i++) {
        hearts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 12 + 6,
            speed: Math.random() * 1 + 0.5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ff4d88";

        hearts.forEach(h => {
            ctx.beginPath();
            ctx.arc(h.x, h.y, h.size / 2, 0, Math.PI * 2);
            ctx.fill();

            h.y += h.speed;
            if (h.y > canvas.height) {
                h.y = -10;
                h.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();
}
