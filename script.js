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
                detectsOn: "canvas",
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab" // Lines connect on hover
                    },
                    onClick: {
                        enable: false
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 180,
                        links: {
                            opacity: 0.5
                        }
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
    
    // Smooth scroll for learn more button
    document.querySelector('.learn-more')?.addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('#features-section').offsetTop,
            behavior: 'smooth'
        });
    });
    
    // Smooth scroll for arrow down
    document.querySelector('.arrow-down')?.addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('#features-section').offsetTop,
            behavior: 'smooth'
        });
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // We're removing the preventDefault to allow the form to submit to Formspree
            // e.preventDefault();
            
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
            // No need to reset the form as the page will reload after submission
        });
    }
});