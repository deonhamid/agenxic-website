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
    
    // Rest of your code remains the same
});