const loadingScreen = document.querySelector('.loading-screen');
const content = document.querySelector('.content');
const progress = document.querySelector('.progress');
const progressText = document.querySelector('.progress-text');
const loadingContainer = document.querySelector('.loading-container');

// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    const translateX = (Math.random() - 0.5) * 100;
    particle.style.setProperty('--translateX', `${translateX}px`);
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animation = 'particleFloat 3s ease-in-out forwards';
    loadingContainer.appendChild(particle);
    
    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Generate particles periodically
const particleInterval = setInterval(() => {
    createParticle();
}, 300);

// Simulate loading progress
let currentProgress = 0;
const interval = setInterval(() => {
    currentProgress += Math.random() * 12;
    if (currentProgress > 100) currentProgress = 100;
    
    progress.style.width = currentProgress + '%';
    progressText.textContent = Math.round(currentProgress) + '%';
    
    if (currentProgress === 100) {
        clearInterval(interval);
        clearInterval(particleInterval);
        setTimeout(hideLoadingScreen, 500);
    }
}, 200);

// Add mouse movement interaction
document.addEventListener('mousemove', (e) => {
    if (loadingScreen.style.opacity !== '0') {
        const ring = document.querySelector('.loader-ring');
        const rect = ring.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / 30;
        const deltaY = (e.clientY - centerY) / 30;
        
        ring.style.transform = `perspective(1000px) rotateX(${deltaY}deg) rotateY(${-deltaX}deg)`;
    }
});

function hideLoadingScreen() {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        content.classList.add('visible');
    }, 800);
}

function refreshPage() {
    window.location.reload();
}