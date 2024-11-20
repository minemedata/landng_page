document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.feature-card');
    const scrollSection = document.querySelector('.scrolling-features');
    const navbar = document.querySelector('.navbar');
    if (!cards.length || !scrollSection) return;

    // Calculate the scroll breakpoints for each card
    const cardCount = cards.length;
    const scrollBreakpoints = [];
    const sectionHeight = scrollSection.offsetHeight - window.innerHeight;
    const breakpointInterval = sectionHeight / (cardCount + 1);
    for (let i = 0; i <= cardCount; i++) {
        scrollBreakpoints.push(breakpointInterval * i);
    }

    const updateCards = () => {
        // Get the scroll position relative to the section
        const scrollTop = window.scrollY - scrollSection.offsetTop;
        
        // Update each card based on its position in the scroll
        cards.forEach((card, index) => {
            const cardStart = scrollBreakpoints[index];
            const cardEnd = scrollBreakpoints[index + 1];
            
            if (scrollTop >= cardStart && scrollTop < cardEnd) {
                // Card is active
                card.classList.add('active');
                card.classList.remove('previous', 'next');
            } else if (scrollTop >= cardEnd) {
                // Card has been scrolled past
                card.classList.add('previous');
                card.classList.remove('active', 'next');
            } else {
                // Card hasn't appeared yet
                card.classList.add('next');
                card.classList.remove('active', 'previous');
            }
        });
    };

    // Throttle scroll events for better performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateCards();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial update
    updateCards();

    // Enhanced Intersection Observer for accent text animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Reset animation when element leaves viewport
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: '-50px' // Small offset to ensure better trigger timing
    });

    // Observe all accent-text elements
    document.querySelectorAll('.accent-text').forEach(element => {
        observer.observe(element);
    });

    // Function to handle navbar background change on scroll
    const handleNavbarBackground = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleNavbarBackground);

    // Initial check in case the page is already scrolled on load
    handleNavbarBackground();

    const phrases = [
        'personalize every touchpoint',
        'build lifetime loyalty',
        'prevent silent churn'
    ];
    
    const typewriter = document.querySelector('.typewriter');
    let phraseIndex = 0;
    
    async function typePhrase(phrase) {
        for (let i = 0; i < phrase.length; i++) {
            typewriter.textContent += phrase.charAt(i);
            await new Promise(resolve => setTimeout(resolve, 100)); // Adjust typing speed here
        }
    }
    
    async function deletePhrase() {
        const phrase = typewriter.textContent;
        for (let i = phrase.length; i > 0; i--) {
            typewriter.textContent = phrase.substring(0, i - 1);
            await new Promise(resolve => setTimeout(resolve, 50)); // Adjust deletion speed here
        }
    }
    
    async function typewriterEffect() {
        while (true) {
            await typePhrase(phrases[phraseIndex]);
            await new Promise(resolve => setTimeout(resolve, 2000)); // Pause at the end of phrase
            await deletePhrase();
            await new Promise(resolve => setTimeout(resolve, 500)); // Pause between phrases
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }
    
    typewriterEffect();
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            
            // Highlight current page in navigation
            const currentPage = window.location.pathname.split('/').pop();
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error loading navbar:', error));

});

