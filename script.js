document.addEventListener('DOMContentLoaded', function () {
    const dateTimeElement = document.getElementById('current-date-time');
    
    function updateDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        dateTimeElement.textContent = `${date} ${time}`;
    }

    setInterval(updateDateTime, 1000);
    // Initial call to set the time immediately when the page loads
    updateDateTime();
});
window.addEventListener('load', function() {
    // Hide the spinner once the page is fully loaded
    const spinner = document.querySelector('.spinner');
    spinner.classList.add('spinner-hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    const h2Elements = document.querySelectorAll('h2');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Trigger the initial animation

                // Add breathing effect after slideUpFadeIn is done
                setTimeout(() => {
                    entry.target.classList.add('breathe');
                }, 800); // Delay matches slideUpFadeIn duration
                
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, { threshold: 0.1 });

    h2Elements.forEach(h2 => {
        observer.observe(h2);
    });
});
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
