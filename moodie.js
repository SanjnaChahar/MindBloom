function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";

    star.style.animationDelay = Math.random() * 5 + "s";
    star.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 12000);
}

setInterval(createStar, 300);

// function playMeditationSound() {
//     const audio = document.getElementById("meditationAudio");
//     audio.play();
// }
