function revealMessage() {
    const message = document.getElementById('message');
    message.style.opacity = '1';
    message.style.display = 'block';
    // Add a particle effect
    createParticles();
}

function revealMessagetolak() {
    const rejectButton = document.getElementById('rejectButton');
    rejectButton.classList.add('moving');
    setTimeout(() => {
        rejectButton.style.display = 'none';
    }, 1000); // Matches the animation duration
}

function createParticles() {
    for (let i = 0; i < 20; i++) {
        let particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particle.style.transform = `scale(${Math.random()})`;
        document.body.appendChild(particle);
        setTimeout(() => {
            particle.style.opacity = '0';
            setTimeout(() => {
                particle.remove();
            }, 300);
        }, 100);
    }
}
