function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    document.body.appendChild(star);
}

setInterval(createStar, 300);

function playMeditationSound() {
    const audio = document.getElementById("meditationAudio");
    audio.play();
}
