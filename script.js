window.onload = function() {
    // Handle certificates section toggle
    const certificatesContent = document.querySelector('.certificates');
    const toggleButton = document.getElementById('toggleCertificates');
    const navCertificates = document.getElementById('navCertificates');

    function toggleCertificates() {
        if (certificatesContent.classList.contains('show')) {
            certificatesContent.classList.remove('show');
            toggleButton.textContent = 'Show Certificates';
        } else {
            certificatesContent.classList.add('show');
            toggleButton.textContent = 'Hide Certificates';
            document.querySelector('#certificates').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Add event listener to the toggle button
    toggleButton.addEventListener('click', toggleCertificates);

    // Add event listener to the "Certificates" nav link
    navCertificates.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        toggleCertificates();
    });

    // Fade in content after typing effect
    setTimeout(function() {
        const fadedContent = document.querySelector('.faded-content');
        const typingText = document.querySelector('.typing-text');
        if (fadedContent && typingText) {
            fadedContent.classList.add('fade-in');
            typingText.classList.add('fade-in');
        }
    }, 1000); // Delay for typing effect
};
