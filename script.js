

document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    const gifOverlay = document.getElementById("gifOverlay");
    const yesButton = document.getElementById("yes");
    const rainContainer = document.getElementById("rainContainer");

    let moveAttempts = 0;

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDelay = Math.random() * 2 + "s";
        heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    function createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = Math.random() * window.innerHeight + "px";
        sparkle.style.animationDelay = Math.random() * 2 + "s";
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 3000);
    }

    setInterval(createHeart, 500);
    setInterval(createSparkle, 1000);

    function moveNo() {
        moveAttempts++;

        if (moveAttempts > 15) {
            noButton.style.position = "";
            noButton.style.top = "";
            noButton.style.left = "";
            moveAttempts = 0;
            return;
        }

        const buttonRect = noButton.getBoundingClientRect();
        const maxX = window.innerWidth - buttonRect.width - 40;
        const maxY = window.innerHeight - buttonRect.height - 40;

        const randomX = Math.random() * maxX + 20;
        const randomY = Math.random() * maxY + 20;

        noButton.style.position = "fixed";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
        noButton.style.zIndex = "1000";
    }

    function createFallingMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = message;

        const randomX = Math.random() * window.innerWidth;
        messageElement.style.left = `${randomX}px`;
        rainContainer.appendChild(messageElement);

        setTimeout(() => {
            rainContainer.removeChild(messageElement);
        }, 7000);
    }

    function createConfetti() {
        const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#ee5a6f', '#f47068', '#f8b500'];
        const confettiCount = 100;

        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement("div");
                confetti.style.position = "fixed";
                confetti.style.width = "10px";
                confetti.style.height = "10px";
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * window.innerWidth + "px";
                confetti.style.top = "-10px";
                confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                confetti.style.transition = "all 3s ease-out";
                confetti.style.zIndex = "1001";
                confetti.style.pointerEvents = "none";

                document.body.appendChild(confetti);

                setTimeout(() => {
                    confetti.style.top = window.innerHeight + "px";
                    confetti.style.transform = `rotate(${Math.random() * 720}deg)`;
                    confetti.style.opacity = "0";
                }, 100);

                setTimeout(() => {
                    confetti.remove();
                }, 3100);
            }, i * 30);
        }
    }

    noButton.addEventListener("mouseover", moveNo);

    yesButton.addEventListener("click", () => {
        gifOverlay.style.display = "flex";
        createConfetti();

        const messages = ["I love you too so muchhh 💕💕", "i am proud of you", "You are the Best gf!!💕", "Happy Valentine's Day!", "Forever and always ❤️","MWAHHHH"];
        for (let i = 0; i < 20; i++) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            setTimeout(() => createFallingMessage(randomMessage), i * 300);
        }
    });

    gifOverlay.addEventListener("click", () => {
        gifOverlay.style.display = "none";
    });
});
