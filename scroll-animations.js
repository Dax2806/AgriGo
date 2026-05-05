// Scroll Animations for AgriGo
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-active');
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Optional: Re-trigger animations when scrolling back up
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // If scrolling up, remove active class to allow re-animation
        if (scrollTop < lastScrollTop) {
            animatedElements.forEach(element => {
                if (element.getBoundingClientRect().top > window.innerHeight) {
                    element.classList.remove('animate-active');
                }
            });
        }
        
        lastScrollTop = scrollTop;
    });
}); 