// Agenxic Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    // Mobile Menu Toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('mobile-nav-active');
    });
}
    
    // Tabs for How We Work section
    const tabHeaders = document.querySelectorAll('.tab-header');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all headers and contents
            tabHeaders.forEach(h => h.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked header and corresponding content
            this.classList.add('active');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .process-step, .value-prop, .case-study-card, .team-member');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize animation styles
    const elementsToAnimate = document.querySelectorAll('.service-card, .process-step, .value-prop, .case-study-card, .team-member');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation check on scroll and initially
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle current item
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Optional: Close other items when one is opened
            // Uncomment the following code if you want only one FAQ open at a time
            /*
            if (!isExpanded) {
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== question) {
                        otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                });
            }
            */
        });
    });
});