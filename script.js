document.addEventListener("DOMContentLoaded", function() {
    // Check if tsParticles exists before trying to initialize it
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#2a9d8f" // Aqua blue highlight color for nodes
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 2,
                    random: true
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff", // White links
                    opacity: 0.15, // Very subtle lines
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.5, // Slow movement for subtle effect
                    direction: "none",
                    random: true,
                    straight: false,
                    outMode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas", // Using older property name for compatibility
                events: {
                    onhover: {
                        enable: true,
                        mode: "bubble" // This mode often works in most versions
                    },
                    onclick: {
                        enable: true,
                        mode: "repulse"
                    }
                },
                modes: {
                    bubble: {
                        distance: 200,
                        size: 4,
                        duration: 2,
                        opacity: 1,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            detectRetina: true,
            background: {
                color: "#1e2430" // Dark blue background like the example
            }
        }).then(function() {
            console.log("Particles initialized successfully");
        }).catch(function(error) {
            console.error("Error initializing particles:", error);
        });
    } else {
        console.error("tsParticles not found");
    }
    
    // Cross-browser compatible scroll functionality
    function smoothScroll(target) {
        console.log("Smoothscroll triggered for", target);
        if (target) {
            // Try multiple scroll methods for cross-browser compatibility
            try {
                // Method 1: scrollIntoView
                target.scrollIntoView({behavior: 'smooth'});
            } catch (e) {
                try {
                    // Method 2: Using window.scrollTo with offset
                    const yOffset = target.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({top: yOffset, behavior: 'smooth'});
                } catch (e2) {
                    // Method 3: Fallback for older browsers without smooth scroll
                    const yOffset = target.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo(0, yOffset);
                }
            }
        }
    }

    // Learn more button scroll
    const learnMoreButton = document.querySelector('.learn-more');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function(e) {
            e.preventDefault();
            const featuresSection = document.getElementById('features-section');
            smoothScroll(featuresSection);
        });
    }
    
    // Arrow down scroll
    const arrowDown = document.querySelector('.arrow-down');
    if (arrowDown) {
        arrowDown.addEventListener('click', function(e) {
            e.preventDefault();
            const featuresSection = document.getElementById('features-section');
            smoothScroll(featuresSection);
        });
    }
    
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Simple form validation
            const email = this.querySelector('[name="email"]').value;
            const name = this.querySelector('[name="name"]').value;
            const message = this.querySelector('[name="message"]').value;
            
            if (!email || !name || !message) {
                e.preventDefault(); // Prevent form submission if validation fails
                alert('Please fill out all required fields');
                return false;
            }
            
            // Form will naturally submit to the action URL
        });
    }
});