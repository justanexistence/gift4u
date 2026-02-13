const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hero = document.getElementById("hero");
const celebration = document.getElementById("celebration");
const loveSection = document.getElementById("loveSection");
const popup = document.getElementById("popup");
const memoryBtn = document.getElementById("memoryBtn");
const closePopup = document.getElementById("closePopup");

const message = `Gazala,

If I could bottle the way you smile and keep it in my pocket, I would. I swear I would.

You have this quiet magic about you. The way you turn ordinary moments into something I replay later with the biggest grin. The way you laugh when something genuinely catches you off guard. The way you care so deeply about the people in your world. And somehow, out of everyone, you chose me.

That still gets me.

I don’t think you fully understand what you do to me. When you say you miss me. When you spiral into wanting to move in right now. When you talk about waking up next to me like it’s the only thing that makes sense. I act calm sometimes, but the truth is, I feel it just as strongly.

When you imagine us waking up together, I see it too. You half asleep, hair messy, pretending to be annoyed but quietly moving closer anyway. Your hand finding mine without even opening your eyes. Stealing warmth like it was always yours.

And honestly, it is.

Being with you feels warm. Comfortable. Exciting in the softest way. You make intensity feel safe. You make distance feel temporary. Even miles apart, I feel connected to you in a way that’s steady.

You might think you’re difficult to love sometimes. You might feel like you’re complicated, too emotional, too intense. But as much of a safe player as I can be, I don’t run from depth. I was, I am, and I will always be yours. Not in a loud, dramatic way. In a grounded way. In a way that means I choose you.

If loving you is a challenge on some days, then let it be. Be hard to love when you can’t help it. Watch me love you even harder anyway. Not because I have to. Because I want to.

I love how you love with your whole heart. I love how protective you get. I love how effortlessly beautiful you are, even when you don’t try. Your smile is unfair, by the way. It has entirely too much power over me.

And when you say you want to hold me and not let anything upset me, that stays with me. It makes me feel wanted in a way that’s rare. It makes me feel safe too.

I just feel lucky.

Lucky that I get to know you like this. Lucky that you let me see your softness. Lucky that even through distance, we still choose each other in these late night moments.

I choose you. And I’d choose you again. Today. Tomorrow. Whenever.

Always.

I’m not going anywhere.`;

function typeWriterEffect(text, elementId, speed = 20) {
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

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
        typeWriterEffect(message, "typewriter", 18);
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
