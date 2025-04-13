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
    

// Close mobile menu when nav link is clicked
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Check if the mobile menu is active (visible)
        if (nav.classList.contains('mobile-nav-active')) {
            // Close the mobile menu
            nav.classList.remove('mobile-nav-active');
        }
    });
});


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
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Toggle current item
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    });
    
    // Optional - View All FAQs functionality
    const viewAllLink = document.querySelector('.view-all-link');
    if (viewAllLink) {
        viewAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const allClosed = [...faqToggles].every(toggle => 
                toggle.getAttribute('aria-expanded') === 'false'
            );
            
            if (allClosed) {
                // Open all FAQs
                faqToggles.forEach(toggle => {
                    toggle.setAttribute('aria-expanded', 'true');
                });
                viewAllLink.textContent = 'Close all FAQs';
            } else {
                // Close all FAQs
                faqToggles.forEach(toggle => {
                    toggle.setAttribute('aria-expanded', 'false');
                });
                viewAllLink.textContent = 'View all FAQs';
            }
        });
    }
});