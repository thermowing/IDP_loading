document.addEventListener("DOMContentLoaded", () => {
    const progressText = document.querySelector(".progress-text");
    const progressBar = document.querySelector(".progress");
    const loadingScreen = document.querySelector(".loading-screen");
    const content = document.querySelector(".content");
    const refreshBtn = document.querySelector(".refresh-btn");

    let progress = 0;

    // Simulate loading process
    const loadingInterval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(loadingInterval);
            // Simulate success or error
            const loadingSuccessful = true; // Change to false to simulate an error

            if (loadingSuccessful) {
                window.location.href = "webpage.html";
            } else {
                refreshBtn.style.display = "inline-block";
                loadingScreen.style.display = "none";
                content.style.display = "block";
            }
        } else {
            progress += 1;
            progressText.textContent = `${progress}%`;
            progressBar.style.width = `${progress}%`;
        }
    }, 30);
});
